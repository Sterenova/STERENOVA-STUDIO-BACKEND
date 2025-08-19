import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class PromoPackPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '03_post_promo_pack.svg',
    displayName: 'Post Promo Pack',
    description: 'Template de post promotionnel pour pack de produits',
    category: 'post',
    tags: ['promo', 'pack', 'product', 'discount', 'pricing'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre du pack promotionnel',
        example: 'PACK LUMIÈRE PRO',
        required: true,
        defaultValue: 'PACK LUMIÈRE PRO',
      },
      {
        key: 'PHOTO_LABEL',
        description: 'Label pour la photo du pack',
        example: 'Photo du pack',
        required: false,
        defaultValue: 'Photo du pack',
      },
      {
        key: 'PRICE_LABEL',
        description: 'Label pour le prix',
        example: 'À partir de',
        required: false,
        defaultValue: 'À partir de',
      },
      {
        key: 'PRICE',
        description: 'Prix du pack',
        example: '299€',
        required: false,
        defaultValue: '299€',
      },
      {
        key: 'PROMO',
        description: 'Texte de promotion',
        example: '-15% CE MOIS-CI',
        required: false,
        defaultValue: '-15% CE MOIS-CI',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, PHOTO_LABEL, PRICE_LABEL, PRICE, PROMO } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="promoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ee5a24;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="200" fill="url(#promoGrad)"/>
  <text x="540" y="120" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Photo placeholder -->
  <rect x="140" y="250" width="800" height="400" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="450" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">${PHOTO_LABEL}</text>
  
  <!-- Price section -->
  <rect x="140" y="700" width="800" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="750" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PRICE_LABEL}</text>
  <text x="540" y="790" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#dc3545">${PRICE}</text>
  
  <!-- Promo badge -->
  ${PROMO ? `
  <rect x="340" y="850" width="400" height="60" fill="#28a745" rx="30"/>
  <text x="540" y="890" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white">${PROMO}</text>
  ` : ''}
</svg>`;
  }
} 