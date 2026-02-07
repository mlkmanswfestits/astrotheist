
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = path.join('C:', 'Users', 'chann', '.gemini', 'antigravity', 'scratch', 'astrotheist', 'tools', 'horoscopes');
const SIGNS = [
    "aries", "taurus", "gemini", "cancer",
    "leo", "virgo", "libra", "scorpio",
    "sagittarius", "capricorn", "aquarius", "pisces"
];
const SIGN_DISPLAY = {
    "aries": "Aries", "taurus": "Taurus", "gemini": "Gemini", "cancer": "Cancer",
    "leo": "Leo", "virgo": "Virgo", "libra": "Libra", "scorpio": "Scorpio",
    "sagittarius": "Sagittarius", "capricorn": "Capricorn", "aquarius": "Aquarius", "pisces": "Pisces"
};
const SIGN_EMOJIS = {
    "aries": "♈", "taurus": "♉", "gemini": "♊", "cancer": "♋",
    "leo": "♌", "virgo": "♍", "libra": "♎", "scorpio": "♏",
    "sagittarius": "♐", "capricorn": "♑", "aquarius": "♒", "pisces": "♓"
};

const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - AstroTheist</title>
    <meta name="description" content="{description}">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../../../styles.css">
    <link rel="stylesheet" href="../../../order-form.css">
</head>
<body>
    <nav class="astro-navbar">
        <div class="astro-container astro-nav-container">
            <a href="../../../index.html" class="astro-logo">
                <svg class="astro-logo-icon" viewBox="0 0 100 60" width="100" height="60">
                    <circle cx="25" cy="40" r="1.5" fill="currentColor" />
                    <circle cx="45" cy="35" r="1.5" fill="currentColor" />
                    <circle cx="65" cy="20" r="2.5" fill="currentColor" />
                    <circle cx="85" cy="30" r="1.5" fill="currentColor" />
                    <circle cx="35" cy="50" r="1.5" fill="currentColor" />
                    <path d="M25 40 L45 35 L65 20 L85 30 M45 35 L35 50" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6" />
                    <path d="M65 20 L65 10 M60 20 L70 20" stroke="currentColor" stroke-width="0.5" fill="none" />
                </svg>
                <span class="astro-logo-text">astrotheist</span>
            </a>
            <button class="astro-mobile-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="ms-auto d-none d-md-block">
                 <a href="../../horoscopes.html" class="btn btn-outline-light btn-sm">Back to Horoscopes</a>
            </div>
        </div>
    </nav>

    <section class="hero" style="min-height: 40vh;">
        <div class="hero-background"></div>
        <div class="astro-container hero-content">
            <div style="font-size: 4rem; margin-bottom: 1rem; color: var(--gold-primary);">{emoji}</div>
            <h1 class="hero-title">{heading}</h1>
            <p class="hero-subtitle">{date_label}</p>
        </div>
    </section>

    <section class="section" style="background: var(--black-deep); color: var(--white-soft);">
        <div class="astro-container" style="max-width: 800px;">
            
            <div class="content-card" style="padding: 2.5rem; border: 1px solid rgba(197, 160, 89, 0.2); background: rgba(30, 30, 30, 0.6); backdrop-filter: blur(10px);">
                <h2 style="color: var(--gold-primary); margin-bottom: 2rem; border-bottom: 1px solid rgba(197,160,89,0.3); padding-bottom: 1rem;">{sub_heading}</h2>
                <div class="horoscope-content" style="font-size: 1.1rem; line-height: 1.8; color: var(--white-soft);">
                    {content}
                </div>
            </div>

            <div class="cta-box" style="margin: 4rem 0;">
                <h3 style="color: var(--white-soft);">Want deeper insights?</h3>
                <p>Unlock the secrets of your full birth chart.</p>
                <a href="../../../services/natal-report.html" class="btn btn-primary btn-large">Get Natal Report</a>
            </div>

            <!-- Bottom Navigation for Timeframes -->
            <div class="d-flex flex-wrap justify-content-center gap-3" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <a href="../daily/{sign}.html" class="btn {btn_daily}">Daily</a>
                <a href="../weekly/{sign}.html" class="btn {btn_weekly}">Weekly</a>
                <a href="../monthly/{sign}.html" class="btn {btn_monthly}">Monthly</a>
                <a href="../yearly/{sign}.html" class="btn {btn_yearly}">2026 Yearly</a>
            </div>

            <!-- Sign Navigation -->
            <div style="margin-top: 4rem; text-align: center;">
                <p style="color: var(--purple-soft); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;">View Another Sign</p>
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    {sign_links}
                </div>
            </div>

        </div>
    </section>

    <footer class="footer">
        <div class="astro-container">
            <div class="footer-bottom">
                <p>&copy; 2026 AstroTheist. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <script src="../../../script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

