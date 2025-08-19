import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class Catalog2x2PostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '05_post_catalog_2x2.svg',
    displayName: 'Post Catalogue 2x2',
    description: 'Template de catalogue avec grille 2x2 de produits',
    category: 'post',
    tags: ['catalog', 'products', 'grid', '2x2', 'pricing'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre du catalogue',
        example: 'CATALOGUE',
        required: true,
        defaultValue: 'CATALOGUE',
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
        example: 'Dès 39€/jour',
        required: false,
        defaultValue: 'Dès 39€/jour',
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
  <rect x="0" y="0" width="1080" height="150" fill="#343a40"/>
  <text x="540" y="90" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Product Grid 2x2 -->
  <!-- Product 1 -->
  <rect x="80" y="200" width="400" height="300" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="280" y="350" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="280" y="550" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="280" y="580" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <!-- Product 2 -->
  <rect x="600" y="200" width="400" height="300" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="800" y="350" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="800" y="550" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="800" y="580" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <!-- Product 3 -->
  <rect x="80" y="550" width="400" height="300" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="280" y="700" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="280" y="900" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="280" y="930" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
  
  <!-- Product 4 -->
  <rect x="600" y="550" width="400" height="300" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="800" y="700" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PRODUCT_PHOTO}</text>
  <text x="800" y="900" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#495057">${PRODUCT_NAME}</text>
  <text x="800" y="930" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#007bff">${PRODUCT_PRICE}</text>
</svg>`;
  }
} 