// Legacy posts - will be replaced by modular templates
export const POSTS = {
	'01_post_hero_white.svg': () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#grad1)"/>
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="#333">{{TITLE}}</text>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="#666">{{SUBTITLE}}</text>
  <text x="540" y="800" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#007bff">{{CTA}}</text>
  <text x="540" y="950" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#999">{{HANDLE}}</text>
</svg>`,

	'02_post_hero_gradient.svg': () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#grad2)"/>
  <text x="540" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">{{TITLE}}</text>
  <text x="540" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="rgba(255,255,255,0.9)">{{SUBTITLE}}</text>
</svg>`,

	// Add more legacy templates here...
}; 