function generateDailyContent(sign) {
    return `
    <p><strong>Toady's Cosmic Forecast for ${sign}:</strong></p>
    <p>As the sun rises, the celestial energies invite ${sign} to step into their personal power. The alignment of the planets today emphasizes the need for a balanced approach between your inner world and outer responsibilities. You may feel a subtle shift in the atmosphere, one that encourages introspection while demanding action. This is the paradox of the day: finding stillness in motion.</p>
    
    <p><strong>Love & Relationships:</strong><br>In matters of the heart, clarity is paramount. Whether you are single or in a partnership, the universe is asking you to communicate your needs with authenticity. There may be a tendency today to idealize situations or people, so keeping a grounded perspective is essential. If you are in a relationship, take time to listen—truly listen—to your partner. Small gestures of kindness will go a long way. For singles, a chance encounter could spark a meaningful connection, but trust your intuition to guide you.</p>
    
    <p><strong>Career & Ambition:</strong><br>Your professional sector is active today, suggesting that focus and discipline will yield results. It's a good day for planning and strategy rather than impulsive decisions. If you have been working on a long-term project, you might find a breakthrough in the details. Collaboration with colleagues requires patience; ensure that everyone is on the same page before moving forward. Remember, your unique perspective as a ${sign} is your asset—don't be afraid to share your innovative ideas.</p>
    
    <p><strong>Wellness & Spirit:</strong><br>Physical vitality is linked to your emotional state today. If you feel drained, it might be a sign to step back and recharge. Hydration and movement are key. A brisk walk or a short meditation session can do wonders for mental clarity. Spiritually, pay attention to your dreams and daydreams; they may contain messages or symbols relevant to your current path.</p>
    
    <p><strong>Affirmation:</strong> "I move through my day with purpose and grace, trusting that I am exactly where I need to be."</p>
    
    <p style="font-size: 0.9rem; color: var(--purple-soft); margin-top: 2rem;"><em>(This daily insight is crafted based on the archetypal energies of ${sign} and general planetary movements.)</em></p>
    `;
}

