import { BaseTemplate } from '../../base/base-template';
import { TemplateMetadata } from '../../interfaces/template.interface';

// Testimonial Stats
export class TestimonialStatsPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '09_post_testimonial_stats.svg',
    displayName: 'Post Témoignage avec Stats',
    description: 'Template de témoignage client avec statistiques',
    category: 'post',
    tags: ['testimonial', 'stats', 'client', 'review', 'numbers'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'QUOTE', description: 'Citation du client', example: '"Service impeccable."', required: true, defaultValue: '"Service impeccable."' },
      { key: 'AUTHOR', description: 'Auteur du témoignage', example: '— Client entreprise', required: false, defaultValue: '— Client entreprise' },
      { key: 'PHOTO_LABEL', description: 'Label pour la photo', example: 'Photo event', required: false, defaultValue: 'Photo event' },
      { key: 'STAT_1_VALUE', description: 'Première statistique', example: '+2000', required: false, defaultValue: '+2000' },
      { key: 'STAT_1_LABEL', description: 'Label première stat', example: 'Participants', required: false, defaultValue: 'Participants' },
      { key: 'STAT_2_VALUE', description: 'Deuxième statistique', example: '24h', required: false, defaultValue: '24h' },
      { key: 'STAT_2_LABEL', description: 'Label deuxième stat', example: 'Montage & démontage', required: false, defaultValue: 'Montage & démontage' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { QUOTE, AUTHOR, PHOTO_LABEL, STAT_1_VALUE, STAT_1_LABEL, STAT_2_VALUE, STAT_2_LABEL } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Photo section -->
  <rect x="40" y="40" width="1000" height="400" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="250" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">${PHOTO_LABEL}</text>
  
  <!-- Quote section -->
  <rect x="80" y="480" width="920" height="200" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="540" font-family="Arial, sans-serif" font-size="36" font-style="italic" text-anchor="middle" fill="#495057">${QUOTE}</text>
  <text x="540" y="580" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${AUTHOR}</text>
  
  <!-- Stats section -->
  <rect x="80" y="720" width="440" height="120" fill="#007bff" rx="10"/>
  <text x="300" y="770" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${STAT_1_VALUE}</text>
  <text x="300" y="810" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="rgba(255,255,255,0.9)">${STAT_1_LABEL}</text>
  
  <rect x="560" y="720" width="440" height="120" fill="#28a745" rx="10"/>
  <text x="780" y="770" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${STAT_2_VALUE}</text>
  <text x="780" y="810" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="rgba(255,255,255,0.9)">${STAT_2_LABEL}</text>
</svg>`;
  }
}

// Lineup
export class LineupPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '10_post_lineup.svg',
    displayName: 'Post Line-up',
    description: 'Template de line-up d\'artistes pour événements',
    category: 'post',
    tags: ['lineup', 'artists', 'event', 'music', 'dj'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre du line-up', example: 'LINE-UP', required: true, defaultValue: 'LINE-UP' },
      { key: 'ARTIST_1', description: 'Premier artiste', example: 'DJ NOVA', required: false, defaultValue: 'DJ NOVA' },
      { key: 'ARTIST_2', description: 'Deuxième artiste', example: 'LOLA • MATH', required: false, defaultValue: 'LOLA • MATH' },
      { key: 'ARTIST_3', description: 'Troisième artiste', example: 'ORION B2B LUNA', required: false, defaultValue: 'ORION B2B LUNA' },
      { key: 'ARTIST_4', description: 'Quatrième artiste', example: 'GUEST TBA', required: false, defaultValue: 'GUEST TBA' },
      { key: 'POSTER_LABEL', description: 'Label pour l\'affiche', example: 'Affiche', required: false, defaultValue: 'Affiche' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, ARTIST_1, ARTIST_2, ARTIST_3, ARTIST_4, POSTER_LABEL } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lineupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#343a40;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1080" height="1080" fill="url(#lineupGrad)"/>
  
  <!-- Title -->
  <text x="540" y="120" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Poster section -->
  <rect x="140" y="200" width="800" height="400" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="10"/>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.8)">${POSTER_LABEL}</text>
  
  <!-- Artists list -->
  <rect x="140" y="650" width="800" height="80" fill="rgba(255,255,255,0.1)" rx="40"/>
  <text x="540" y="700" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="white">${ARTIST_1}</text>
  
  <rect x="140" y="750" width="800" height="80" fill="rgba(255,255,255,0.1)" rx="40"/>
  <text x="540" y="800" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="white">${ARTIST_2}</text>
  
  <rect x="140" y="850" width="800" height="80" fill="rgba(255,255,255,0.1)" rx="40"/>
  <text x="540" y="900" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="white">${ARTIST_3}</text>
  
  <rect x="140" y="950" width="800" height="80" fill="rgba(255,255,255,0.1)" rx="40"/>
  <text x="540" y="1000" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="white">${ARTIST_4}</text>
</svg>`;
  }
}

