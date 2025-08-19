import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class HeroGradientStoryTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '01_story_hero_gradient.svg',
    displayName: 'Story Hero Gradient',
    description: 'Template de story hero avec fond gradient bleu-violet',
    category: 'story',
    tags: ['hero', 'gradient', 'blue', 'violet', 'story'],
    dimensions: { width: 1080, height: 1920 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre principal de la story',
        example: 'ÉLÉGANCE & SON',
        required: true,
        defaultValue: 'ÉLÉGANCE & SON',
      },
      {
        key: 'SUBTITLE',
        description: 'Sous-titre descriptif',
        example: 'Location premium • devis rapide',
        required: false,
        defaultValue: 'Location premium • devis rapide',
      },
      {
        key: 'PHOTO_LABEL',
        description: 'Label pour la photo principale',
        example: 'Photo plein écran',
        required: false,
        defaultValue: 'Photo plein écran',
      },
      {
        key: 'CTA',
        description: 'Call to action',
        example: 'RÉSERVEZ VOTRE DATE',
        required: false,
        defaultValue: 'RÉSERVEZ VOTRE DATE',
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
    const { TITLE, SUBTITLE, PHOTO_LABEL, CTA, HANDLE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1080" height="1920" fill="url(#grad3)"/>
  
  <!-- Photo placeholder -->
  <rect x="40" y="600" width="1000" height="800" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="20"/>
  <text x="540" y="1000" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.8)">${PHOTO_LABEL}</text>
  
  <!-- Content -->
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  ${SUBTITLE ? `<text x="540" y="500" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
  
  <!-- CTA Button -->
  ${CTA ? `
  <rect x="240" y="1500" width="600" height="100" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="2" rx="50"/>
  <text x="540" y="1560" font-family="Arial, sans-serif" font-size="32" font-weight="600" text-anchor="middle" fill="white">${CTA}</text>
  ` : ''}
  
  <!-- Handle -->
  ${HANDLE ? `<text x="540" y="1700" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="rgba(255,255,255,0.8)">${HANDLE}</text>` : ''}
</svg>`;
  }
} 