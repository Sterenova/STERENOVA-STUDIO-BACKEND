import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class HeroGradientPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '02_post_hero_gradient.svg',
    displayName: 'Hero Post Gradient',
    description: 'Template de post hero avec fond gradient bleu-violet',
    category: 'post',
    tags: ['hero', 'gradient', 'blue', 'violet', 'modern'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre principal du post',
        example: 'ÉLÉGANCE & SON',
        required: true,
        defaultValue: 'ÉLÉGANCE & SON',
      },
      {
        key: 'SUBTITLE',
        description: 'Sous-titre descriptif',
        example: 'Événementiel & location premium',
        required: false,
        defaultValue: 'Événementiel & location premium',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, SUBTITLE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#grad2)"/>
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  ${SUBTITLE ? `<text x="540" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
</svg>`;
  }
} 