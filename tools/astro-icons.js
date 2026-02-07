// Zodiac sign SVG icons in gold
const zodiacIcons = {
    'Aries': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M6 8c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>`,
    'Taurus': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="6"/><path d="M5 8c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>`,
    'Gemini': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v20M18 2v20M6 6h12M6 18h12"/></svg>`,
    'Cancer': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M7 9c0-2.8 2.2-5 5-5s5 2.2 5 5M7 15c0 2.8 2.2 5 5 5s5-2.2 5-5"/></svg>`,
    'Leo': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M6 9c0 6 4 11 10 11"/><circle cx="16" cy="20" r="2"/></svg>`,
    'Virgo': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v14c0 2.2 1.8 4 4 4h0M9 2v16M15 2v16M21 2v10c0 3.3-2.7 6-6 6h-1"/></svg>`,
    'Libra': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18M3 18h18"/><path d="M12 2c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z"/></svg>`,
    'Scorpio': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v14c0 2.2 1.8 4 4 4h0M9 2v16M15 2v16M21 2v10l-3 3-3-3"/></svg>`,
    'Sagittarius': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l18-18M21 3v10M21 3h-10"/></svg>`,
    'Capricorn': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v14c0 2.2 1.8 4 4 4h0M9 2v16"/><circle cx="16" cy="16" r="5"/></svg>`,
    'Aquarius': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10c2-1 4 1 6 0s4-1 6 0 4 1 6 0M3 18c2-1 4 1 6 0s4-1 6 0 4 1 6 0"/></svg>`,
    'Pisces': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M6 4c-2 3-2 13 0 16M18 4c2 3 2 13 0 16"/></svg>`
};

// Planet SVG icons
const planetIcons = {
    'Sun': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
    'Moon': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    'Mercury': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/><path d="M12 2v4M12 18v4M6 6l3 3M15 15l3 3"/></svg>`,
    'Venus': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>`,
    'Mars': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="14" r="6"/><path d="M16 8l6-6M22 2v6M16 2h6"/></svg>`,
    'Jupiter': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M8 6h8M6 12h12M8 18h8"/></svg>`,
    'Saturn': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-3 0-5 2-5 5v10c0 3 2 5 5 5s5-2 5-5V7c0-3-2-5-5-5zM4 10h16"/></svg>`,
    'Uranus': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="6"/><path d="M12 2v6M8 4l4 4 4-4"/></svg>`,
    'Neptune': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M6 8v8c0 3.3 2.7 6 6 6s6-2.7 6-6V8"/></svg>`,
    'Pluto': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>`,
    'North Node': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l-8 8h6v10h4V10h6z"/></svg>`,
    'South Node': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22l8-8h-6V4h-4v10H4z"/></svg>`
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { zodiacIcons, planetIcons };
}








