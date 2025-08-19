import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class HeroWhitePostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '01_post_hero_white.svg',
    displayName: 'Hero Post Blanc',
    description: 'Template de post hero avec fond blanc et gradient subtil',
    category: 'post',
    tags: ['hero', 'white', 'clean', 'gradient'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre principal du post',
        example: 'SOIRÉE PRIVÉE',
        required: true,
        defaultValue: 'SOIRÉE PRIVÉE',
      },
      {
        key: 'SUBTITLE',
        description: 'Sous-titre descriptif',
        example: 'Lumière • Son • Scène',
        required: false,
        defaultValue: 'Lumière • Son • Scène',
      },
      {
        key: 'CTA',
        description: 'Call to action',
        example: 'Plus d\'infos en bio',
        required: false,
        defaultValue: 'Plus d\'infos en bio',
      },
      {
        key: 'HANDLE',
        description: 'Handle Instagram',
        example: '@sterenova_',
        required: false,
        defaultValue: '@sterenova_',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, SUBTITLE, CTA, HANDLE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#grad1)"/>
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="#333">${TITLE}</text>
  ${SUBTITLE ? `<text x="540" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="#666">${SUBTITLE}</text>` : ''}
  ${CTA ? `<text x="540" y="800" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#007bff">${CTA}</text>` : ''}
  ${HANDLE ? `<text x="540" y="950" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#999">${HANDLE}</text>` : ''}
</svg>`;
  }
} 