import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class BeforeAfterVerticalPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '07_post_before_after_vertical.svg',
    displayName: 'Post Avant/Après Vertical',
    description: 'Template de comparaison avant/après en format vertical',
    category: 'post',
    tags: ['before-after', 'comparison', 'vertical', 'transformation'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre de la comparaison',
        example: 'AVANT / APRÈS',
        required: true,
        defaultValue: 'AVANT / APRÈS',
      },
      {
        key: 'BEFORE_LABEL',
        description: 'Label pour la section avant',
        example: 'AVANT',
        required: false,
        defaultValue: 'AVANT',
      },
      {
        key: 'AFTER_LABEL',
        description: 'Label pour la section après',
        example: 'APRÈS',
        required: false,
        defaultValue: 'APRÈS',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, BEFORE_LABEL, AFTER_LABEL } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="120" fill="#6c757d"/>
  <text x="540" y="75" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Before section -->
  <rect x="40" y="160" width="1000" height="400" fill="#e9ecef" stroke="#dee2e6" stroke-width="3" rx="10"/>
  <text x="540" y="200" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#495057">${BEFORE_LABEL}</text>
  <rect x="80" y="220" width="920" height="320" fill="#adb5bd" stroke="#6c757d" stroke-width="2" rx="8"/>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">Photo AVANT</text>
  
  <!-- After section -->
  <rect x="40" y="600" width="1000" height="400" fill="#e9ecef" stroke="#dee2e6" stroke-width="3" rx="10"/>
  <text x="540" y="640" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#495057">${AFTER_LABEL}</text>
  <rect x="80" y="660" width="920" height="320" fill="#28a745" stroke="#20c997" stroke-width="2" rx="8"/>
  <text x="540" y="840" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">Photo APRÈS</text>
</svg>`;
  }
} 