function generateWeeklyContent(sign) {
    return `
    <p><strong>Weekly Overview for ${sign}:</strong></p>
    <p>This week presents a dynamic landscape for ${sign}, filled with opportunities for growth and self-discovery. The planetary transits are encouraging you to expand your horizons, whether through learning, travel, or simply exploring new ways of thinking. There is a sense of momentum building, and you might feel a surge of energy pushing you to break free from old routines. Embrace this freshness, but pace yourself to avoid burnout.</p>
    
    <p><strong>Monday - Tuesday: The Spark</strong><br>The week begins with a burst of creative or intellectual energy. Your mind is sharp, and you are likely to come up with solutions to problems that have been nagging you. It's an excellent time for brainstorming, writing, or initiating conversations. Communication allows you to bridge gaps—reach out to those you haven't spoken to in a while. However, be mindful of being too blunt; honesty is a virtue, but delivery matters.</p>
    
    <p><strong>Wednesday - Thursday: The Grind</strong><br>Mid-week brings a shift toward practical matters. The focus turns to finances, work, and daily obligations. You might find yourself organizing, budgeting, or dealing with administrative tasks. While this might not sound glamorous, it provides the stable foundation you need for the future. Discipline exercised now will pay dividends later. If you feel overwhelmed, prioritize your tasks and tackle them one by one. Asking for help is also a sign of strength, not weakness.</p>
    
    <p><strong>Friday - Sunday: The Release</strong><br>As the weekend approaches, the energy lightens. Social connections and leisure take center stage. For ${sign}, this is a time to reconnect with your tribe. Surround yourself with people who uplift you and share your vision. Romantic energies are also heightened; plan a date night or a fun outing with friends. Sunday is best reserved for rest and reflection, preparing you for the cycle ahead.</p>
    
    <p><strong>Love & Harmony:</strong><br>This week, relationships act as a mirror. What you see in others may reflect something within yourself that needs attention. Be open to feedback. If conflicts arise, approach them with a willingness to understand the other perspective. Vulnerability can strengthen bonds that have become superficial.</p>
    
    <p><strong>Professional Focus:</strong><br>In your career, consistency is your best friend this week. You may not see immediate fireworks, but the steady progress you make is accumulating. Keep your eye on the long-term vision. A mentor or authority figure might offer valuable advice—take it to heart.</p>
    
    <p><strong>Cosmic Tip:</strong> Trust the timing of your life. Not everything needs to happen all at once.</p>
    `;
}

function generateMonthlyContent(sign) {
    return `
    <p><strong>February 2026 Monthly Horoscope for ${sign}</strong></p>
    <p>February creates a pivotal chapter for ${sign}, marking a transition from reflection to action. The energies of the month are complex, weaving together threads of past lessons with future aspirations. You are being asked to integrate what you have learned over the last few months and apply it to your current reality. This is a month of crystallization—ideas become plans, and plans become reality.</p>
    
    <p><strong>Week 1: Setting the Stage</strong><br>The first week involves heavy emphasis on your personal sector. You are more visible than usual, and your charisma is high. Use this time to advocate for yourself and your goals. However, with this increased visibility comes responsibility. Others are looking to you for leadership or guidance. Stand tall in your authenticity. It’s also a prime time for a makeover or a refresh of your personal brand.</p>
    
    <p><strong>Week 2: Deep Dive</strong><br>As we move into the second week, the focus shifts inward. You may confront some shadow aspects or deep-seated fears. Do not turn away; this is the work of the soul. Healing old wounds requires acknowledging them first. Therapy, journaling, or deep conversations with a trusted confidant can be incredibly purging. Finanical matters also come to the fore—review your investments and spending habits.</p>
    
    <p><strong>Week 3: The Turning Point</strong><br>The Full Moon this month illuminates a key area of your life, bringing a situation to a climax. For ${sign}, this likely involves the balance between work and home. You may need to make a decision that has been pending. Trust your gut. The tension you feel is the energy necessary to break through a stalemate. Release what is no longer serving your highest good, whether it's a habit, a job, or a relationship dynamic.</p>
    
    <p><strong>Week 4: Integration</strong><br>The final week is about finding your new normal. After the intensity of the mid-month, the dust begins to settle. You have a clearer vision of where you are going. This is a great time for social networking and connecting with your community. Your experiences have given you wisdom that can benefit others. Share your story.</p>
    
    <p><strong>Key Themes:</strong><br>
    <ul>
        <li><strong>Authority:</strong> Stepping into your power and owning your expertise.</li>
        <li><strong>Intimacy:</strong> deepenening connections and building trust.</li>
        <li><strong>Innovation:</strong> Trying new methods to solve old problems.</li>
    </ul>
    </p>
    
    <p><strong>Love Forecast:</strong><br>Single ${sign}s might find attraction in unexpected places—perhaps with someone not their "usual type." Open your mind. Couples will find that shared goals bring them closer. Working together on a project can reignite the spark.</p>
    
    <p><strong>Career Trajectory:</strong><br>Innovation is rewarded. If you have an idea that seems "out there," pitch it. The traditional ways of doing things are shifting, and your ability to adapt will be your greatest asset.</p>
    `;
}