// Quote Gradient
export class QuoteGradientPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '11_post_quote_gradient.svg',
    displayName: 'Post Citation Gradient',
    description: 'Template de citation avec fond gradient',
    category: 'post',
    tags: ['quote', 'gradient', 'inspiration', 'text'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'QUOTE', description: 'Citation principale', example: '"La lumière crée l\'ambiance."', required: true, defaultValue: '"La lumière crée l\'ambiance."' },
      { key: 'AUTHOR', description: 'Auteur de la citation', example: '— Équipe Sterenova', required: false, defaultValue: '— Équipe Sterenova' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { QUOTE, AUTHOR } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1080" height="1080" fill="url(#quoteGrad)"/>
  
  <!-- Quote marks -->
  <text x="200" y="300" font-family="Arial, sans-serif" font-size="120" fill="rgba(255,255,255,0.3)">"</text>
  <text x="880" y="700" font-family="Arial, sans-serif" font-size="120" fill="rgba(255,255,255,0.3)">"</text>
  
  <!-- Main quote -->
  <text x="540" y="450" font-family="Arial, sans-serif" font-size="48" font-style="italic" text-anchor="middle" fill="white">${QUOTE}</text>
  
  <!-- Author -->
  ${AUTHOR ? `<text x="540" y="600" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.9)">${AUTHOR}</text>` : ''}
</svg>`;
  }
}

// Agenda Month
export class AgendaMonthPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '12_post_agenda_month.svg',
    displayName: 'Post Agenda Mensuel',
    description: 'Template d\'agenda pour le mois',
    category: 'post',
    tags: ['agenda', 'month', 'calendar', 'events', 'planning'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de l\'agenda', example: 'AGENDA SEPTEMBRE', required: true, defaultValue: 'AGENDA SEPTEMBRE' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="150" fill="#495057"/>
  <text x="540" y="90" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Calendar grid -->
  <rect x="40" y="200" width="1000" height="800" fill="white" stroke="#dee2e6" stroke-width="3" rx="10"/>
  
  <!-- Calendar content placeholder -->
  <text x="540" y="600" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">Grille calendrier</text>
  <text x="540" y="650" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#adb5bd">Ajoutez vos événements ici</text>
</svg>`;
  }
}

