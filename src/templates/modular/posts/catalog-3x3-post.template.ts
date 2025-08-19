import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class Catalog3x3PostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '06_post_catalog_3x3.svg',
    displayName: 'Post Catalogue 3x3',
    description: 'Template de catalogue avec grille 3x3 de produits',
    category: 'post',
    tags: ['catalog', 'products', 'grid', '3x3', 'pricing', 'compact'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre du catalogue',
        example: 'CATALOGUE EXPRESS',
        required: true,
        defaultValue: 'CATALOGUE EXPRESS',
      },
      {
        key: 'PRODUCT_PHOTO',
        description: 'Label pour les photos de produits',
        example: 'Produit',
        required: false,
        defaultValue: 'Produit',
      },
      {
        key: 'PRODUCT_NAME',
        description: 'Nom du produit',
        example: 'Nom du produit',
        required: false,
        defaultValue: 'Nom du produit',
      },
      {
        key: 'PRODUCT_PRICE',
        description: 'Prix du produit',
        example: 'Dès 29€/j',
        required: false,
        defaultValue: 'Dès 29€/j',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, PRODUCT_PHOTO, PRODUCT_NAME, PRODUCT_PRICE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="120" fill="#495057"/>
  <text x="540" y="75" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Product Grid 3x3 -->
  <!-- Row 1 -->
  <rect x="40" y="160" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="190" y="260" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="190" y="320" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="190" y="340" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <rect x="390" y="160" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="540" y="260" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="540" y="320" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="540" y="340" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <rect x="740" y="160" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="890" y="260" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="890" y="320" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="890" y="340" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <!-- Row 2 -->
  <rect x="40" y="400" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="190" y="500" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="190" y="560" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="190" y="580" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <rect x="390" y="400" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="540" y="500" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="540" y="560" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="540" y="580" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <rect x="740" y="400" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="890" y="500" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="890" y="560" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="890" y="580" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <!-- Row 3 -->
  <rect x="40" y="640" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="190" y="740" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="190" y="800" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="190" y="820" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <rect x="390" y="640" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="540" y="740" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="540" y="800" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="540" y="820" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <rect x="740" y="640" width="300" height="200" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="8"/>
  <text x="890" y="740" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="890" y="800" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="890" y="820" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
</svg>`;
  }
} 