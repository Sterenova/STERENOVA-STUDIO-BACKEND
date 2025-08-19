import { BaseTemplate } from '../base/base-template';
import { TemplateMetadata } from '../interfaces/template.interface';

export class HeroPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: 'hero-post',
    displayName: 'Hero Post',
    description: 'A beautiful hero post template with gradient background',
    category: 'post',
    tags: ['hero', 'gradient', 'modern'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      {
        key: 'TITLE',
        description: 'Main headline text',
        example: 'SOIRÉE EXCLUSIVE',
        required: true,
        defaultValue: 'SOIRÉE EXCLUSIVE',
      },
      {
        key: 'SUBTITLE',
        description: 'Secondary text below title',
        example: 'VIP • Champagne • DJ',
        required: false,
        defaultValue: 'Événement premium',
      },
      {
        key: 'CTA',
        description: 'Call to action text',
        example: 'Réservez maintenant',
        required: false,
        defaultValue: 'Plus d\'infos en bio',
      },
      {
        key: 'HANDLE',
        description: 'Instagram handle',
        example: '@mon_entreprise',
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
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1080" height="1080" fill="url(#heroGrad)"/>
  
  <!-- Decorative elements -->
  <circle cx="200" cy="200" r="100" fill="rgba(255,255,255,0.1)"/>
  <circle cx="880" cy="300" r="80" fill="rgba(255,255,255,0.08)"/>
  <circle cx="150" cy="800" r="120" fill="rgba(255,255,255,0.06)"/>
  
  <!-- Main content -->
  <g filter="url(#shadow)">
    <text x="540" y="350" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
    ${SUBTITLE ? `<text x="540" y="450" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
  </g>
  
  <!-- CTA Section -->
  ${CTA ? `
  <rect x="340" y="700" width="400" height="80" rx="40" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
  <text x="540" y="750" font-family="Arial, sans-serif" font-size="32" font-weight="600" text-anchor="middle" fill="white">${CTA}</text>
  ` : ''}
  
  <!-- Handle -->
  ${HANDLE ? `<text x="540" y="950" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="rgba(255,255,255,0.8)">${HANDLE}</text>` : ''}
</svg>`;
  }
} 