// Tips Slide
export class TipsSlidePostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '13_post_tips_slide.svg',
    displayName: 'Post Conseils',
    description: 'Template de conseils et astuces',
    category: 'post',
    tags: ['tips', 'advice', 'how-to', 'tips-slide', 'education'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre des conseils', example: '3 CONSEILS ÉCLAIRAGE', required: true, defaultValue: '3 CONSEILS ÉCLAIRAGE' },
      { key: 'TIP_1', description: 'Premier conseil', example: 'Prévoir un DMX propre', required: false, defaultValue: 'Prévoir un DMX propre' },
      { key: 'TIP_2', description: 'Deuxième conseil', example: 'Ajouter du backlight', required: false, defaultValue: 'Ajouter du backlight' },
      { key: 'TIP_3', description: 'Troisième conseil', example: 'Utiliser un peu de fumée', required: false, defaultValue: 'Utiliser un peu de fumée' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, TIP_1, TIP_2, TIP_3 } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="150" fill="#17a2b8"/>
  <text x="540" y="90" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Tips -->
  <rect x="80" y="200" width="920" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="270" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#495057">${TIP_1}</text>
  
  <rect x="80" y="360" width="920" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="430" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#495057">${TIP_2}</text>
  
  <rect x="80" y="520" width="920" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="590" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#495057">${TIP_3}</text>
</svg>`;
  }
}

// New Arrival
export class NewArrivalPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '14_post_new_arrival.svg',
    displayName: 'Post Nouveauté',
    description: 'Template pour nouveaux produits arrivés',
    category: 'post',
    tags: ['new', 'arrival', 'product', 'stock', 'announcement'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de la nouveauté', example: 'NOUVEAUTÉ STOCK', required: true, defaultValue: 'NOUVEAUTÉ STOCK' },
      { key: 'PHOTO_LABEL', description: 'Label pour la photo produit', example: 'Photo produit', required: false, defaultValue: 'Photo produit' },
      { key: 'SUBTITLE', description: 'Sous-titre descriptif', example: 'Disponible dès maintenant — Devis en DM', required: false, defaultValue: 'Disponible dès maintenant — Devis en DM' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, PHOTO_LABEL, SUBTITLE } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="150" fill="#28a745"/>
  <text x="540" y="90" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Product photo -->
  <rect x="140" y="200" width="800" height="500" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="450" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">${PHOTO_LABEL}</text>
  
  <!-- Subtitle -->
  ${SUBTITLE ? `<text x="540" y="800" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#495057">${SUBTITLE}</text>` : ''}
</svg>`;
  }
}

// Collage Three
export class CollageThreePostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '15_post_collage_three.svg',
    displayName: 'Post Collage Trois Photos',
    description: 'Template de collage avec une grande et deux petites photos',
    category: 'post',
    tags: ['collage', 'photos', 'three', 'layout', 'gallery'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre du collage', example: 'MOMENTS', required: true, defaultValue: 'MOMENTS' },
      { key: 'PHOTO_MAIN', description: 'Label pour la grande photo', example: 'Grand', required: false, defaultValue: 'Grand' },
      { key: 'PHOTO_1', description: 'Label pour la première petite photo', example: 'Petit 1', required: false, defaultValue: 'Petit 1' },
      { key: 'PHOTO_2', description: 'Label pour la deuxième petite photo', example: 'Petit 2', required: false, defaultValue: 'Petit 2' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, PHOTO_MAIN, PHOTO_1, PHOTO_2 } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="120" fill="#6f42c1"/>
  <text x="540" y="75" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Main photo (left) -->
  <rect x="40" y="160" width="600" height="800" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="340" y="560" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">${PHOTO_MAIN}</text>
  
  <!-- Small photo 1 (top right) -->
  <rect x="680" y="160" width="360" height="380" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="860" y="350" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PHOTO_1}</text>
  
  <!-- Small photo 2 (bottom right) -->
  <rect x="680" y="580" width="360" height="380" fill="#e9ecef" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="860" y="770" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PHOTO_2}</text>
</svg>`;
  }
}

