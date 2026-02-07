document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Current Date
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    const dateElement = document.querySelector('.hero-subtitle');
    if (dateElement) {
        dateElement.textContent = dateString;
    }

    // Calculate Day of Year (0-365) for seeding
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // 2. Populate Cosmic Weather
    const cosmicWeatherElement = document.querySelector('.highlight-box p');
    if (cosmicWeatherElement) {
        // We use the imported/global getCosmicWeather function
        if (typeof getCosmicWeather === 'function') {
            cosmicWeatherElement.textContent = getCosmicWeather(dayOfYear);
        }
    }

    // 3. Populate Daily Horoscopes
    const signCards = document.querySelectorAll('.feature-card');

    // Helper to get sign name from card (assuming H3 contains the name)
    signCards.forEach(card => {
        const title = card.querySelector('h3');
        if (!title) return;

        // Extract sign name (e.g., "♈ Aries" -> "Aries")
        const signText = title.textContent;
        // Simple regex to get the word
        const signMatch = signText.match(/[a-zA-Z]+/);
        if (signMatch) {
            const signName = signMatch[0];
            const pText = card.querySelector('p');

            if (pText && typeof getDailyHoroscope === 'function') {
                // Update text
                pText.textContent = getDailyHoroscope(signName, dayOfYear);
            }
        }
    });

    // 4. Daily Celebrity Logic
    const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
    const currentDay = String(now.getDate()).padStart(2, '0');
    const todayMatchStr = `${currentMonth}-${currentDay}`;

    // Find celebrity from global celebrityData array
    let todayCeleb = null;
    if (typeof celebrityData !== 'undefined') {
        todayCeleb = celebrityData.find(c => c.birthday === todayMatchStr);

        // Fallback if no birthday today: Use a deterministic "Featured of the Day"
        if (!todayCeleb) {
            const index = dayOfYear % celebrityData.length;
            todayCeleb = celebrityData[index];
            // Mark as featured, not birthday
            todayCeleb.isBirthday = false;
        } else {
            todayCeleb.isBirthday = true;
        }
    }

    // Render Celebrity Section
    if (todayCeleb) {
        const celebSection = document.getElementById('daily-celebrity-section');
        if (celebSection) {
            const titleElement = celebSection.querySelector('.celeb-title');
            const nameElement = celebSection.querySelector('.celeb-name');
            const bioElement = celebSection.querySelector('.celeb-bio');
            const linkElement = celebSection.querySelector('.celeb-link');
            const imgElement = celebSection.querySelector('.celeb-img');
            const badgeElement = celebSection.querySelector('.celeb-badge');

            if (titleElement) titleElement.textContent = todayCeleb.isBirthday ? "Happy Birthday!" : "Featured Celebrity";
            if (nameElement) nameElement.textContent = todayCeleb.name;
            if (bioElement) bioElement.textContent = todayCeleb.bio;

            // Link logic
            if (linkElement) {
                if (todayCeleb.exists) {
                    linkElement.href = todayCeleb.link;
                } else {
                    // Start absolute path from root or relative. Since this script runs on tools/horoscopes.html
                    // We need to go up one level then to reference 
                    // Actually, let's just make the link generic
                    linkElement.href = `../reference/celebrity-viewer.html?id=${todayCeleb.id}`;
                }
                linkElement.textContent = "View Chart →";
            }

            // Image logic (if we had specific images, we'd set src here)
            // For now, we assume images are handled via CSS or generic placeholders if not present
            // But we can try to set it if an IMG tag exists
            if (imgElement) {
                if (todayCeleb.image) {
                    imgElement.src = todayCeleb.image;
                    imgElement.alt = todayCeleb.name;
                    imgElement.style.display = 'block'; // Ensure it's visible if set
                    imgElement.parentElement.style.display = 'block';
                } else {
                    imgElement.style.display = 'none'; // Hide if no image
                    imgElement.parentElement.style.display = 'none'; // Hide container too
                }
            }
        }
    }
});