function generateYearlyContent(sign) {
    return `
    <p><strong>2026 Yearly Horoscope for ${sign}</strong></p>
    <p>Welcome to 2026, a year of profound evolution and restructuring for ${sign}. If the past year felt like a period of dissolution or confusion, this year brings the clarity of a new dawn. The major planetary players—Saturn, Jupiter, and Pluto—are dancing in areas of your chart that demand maturity, expansion, and transformation. You are growing up, leveling up, and showing up in ways you never have before.</p>
    
    <h3>The Big Picture: Saturn and Structure</h3>
    <p>Saturn’s influence this year is stabilizing. It asks you to build on solid ground. No more cutting corners. Whether it is in your career, your relationships, or your personal development, you are being called to put in the work. The rewards may not be instant, but they will be enduring. You are building a legacy. This is a year to define your boundaries and commit to your non-negotiables.</p>
    
    <h3>Jupiter's Blessings: Expansion and Wisdom</h3>
    <p>Jupiter brings a lighter touch, offering opportunities for growth through connection and learning. You may find yourself traveling more, either physically or metaphorically through study. New philosophies or spiritual practices could capture your interest, widening your perspective on life. Socially, your circle is expanding. You are attracting people who align with your higher self. Networking is highly favored in 2026.</p>
    
    <h3>The Transformational Fire: Pluto</h3>
    <p>Pluto continues its slow but powerful work, transforming your sense of identity. You are shedding skins, letting go of old labels and roles that no longer fit. This process can be intense, but it is necessary for your rebirth. You are becoming more potent, more magnetic, and more aligned with your truth. Power struggles may arise, but they are teaching you about your own strength.</p>
    
    <h3>Quarterly Breakdown</h3>
    <p><strong>Q1 (Jan - Mar):</strong> The year starts with a focus on finances and resources. It's time to get your house in order. Set your budget, plan your investments, and clear debts. Structuring your material world gives you the freedom to focus on other things later.</p>
    
    <p><strong>Q2 (Apr - Jun):</strong> The energy shifts to communication and local community. Short trips, writing projects, and sibling relationships are highlighted. You are buzzing with ideas. It’s a busy, social time. Launch that blog, start that podcast, or take that workshop.</p>
    
    <p><strong>Q3 (Jul - Sep):</strong> Home and family take center stage. You may be moving, renovating, or addressing family dynamics. It’s a time for nesting and grounding. Nurture your roots so your branches can reach higher.</p>
    
    <p><strong>Q4 (Oct - Dec):</strong> The year ends on a high note regarding creativity and romance. You are coming out of your shell. It’s a time for celebration, self-expression, and joy. Let your inner child play.</p>
    
    <p><strong>Summary for ${sign}:</strong><br>2026 is the year you stop waiting for permission and start creating the life you want. It requires effort, yes, but the universe is supporting your ambition. Trust yourself, trust the process, and keep moving forward.</p>
    `;
}

function getSignLinksHtml() {
    let links = [];
    for (const [sKey, sName] of Object.entries(SIGN_DISPLAY)) {
        links.push(`<a href="../daily/${sKey}.html" class="btn btn-outline-secondary btn-sm" style="border-color: rgba(197,160,89,0.3); color: var(--gold-light); margin: 0.25rem;">${SIGN_EMOJIS[sKey]} ${sName}</a>`);
    }
    return links.join('\n');
}