// Staff Intro
export class StaffIntroPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '16_post_staff_intro.svg',
    displayName: 'Post Présentation Staff',
    description: 'Template de présentation d\'un membre de l\'équipe',
    category: 'post',
    tags: ['staff', 'team', 'intro', 'portrait', 'bio'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de présentation', example: 'NOTRE ÉQUIPE', required: true, defaultValue: 'NOTRE ÉQUIPE' },
      { key: 'PORTRAIT_LABEL', description: 'Label pour le portrait', example: 'Portrait', required: false, defaultValue: 'Portrait' },
      { key: 'NAME', description: 'Nom du membre', example: 'Nom Prénom', required: false, defaultValue: 'Nom Prénom' },
      { key: 'ROLE', description: 'Rôle dans l\'équipe', example: 'Rôle', required: false, defaultValue: 'Rôle' },
      { key: 'BIO', description: 'Bio ou punchline', example: '"Courte bio ou punchline."', required: false, defaultValue: '"Courte bio ou punchline."' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, PORTRAIT_LABEL, NAME, ROLE, BIO } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="120" fill="#fd7e14"/>
  <text x="540" y="75" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Portrait -->
  <circle cx="540" cy="350" r="150" fill="#e9ecef" stroke="#dee2e6" stroke-width="3"/>
  <text x="540" y="360" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#6c757d">${PORTRAIT_LABEL}</text>
  
  <!-- Name -->
  ${NAME ? `<text x="540" y="580" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#495057">${NAME}</text>` : ''}
  
  <!-- Role -->
  ${ROLE ? `<text x="540" y="640" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#6c757d">${ROLE}</text>` : ''}
  
  <!-- Bio -->
  ${BIO ? `<text x="540" y="750" font-family="Arial, sans-serif" font-size="28" font-style="italic" text-anchor="middle" fill="#495057">${BIO}</text>` : ''}
</svg>`;
  }
}

// FAQ
export class FaqPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '17_post_faq.svg',
    displayName: 'Post FAQ',
    description: 'Template de questions fréquemment posées',
    category: 'post',
    tags: ['faq', 'questions', 'answers', 'help', 'info'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de la FAQ', example: 'FAQ RAPIDE', required: true, defaultValue: 'FAQ RAPIDE' },
      { key: 'Q1', description: 'Première question', example: 'Livrez-vous ?', required: false, defaultValue: 'Livrez-vous ?' },
      { key: 'A1', description: 'Première réponse', example: 'Oui, partout en IDF.', required: false, defaultValue: 'Oui, partout en IDF.' },
      { key: 'Q2', description: 'Deuxième question', example: 'Assistance technique ?', required: false, defaultValue: 'Assistance technique ?' },
      { key: 'A2', description: 'Deuxième réponse', example: 'Oui, montage/démontage.', required: false, defaultValue: 'Oui, montage/démontage.' },
      { key: 'Q3', description: 'Troisième question', example: 'Devis ?', required: false, defaultValue: 'Devis ?' },
      { key: 'A3', description: 'Troisième réponse', example: 'Sous 24h, gratuit.', required: false, defaultValue: 'Sous 24h, gratuit.' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, Q1, A1, Q2, A2, Q3, A3 } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#f8f9fa"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="1080" height="120" fill="#6f42c1"/>
  <text x="540" y="75" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Q1 & A1 -->
  <rect x="80" y="160" width="920" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="200" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#495057">${Q1}</text>
  <text x="540" y="240" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#6c757d">${A1}</text>
  
  <!-- Q2 & A2 -->
  <rect x="80" y="320" width="920" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="360" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#495057">${Q2}</text>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#6c757d">${A2}</text>
  
  <!-- Q3 & A3 -->
  <rect x="80" y="480" width="920" height="120" fill="white" stroke="#dee2e6" stroke-width="2" rx="10"/>
  <text x="540" y="520" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#495057">${Q3}</text>
  <text x="540" y="560" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#6c757d">${A3}</text>
</svg>`;
  }
}

// Event Teaser
export class EventTeaserPostTemplate extends BaseTemplate {
  readonly metadata: TemplateMetadata = {
    name: '18_post_event_teaser.svg',
    displayName: 'Post Teaser Événement',
    description: 'Template de teaser pour événements à venir',
    category: 'post',
    tags: ['event', 'teaser', 'upcoming', 'date', 'announcement'],
    dimensions: { width: 1080, height: 1080 },
    placeholders: [
      { key: 'TITLE', description: 'Titre de l\'événement', example: 'SAMEDI 21 SEPT', required: true, defaultValue: 'SAMEDI 21 SEPT' },
      { key: 'SUBTITLE', description: 'Détails de l\'événement', example: 'Paris • 20h – 02h', required: false, defaultValue: 'Paris • 20h – 02h' },
      { key: 'PHOTO_LABEL', description: 'Label pour le visuel', example: 'Visuel de l\'événement', required: false, defaultValue: 'Visuel de l\'événement' },
    ],
  };

  protected generateSvg(data: Record<string, string>): string {
    const { TITLE, SUBTITLE, PHOTO_LABEL } = data;
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="eventGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#dc3545;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c82333;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1080" height="1080" fill="url(#eventGrad)"/>
  
  <!-- Main title -->
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">${TITLE}</text>
  
  <!-- Subtitle -->
  ${SUBTITLE ? `<text x="540" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="rgba(255,255,255,0.9)">${SUBTITLE}</text>` : ''}
  
  <!-- Event visual -->
  <rect x="140" y="500" width="800" height="400" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="10"/>
  <text x="540" y="700" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.8)">${PHOTO_LABEL}</text>
</svg>`;
  }
} 