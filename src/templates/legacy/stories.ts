// Legacy stories - will be replaced by modular templates
export const STORIES = {
	'01_story_hero_gradient.svg': () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#grad3)"/>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">{{TITLE}}</text>
  <text x="540" y="500" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="rgba(255,255,255,0.9)">{{SUBTITLE}}</text>
  <text x="540" y="1600" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="white">{{CTA}}</text>
  <text x="540" y="1700" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="rgba(255,255,255,0.8)">{{HANDLE}}</text>
</svg>`,

	'02_story_countdown.svg': () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1920" fill="#1a1a1a"/>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="white">{{TITLE}}</text>
  <text x="540" y="500" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#ff6b6b">{{COUNTDOWN_LABEL}}</text>
  <text x="540" y="600" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.9)">{{SUBTITLE}}</text>
</svg>`,

	// Add more legacy templates here...
}; 