function createFiles() {
    const signLinksHtml = getSignLinksHtml();

    SIGNS.forEach(signKey => {
        const signName = SIGN_DISPLAY[signKey];
        const emoji = SIGN_EMOJIS[signKey];

        // 1. Daily
        const dailyPath = path.join(BASE_DIR, 'daily', `${signKey}.html`);
        const dailyHtml = HTML_TEMPLATE
            .replace(/{title}/g, `${signName} Daily Horoscope`)
            .replace(/{description}/g, `Read your free daily horoscope for ${signName}.`)
            .replace(/{emoji}/g, emoji)
            .replace(/{heading}/g, `${signName} Daily Horoscope`)
            .replace(/{date_label}/g, "Today's Cosmic Forecast")
            .replace(/{sub_heading}/g, `Insights for ${signName}`)
            .replace(/{content}/g, generateDailyContent(signName))
            .replace(/{btn_daily}/g, "btn-primary")
            .replace(/{btn_weekly}/g, "btn-outline-light")
            .replace(/{btn_monthly}/g, "btn-outline-light")
            .replace(/{btn_yearly}/g, "btn-outline-light")
            .replace(/{sign}/g, signKey)
            .replace(/{sign_links}/g, signLinksHtml);
        fs.writeFileSync(dailyPath, dailyHtml);

        // 2. Weekly
        const weeklyPath = path.join(BASE_DIR, 'weekly', `${signKey}.html`);
        const weeklyHtml = HTML_TEMPLATE
            .replace(/{title}/g, `${signName} Weekly Horoscope`)
            .replace(/{description}/g, `Weekly forecast for ${signName}.`)
            .replace(/{emoji}/g, emoji)
            .replace(/{heading}/g, `${signName} Weekly Horoscope`)
            .replace(/{date_label}/g, "Week of Feb 2 - Feb 8, 2026")
            .replace(/{sub_heading}/g, "The Week Ahead")
            .replace(/{content}/g, generateWeeklyContent(signName))
            .replace(/{btn_daily}/g, "btn-outline-light")
            .replace(/{btn_weekly}/g, "btn-primary")
            .replace(/{btn_monthly}/g, "btn-outline-light")
            .replace(/{btn_yearly}/g, "btn-outline-light")
            .replace(/{sign}/g, signKey)
            .replace(/{sign_links}/g, signLinksHtml);
        fs.writeFileSync(weeklyPath, weeklyHtml);

        // 3. Monthly
        const monthlyPath = path.join(BASE_DIR, 'monthly', `${signKey}.html`);
        const monthlyHtml = HTML_TEMPLATE
            .replace(/{title}/g, `${signName} Monthly Horoscope`)
            .replace(/{description}/g, `Monthly forecast for ${signName}.`)
            .replace(/{emoji}/g, emoji)
            .replace(/{heading}/g, `${signName} Monthly Horoscope`)
            .replace(/{date_label}/g, "February 2026")
            .replace(/{sub_heading}/g, "Month Overview")
            .replace(/{content}/g, generateMonthlyContent(signName))
            .replace(/{btn_daily}/g, "btn-outline-light")
            .replace(/{btn_weekly}/g, "btn-outline-light")
            .replace(/{btn_monthly}/g, "btn-primary")
            .replace(/{btn_yearly}/g, "btn-outline-light")
            .replace(/{sign}/g, signKey)
            .replace(/{sign_links}/g, signLinksHtml);
        fs.writeFileSync(monthlyPath, monthlyHtml);

        // 4. Yearly
        const yearlyPath = path.join(BASE_DIR, 'yearly', `${signKey}.html`);
        const yearlyHtml = HTML_TEMPLATE
            .replace(/{title}/g, `${signName} 2026 Yearly Horoscope`)
            .replace(/{description}/g, `2026 annual forecast for ${signName}.`)
            .replace(/{emoji}/g, emoji)
            .replace(/{heading}/g, `${signName} 2026 Horoscope`)
            .replace(/{date_label}/g, "Year of 2026")
            .replace(/{sub_heading}/g, "Annual Forecast")
            .replace(/{content}/g, generateYearlyContent(signName))
            .replace(/{btn_daily}/g, "btn-outline-light")
            .replace(/{btn_weekly}/g, "btn-outline-light")
            .replace(/{btn_monthly}/g, "btn-outline-light")
            .replace(/{btn_yearly}/g, "btn-primary")
            .replace(/{sign}/g, signKey)
            .replace(/{sign_links}/g, signLinksHtml);
        fs.writeFileSync(yearlyPath, yearlyHtml);
    });
}

createFiles();
console.log("Successfully generated horoscope pages for all signs.");
