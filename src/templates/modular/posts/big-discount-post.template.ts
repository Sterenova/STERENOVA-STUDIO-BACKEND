import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class BigDiscountPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '04_post_promo_big_discount.svg',
    displayName: 'Post Promo Gros Rabais',
    description: 'Template de post promotionnel avec gros rabais',
    category: 'post',
    tags: ['promo', 'discount', 'big', 'urgent', 'red'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre principal avec pourcentage de rabais',
        example: '-25% LOCATION',
        required: true,
        defaultValue: '-25% LOCATION',
      },
      {
        key: 'SUBTITLE',
        description: 'Sous-titre avec limitation temporelle',
        example: 'Cette semaine uniquement',
        required: false,
        defaultValue: 'Cette semaine uniquement',
      },
      {
        key: 'CODE',
        description: 'Code promotionnel',
        example: 'Code: NOVA25',
        required: false,
        defaultValue: 'Code: NOVA25',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, SUBTITLE, CODE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="discountGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#dc3545;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c82333;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1080" height="1080" fill="url(#discountGrad)"/>
  
  <!-- Main title -->
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="96" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Subtitle -->
  ${SUBTITLE ? `<text x="540" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
  
  <!-- Promo code badge -->
  ${CODE ? `
  <rect x="240" y="600" width="600" height="120" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="3" rx="60"/>
  <text x="540" y="670" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="white">${CODE}</text>
  ` : ''}
  
  <!-- Decorative elements -->
  <circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.1)"/>
  <circle cx="880" cy="300" r="60" fill="rgba(255,255,255,0.08)"/>
  <circle cx="150" cy="800" r="100" fill="rgba(255,255,255,0.06)"/>
</svg>`;
  }
} 