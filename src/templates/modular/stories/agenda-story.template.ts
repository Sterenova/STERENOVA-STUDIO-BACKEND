import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class AgendaStoryTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '04_story_agenda.svg',
    displayName: 'Story Agenda',
    description: 'Template de story avec agenda du week-end',
    category: 'story',
    tags: ['agenda', 'weekend', 'events', 'schedule', 'planning'],
    dimensions: { width: 1080, height: 1920 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de l\'agenda', example: 'CE WEEK-END', required: true, defaultValue: 'CE WEEK-END' },
      { key: 'PHOTO_LABEL', description: 'Label pour le visuel principal', example: 'Visuel principal', required: false, defaultValue: 'Visuel principal' },
      { key: 'L1', description: 'Première ligne agenda', example: 'Ven 20: Soirée Fluo — Paris 11e', required: false, defaultValue: 'Ven 20: Soirée Fluo — Paris 11e' },
      { key: 'L2', description: 'Deuxième ligne agenda', example: 'Sam 21: Mariage — Versailles', required: false, defaultValue: 'Sam 21: Mariage — Versailles' },
      { key: 'L3', description: 'Troisième ligne agenda', example: 'Dim 22: Afterwork — Boulogne', required: false, defaultValue: 'Dim 22: Afterwork — Boulogne' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, PHOTO_LABEL, L1, L2, L3 } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1920" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="200" fill="#6f42c1"/>
  <text x="540" y="120" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Main photo -->
  <rect x="40" y="250" width="1000" height="500" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="500" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">${PHOTO_LABEL}</text>
  
  <!-- Agenda lines -->
  <rect x="40" y="800" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="870" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${L1}</text>
  
  <rect x="40" y="950" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="1020" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${L2}</text>
  
  <rect x="40" y="1100" width="1000" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="1170" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#495057">${L3}</text>
</svg>`;
  }
} 