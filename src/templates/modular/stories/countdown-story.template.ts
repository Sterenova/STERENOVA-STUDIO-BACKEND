import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class CountdownStoryTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '02_story_countdown.svg',
    displayName: 'Story Countdown',
    description: 'Template de story avec compte à rebours pour événements',
    category: 'story',
    tags: ['countdown', 'event', 'urgent', 'dark'],
    dimensions: { width: 1080, height: 1920 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Titre principal avec compte à rebours',
        example: 'J-7 AVANT LA SOIRÉE',
        required: true,
        defaultValue: 'J-7 AVANT LA SOIRÉE',
      },
      {
        key: 'COUNTDOWN_LABEL',
        description: 'Label pour le sticker countdown',
        example: 'Sticker COUNTDOWN ici',
        required: false,
        defaultValue: 'Sticker COUNTDOWN ici',
      },
      {
        key: 'SUBTITLE',
        description: 'Détails de l\'événement',
        example: 'Vendredi 29 mars — Paris',
        required: false,
        defaultValue: 'Vendredi 29 mars — Paris',
      },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, COUNTDOWN_LABEL, SUBTITLE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1080" height="1920" fill="#1a1a1a"/>
  
  <!-- Countdown circle -->
  <circle cx="540" cy="800" r="200" fill="none" stroke="#ff6b6b" stroke-width="8" opacity="0.3"/>
  <circle cx="540" cy="800" r="150" fill="none" stroke="#ff6b6b" stroke-width="6" opacity="0.6"/>
  <circle cx="540" cy="800" r="100" fill="none" stroke="#ff6b6b" stroke-width="4" opacity="0.9"/>
  
  <!-- Countdown label -->
  <rect x="340" y="700" width="400" height="80" fill="#ff6b6b" rx="40"/>
  <text x="540" y="750" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white">${COUNTDOWN_LABEL}</text>
  
  <!-- Main content -->
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  ${SUBTITLE ? `<text x="540" y="600" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
  
  <!-- Decorative elements -->
  <circle cx="200" cy="300" r="50" fill="rgba(255,107,107,0.2)"/>
  <circle cx="880" cy="400" r="40" fill="rgba(255,107,107,0.15)"/>
  <circle cx="150" cy="1400" r="60" fill="rgba(255,107,107,0.1)"/>
</svg>`;
  }
} 