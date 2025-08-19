import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class BeforeAfterHorizontalPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '08_post_before_after_horizontal.svg',
    displayName: 'Post Avant/Après Horizontal',
    description: 'Template de comparaison avant/après en format horizontal',
    category: 'post',
    tags: ['before-after', 'comparison', 'horizontal', 'transformation'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de la comparaison', example: 'AVANT / APRÈS', required: true, defaultValue: 'AVANT / APRÈS' },
      { key: 'BEFORE_LABEL', description: 'Label pour la section avant', example: 'AVANT', required: false, defaultValue: 'AVANT' },
      { key: 'AFTER_LABEL', description: 'Label pour la section après', example: 'APRÈS', required: false, defaultValue: 'APRÈS' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, BEFORE_LABEL, AFTER_LABEL } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  <rect x="0" y="0" width="1080" height="120" fill="#6c757d"/>
  <text x="540" y="75" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Before section (left) -->
  <rect x="40" y="160" width="480" height="700" fill="#e9ecef" stroke="#dee2e6" stroke-width="3" rx="10"/>
  <text x="280" y="200" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#495057">${BEFORE_LABEL}</text>
  <rect x="80" y="220" width="400" height="620" fill="#adb5bd" stroke="#6c757d" stroke-width="2" rx="8"/>
  <text x="280" y="550" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">Photo AVANT</text>
  
  <!-- After section (right) -->
  <rect x="560" y="160" width="480" height="700" fill="#e9ecef" stroke="#dee2e6" stroke-width="3" rx="10"/>
  <text x="800" y="200" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#495057">${AFTER_LABEL}</text>
  <rect x="600" y="220" width="400" height="620" fill="#28a745" stroke="#20c997" stroke-width="2" rx="8"/>
  <text x="800" y="550" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">Photo APRÈS</text>
</svg>`;
  }
} 