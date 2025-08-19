import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class PricelistStoryTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '03_story_pricelist.svg',
    displayName: 'Story Liste de Prix',
    description: 'Template de story avec liste de prix de matériel',
    category: 'story',
    tags: ['pricelist', 'pricing', 'equipment', 'rental', 'services'],
    dimensions: { width: 1080, height: 1920 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de la liste de prix', example: 'LOCATION MATÉRIEL', required: true, defaultValue: 'LOCATION MATÉRIEL' },
      { key: 'ITEM_1', description: 'Premier item', example: 'Pack Son 2x12" + table', required: false, defaultValue: 'Pack Son 2x12" + table' },
      { key: 'PRICE_1', description: 'Prix du premier item', example: '99€/jour', required: false, defaultValue: '99€/jour' },
      { key: 'ITEM_2', description: 'Deuxième item', example: 'Pack Lumière 8x PAR + contrôleur', required: false, defaultValue: 'Pack Lumière 8x PAR + contrôleur' },
      { key: 'PRICE_2', description: 'Prix du deuxième item', example: '89€/jour', required: false, defaultValue: '89€/jour' },
      { key: 'ITEM_3', description: 'Troisième item', example: 'Structure Truss 3x3', required: false, defaultValue: 'Structure Truss 3x3' },
      { key: 'PRICE_3', description: 'Prix du troisième item', example: '59€/jour', required: false, defaultValue: '59€/jour' },
      { key: 'ITEM_4', description: 'Quatrième item', example: 'Machine à fumée 900W', required: false, defaultValue: 'Machine à fumée 900W' },
      { key: 'PRICE_4', description: 'Prix du quatrième item', example: '29€/jour', required: false, defaultValue: '29€/jour' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, ITEM_1, PRICE_1, ITEM_2, PRICE_2, ITEM_3, PRICE_3, ITEM_4, PRICE_4 } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1920" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="200" fill="#495057"/>
  <text x="540" y="120" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Price items -->
  <rect x="40" y="250" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${ITEM_1}</text>
  <text x="540" y="340" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#007bff">${PRICE_1}</text>
  
  <rect x="40" y="400" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="450" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${ITEM_2}</text>
  <text x="540" y="490" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#007bff">${PRICE_2}</text>
  
  <rect x="40" y="550" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="600" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${ITEM_3}</text>
  <text x="540" y="640" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#007bff">${PRICE_3}</text>
  
  <rect x="40" y="700" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="750" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${ITEM_4}</text>
  <text x="540" y="790" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#007bff">${PRICE_4}</text>
</svg>`;
  }
} 