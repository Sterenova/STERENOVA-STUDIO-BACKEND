import { Injectable } from '@nestjs/common';
import { TemplateRegistryService } from './registry/template-registry.service';
import * as archiver from 'archiver';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

@Injectable()
export class TemplatesService {
  constructor(private readonly registry: TemplateRegistryService) {}

  list() {
    return this.registry.getAllMetadata();
  }

  getOne(kind: 'post' | 'story', name: string): string | undefined {
    const template = this.registry.getTemplate(`${kind}/${name}`);
    if (!template) return undefined;
    
    // Generate with default values
    return template.generate({});
  }

  generateOne(kind: 'post' | 'story', name: string, replacements: Record<string, string> = {}): string {
    const template = this.registry.getTemplate(`${kind}/${name}`);
    if (!template) {
      throw new Error(`Unknown template ${kind}/${name}`);
    }
    
    return template.generate(replacements);
  }

  getPreset(kind: 'post' | 'story', name: string): Record<string, string> {
    const template = this.registry.getTemplate(`${kind}/${name}`);
    if (!template) {
      throw new Error(`Unknown template ${kind}/${name}`);
    }
    
    return template.getPreset();
  }

  getAllPresets() {
    const templates = this.registry.getAllTemplates();
    const presets: Record<string, Record<string, string>> = {};
    
    for (const [key, template] of Object.entries(templates)) {
      presets[key] = template.getPreset();
    }
    
    return presets;
  }

  applyPlaceholders(sourceSvg: string, values: Record<string, string>): string {
    let svg = sourceSvg;
    for (const [key, val] of Object.entries(values)) {
      const pattern = new RegExp(this.escapeRegExp(`{{${key}}}`), 'g');
      svg = svg.replace(pattern, String(val));
    }
    return svg;
  }

  private escapeRegExp(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  async zipAll(targetDir: string): Promise<string> {
    const templates = this.registry.getAllTemplates();
    const archive = archiver('zip', { zlib: { level: 9 } });
    const outPath = join(targetDir, `sterenova_templates_${Date.now()}.zip`);
    const output = createWriteStream(outPath);

    return new Promise((resolve, reject) => {
      output.on('close', () => resolve(outPath));
      archive.on('error', reject);
      archive.pipe(output);

      // Add each template
      for (const [key, template] of Object.entries(templates)) {
        const svg = template.generate({});
        const filename = `${key}.svg`;
        archive.append(svg, { name: filename });
      }

      archive.finalize();
    });
  }

  // New methods for template management
  getTemplateInfo(key: string) {
    return this.registry.getTemplateMetadata(key);
  }

  getTemplatesByCategory(category: 'post' | 'story') {
    return this.registry.getTemplatesByCategory(category);
  }

  searchTemplates(query: string) {
    const allMetadata = this.registry.getAllMetadata();
    const lowerQuery = query.toLowerCase();
    
    return allMetadata.filter(template => 
      template.name.toLowerCase().includes(lowerQuery) ||
      template.displayName.toLowerCase().includes(lowerQuery) ||
      template.description.toLowerCase().includes(lowerQuery) ||
      template.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }
} 