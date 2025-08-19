import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

export class PollStoryTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '05_story_poll.svg',
    displayName: 'Story Sondage',
    description: 'Template de story avec sondage interactif',
    category: 'story',
    tags: ['poll', 'interactive', 'question', 'engagement', 'voting'],
    dimensions: { width: 1080, height: 1920 },
    placeholders: [
      { key: 'TITLE', description: 'Question du sondage', example: 'QUEL STYLE ?', required: true, defaultValue: 'QUEL STYLE ?' },
      { key: 'POLL_LABEL', description: 'Label pour le sticker poll', example: 'Sticker POLL ici', required: false, defaultValue: 'Sticker POLL ici' },
      { key: 'SUBTITLE', description: 'Options du sondage', example: 'Fluo, doré, ou minimal ?', required: false, defaultValue: 'Fluo, doré, ou minimal ?' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, POLL_LABEL, SUBTITLE } = data;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#17a2b8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#138496;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1080" height="1920" fill="url(#pollGrad)"/>
  
  <!-- Main title -->
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Poll sticker -->
  <rect x="340" y="500" width="400" height="100" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="3" rx="50"/>
  <text x="540" y="570" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="white">${POLL_LABEL}</text>
  
  <!-- Subtitle -->
  ${SUBTITLE ? `<text x="540" y="700" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
  
  <!-- Poll options placeholder -->
  <rect x="140" y="800" width="800" height="800" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="20"/>
  <text x="540" y="1200" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.8)">Options du sondage</text>
</svg>`;
  }
} 