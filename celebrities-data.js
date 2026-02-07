// Celebrity Birth Data - Organized by birth date
// Each celebrity includes: birth date, natal chart data, and interpretation highlights

const celebrityDatabase = [
    // January
    {
        name: "David Bowie",
        birthDate: { month: 1, day: 8 },
        birthDetails: {
            date: "January 8, 1947",
            time: "9:00 AM",
            location: "Brixton, London, UK"
        },
        chart: {
            sun: "Capricorn",
            moon: "Leo",
            rising: "Aquarius",
            planets: {
                mercury: "Capricorn",
                venus: "Sagittarius",
                mars: "Scorpio",
                jupiter: "Scorpio",
                saturn: "Leo",
                uranus: "Gemini",
                neptune: "Libra",
                pluto: "Leo"
            }
        },
        notable: "Saturn in Leo conjunct Mars - Revolutionary artist with disciplined creativity",
        interpretation: `David Bowie's chart is a masterclass in creative reinvention. His Aquarius rising gave him that otherworldly, alien persona, while his Capricorn Sun provided the ambition and work ethic to sustain a 50-year career. The Leo Moon conjunct Saturn and Pluto in the 7th house created his theatrical, larger-than-life stage presence, but also brought intensity to relationships. Mars in Scorpio in the 9th house drove his constant exploration of new artistic territories and philosophical concepts. His Venus in Sagittarius loved freedom and experimentation in both art and love.`,
        keyThemes: ["Reinvention", "Artistic genius", "Androgyny", "Cultural icon", "Saturnian discipline"],
        image: "🎭",
        slug: "david-bowie"
    },
    {
        name: "Oprah Winfrey",
        birthDate: { month: 1, day: 29 },
        birthDetails: {
            date: "January 29, 1954",
            time: "4:30 AM",
            location: "Kosciusko, Mississippi, USA"
        },
        chart: {
            sun: "Aquarius",
            moon: "Sagittarius",
            rising: "Sagittarius",
            planets: {
                mercury: "Aquarius",
                venus: "Aquarius",
                mars: "Scorpio",
                jupiter: "Gemini",
                saturn: "Scorpio",
                uranus: "Cancer",
                neptune: "Libra",
                pluto: "Leo"
            }
        },
        notable: "Jupiter in Gemini - Expansive communication and wisdom sharing",
        interpretation: `Oprah's double Sagittarius (Sun ruler and Rising) makes her the ultimate truth-seeker and teacher. Her Aquarius Sun and Venus in the 2nd house brought humanitarian values to wealth-building. Jupiter in Gemini in the 7th house is the signature of her talk show success - expansion through one-on-one communication. Mars and Saturn in Scorpio gave her the resilience to overcome trauma and transform it into power. Her Sagittarius Moon needs freedom, adventure, and philosophical exploration, which she's channeled into her media empire and book club.`,
        keyThemes: ["Media mogul", "Spiritual teacher", "Humanitarian", "Self-made success", "Transformation"],
        image: "📺",
        slug: "oprah-winfrey"
    },
    // February
    {
        name: "Amal Clooney",
        birthDate: { month: 2, day: 3 },
        birthDetails: {
            date: "February 3, 1978",
            time: "7:30 AM",
            location: "Beirut, Lebanon"
        },
        chart: {
            sun: "Aquarius",
            moon: "Sagittarius",
            rising: "Aquarius",
            planets: {
                mercury: "Aquarius",
                venus: "Aquarius",
                mars: "Leo",
                jupiter: "Gemini",
                saturn: "Leo",
                uranus: "Scorpio",
                neptune: "Sagittarius",
                pluto: "Libra"
            }
        },
        notable: "Sun conjunct Venus in Aquarius - Humanitarian lawyer with elegant authority",
        interpretation: `Amal Clooney's chart is a testament to the power of Aquarius. With her Sun, Mercury, and Venus all in the sign of the water-bearer, she is a natural humanitarian and advocate for justice. Her Aquarius Sun gives her a cool, intellectual approach to her work as an international human rights lawyer, while her Sagittarius Moon provides the broad, global perspective necessary for her field. Rising in Aquarius further emphasizes her unique, independent path and her commitment to collective progress. Mars in Leo opposite her Aquarius planets provides the charismatic authority and public presence that has made her a global icon of both substance and style.`,
        keyThemes: ["Human rights", "Intellectual brilliance", "Aquarian humanitarianism", "Global justice", "Elegant authority"],
        image: "⚖️",
        slug: "amal-clooney"
    },
    {
        name: "Isla Fisher",
        birthDate: { month: 2, day: 3 },
        birthDetails: {
            date: "February 3, 1976",
            time: "8:00 AM",
            location: "Muscat, Oman"
        },
        chart: {
            sun: "Aquarius",
            moon: "Aries",
            rising: "Pisces",
            planets: {
                mercury: "Aquarius",
                venus: "Capricorn",
                mars: "Gemini",
                jupiter: "Aries",
                saturn: "Cancer",
                uranus: "Scorpio",
                neptune: "Sagittarius",
                pluto: "Libra"
            }
        },
        notable: "Sun in Aquarius - Versatile actress with quirky comedic timing",
        interpretation: `Isla Fisher's Sun in Aquarius gives her that unique, slightly offbeat comedic timing that has defined her career. With an Aries Moon and Jupiter, she has a fiery, adventurous emotional core that translates into dynamic, high-energy performances. Her Pisces rising adds a layer of softness and versatility, allowing her to dissolve into various roles across genres. Mercury in Aquarius further enhances her quick wit and unconventional thinking. The tension between her steady Capricorn Venus and her restless Aries Moon suggests a constant drive for both security and excitement.`,
        keyThemes: ["Comedic genius", "Versatility", "Independent spirit", "Fiery ambition", "Quirky charm"],
        image: "🎭",
        slug: "isla-fisher"
    },
    {
        name: "Shakira",
        birthDate: { month: 2, day: 2 },
        birthDetails: {
            date: "February 2, 1977",
            time: "2:00 PM",
            location: "Barranquilla, Colombia"
        },
        chart: {
            sun: "Aquarius",
            moon: "Aries",
            rising: "Cancer",
            planets: {
                mercury: "Aquarius",
                venus: "Pisces",
                mars: "Gemini",
                jupiter: "Gemini",
                saturn: "Leo",
                uranus: "Scorpio",
                neptune: "Sagittarius",
                pluto: "Libra"
            }
        },
        notable: "Mars conjunct Jupiter in Gemini - Dynamic performer with global appeal",
        interpretation: `Shakira's Aquarius Sun gives her that unique, innovative musical style that defies categorization. Her Cancer rising makes her deeply connected to her roots and family, while also giving her that nurturing, emotional connection with fans. The Aries Moon in the 10th house drives her fierce ambition and pioneering spirit in her career. Mars conjunct Jupiter in Gemini in the 12th house is the secret to her multilingual abilities and her hips that don't lie - Gemini rules coordination and dexterity. Venus in Pisces adds the romantic, dreamy quality to her music and her humanitarian work.`,
        keyThemes: ["Musical innovation", "Cultural fusion", "Humanitarian", "Fierce independence", "Global icon"],
        image: "🎤",
        slug: "shakira"
    },
    {
        name: "Beyoncé",
        birthDate: { month: 9, day: 4 },
        birthDetails: {
            date: "September 4, 1981",
            time: "10:00 AM",
            location: "Houston, Texas, USA"
        },
        chart: {
            sun: "Virgo",
            moon: "Scorpio",
            rising: "Libra",
            planets: {
                mercury: "Virgo",
                venus: "Libra",
                mars: "Leo",
                jupiter: "Libra",
                saturn: "Libra",
                uranus: "Scorpio",
                neptune: "Sagittarius",
                pluto: "Libra"
            }
        },
        notable: "Mars in Leo in 10th house - Powerful stage presence and career drive",
        interpretation: `Beyoncé's Virgo Sun and Mercury make her a perfectionist who obsesses over every detail of her performances. Her Libra rising with Venus, Jupiter, and Saturn all in Libra creates that flawless beauty, grace, and partnership focus (Destiny's Child, Jay-Z). The Scorpio Moon gives her emotional intensity and the ability to channel deep feelings into her art. Mars in Leo in the 10th house is the queen placement - commanding the stage with regal presence and creative fire. Her Libra stellium also explains her commitment to visual aesthetics and balance in everything she creates.`,
        keyThemes: ["Perfectionism", "Queen energy", "Partnership", "Visual artistry", "Emotional depth"],
        image: "👑",
        slug: "beyonce"
    },
    {
        name: "Leonardo DiCaprio",
        birthDate: { month: 11, day: 11 },
        birthDetails: {
            date: "November 11, 1974",
            time: "2:47 AM",
            location: "Los Angeles, California, USA"
        },
        chart: {
            sun: "Scorpio",
            moon: "Libra",
            rising: "Libra",
            planets: {
                mercury: "Scorpio",
                venus: "Scorpio",
                mars: "Scorpio",
                jupiter: "Pisces",
                saturn: "Cancer",
                uranus: "Libra",
                neptune: "Sagittarius",
                pluto: "Libra"
            }
        },
        notable: "Venus in Scorpio - Intense, transformative relationships and roles",
        interpretation: `Leo's Scorpio stellium (Sun, Mercury, Venus, Mars) makes him drawn to intense, dark, transformative roles - think The Revenant, Shutter Island, Django Unchained. His Libra rising and Moon give him that pretty-boy charm and diplomatic nature, but the Scorpio energy underneath is what drives his method acting. Jupiter in Pisces in the 6th house shows his dedication to environmental causes and his ability to lose himself in his work. The Libra-Scorpio combination also explains his famous dating pattern - attracted to beauty (Libra) but needing intensity (Scorpio).`,
        keyThemes: ["Intensity", "Transformation", "Environmental activism", "Method acting", "Romantic complexity"],
        image: "🎬",
        slug: "leonardo-dicaprio"
    },
    {
        name: "Taylor Swift",
        birthDate: { month: 12, day: 13 },
        birthDetails: {
            date: "December 13, 1989",
            time: "5:17 AM",
            location: "Reading, Pennsylvania, USA"
        },
        chart: {
            sun: "Sagittarius",
            moon: "Cancer",
            rising: "Scorpio",
            planets: {
                mercury: "Capricorn",
                venus: "Aquarius",
                mars: "Scorpio",
                jupiter: "Cancer",
                saturn: "Capricorn",
                uranus: "Capricorn",
                neptune: "Capricorn",
                pluto: "Scorpio"
            }
        },
        notable: "Mercury in Capricorn - Strategic storytelling and business acumen",
        interpretation: `Taylor's Scorpio rising and Mars in Scorpio in the 1st house give her that intense, vengeful reputation - she literally weaponizes her personal life into chart-topping revenge anthems. Her Sagittarius Sun loves storytelling and adventure, while the Cancer Moon makes her deeply sentimental and nostalgic. Mercury in Capricorn conjunct Saturn, Uranus, and Neptune is the mastermind placement - she's a strategic businesswoman who revolutionized the music industry. Venus in Aquarius explains her friendship-focused approach to romance and her loyal fan community (Swifties). Jupiter in Cancer in the 8th house brings massive success through emotional vulnerability and shared resources (re-recordings).`,
        keyThemes: ["Strategic storytelling", "Emotional vulnerability", "Business savvy", "Loyal fanbase", "Reinvention"],
        image: "🎵",
        slug: "taylor-swift"
    },
    {
        name: "Prince",
        birthDate: { month: 6, day: 7 },
        birthDetails: {
            date: "June 7, 1958",
            time: "6:17 PM",
            location: "Minneapolis, Minnesota, USA"
        },
        chart: {
            sun: "Gemini",
            moon: "Pisces",
            rising: "Scorpio",
            planets: {
                mercury: "Gemini",
                venus: "Taurus",
                mars: "Aries",
                jupiter: "Libra",
                saturn: "Sagittarius",
                uranus: "Leo",
                neptune: "Scorpio",
                pluto: "Virgo"
            }
        },
        notable: "Neptune in Scorpio - Musical genius with otherworldly artistry",
        interpretation: `Prince's Gemini Sun and Mercury gave him mastery over multiple instruments and musical styles - he was a true polymath. His Scorpio rising with Neptune conjunct the Ascendant created that mysterious, sexually magnetic persona and spiritual depth. The Pisces Moon is pure musical genius - channeling divine inspiration into sound. Mars in Aries in the 5th house drove his prolific creative output and bold, pioneering approach to music and sexuality. Venus in Taurus in the 7th house shows his sensual nature and the importance of partnerships in his work, though the Scorpio rising kept much of his private life hidden.`,
        keyThemes: ["Musical genius", "Mysticism", "Sexual liberation", "Prolific creativity", "Spiritual depth"],
        image: "🎸",
        slug: "prince"
    },
    {
        name: "Lady Gaga",
        birthDate: { month: 3, day: 28 },
        birthDetails: {
            date: "March 28, 1986",
            time: "9:53 AM",
            location: "New York City, New York, USA"
        },
        chart: {
            sun: "Aries",
            moon: "Scorpio",
            rising: "Virgo",
            planets: {
                mercury: "Aries",
                venus: "Aries",
                mars: "Capricorn",
                jupiter: "Pisces",
                saturn: "Sagittarius",
                uranus: "Sagittarius",
                neptune: "Capricorn",
                pluto: "Scorpio"
            }
        },
        notable: "Pluto in Scorpio generation - Transformative performer and advocate",
        interpretation: `Gaga's Aries stellium (Sun, Mercury, Venus) in the 8th house makes her a fearless pioneer who isn't afraid to explore taboo topics and transform herself constantly. Her Virgo rising gives her that perfectionist work ethic and attention to detail in her performances and fashion. The Scorpio Moon adds emotional intensity and the ability to channel pain into art (her advocacy for mental health and trauma survivors). Mars in Capricorn in the 5th house shows her disciplined approach to creative expression and building a lasting legacy. Jupiter in Pisces brings the theatrical, compassionate, larger-than-life quality to everything she does.`,
        keyThemes: ["Transformation", "Advocacy", "Fearless creativity", "Perfectionism", "Theatrical expression"],
        image: "⭐",
        slug: "lady-gaga"
    },
    {
        name: "Drake",
        birthDate: { month: 10, day: 24 },
        birthDetails: {
            date: "October 24, 1986",
            time: "9:00 AM",
            location: "Toronto, Ontario, Canada"
        },
        chart: {
            sun: "Scorpio",
            moon: "Cancer",
            rising: "Leo",
            planets: {
                mercury: "Scorpio",
                venus: "Scorpio",
                mars: "Aquarius",
                jupiter: "Pisces",
                saturn: "Sagittarius",
                uranus: "Sagittarius",
                neptune: "Capricorn",
                pluto: "Scorpio"
            }
        },
        notable: "Leo Ascendant with Scorpio stellium - Regal presence meets emotional depth",
        interpretation: `Drake's Leo rising gives him that star quality and need to be in the spotlight, while his Scorpio stellium (Sun, Mercury, Venus, Pluto) in the 4th house creates his signature emotional, vulnerable rap style focused on feelings, family, and relationships. The Cancer Moon amplifies this sensitivity and his connection to Toronto (4th house = home). Mars in Aquarius in the 7th house shows his innovative approach to collaborations and relationships. Jupiter in Pisces brings the melodic, singing quality to his rap and his ability to tap into collective emotions. The combination of Leo confidence and Scorpio vulnerability is his brand.`,
        keyThemes: ["Emotional vulnerability", "Chart dominance", "Leo charisma", "Toronto pride", "Melodic innovation"],
        image: "🦉",
        slug: "drake"
    },
    {
        name: "Frida Kahlo",
        birthDate: { month: 7, day: 6 },
        birthDetails: {
            date: "July 6, 1907",
            time: "8:30 AM",
            location: "Coyoacán, Mexico City, Mexico"
        },
        chart: {
            sun: "Cancer",
            moon: "Taurus",
            rising: "Leo",
            planets: {
                mercury: "Cancer",
                venus: "Cancer",
                mars: "Capricorn",
                jupiter: "Cancer",
                saturn: "Pisces",
                uranus: "Capricorn",
                neptune: "Cancer",
                pluto: "Gemini"
            }
        },
        notable: "Algol conjunct MC (1°31′) - Iconic public persona built from pain and trauma",
        interpretation: `Frida's Leo Ascendant gave her that bold, colorful self-presentation and artistic confidence. Her Cancer stellium (Sun, Mercury, Venus, Jupiter, Neptune) in the 12th house shows how she channeled deep emotional pain, suffering, and the unconscious into her art. The Taurus Moon in the 10th house created her enduring public legacy and connection to Mexican folk art traditions. Mars in Capricorn opposite her Cancer planets shows the physical trauma she endured and her disciplined approach to painting through pain. Algol on the Midheaven manifested as fame built on suffering, creating a mythic persona that transcended her lifetime.`,
        keyThemes: ["Pain as art", "Identity politics", "Mythic self-creation", "Enduring legacy", "Emotional depth"],
        image: "🎨",
        slug: "frida-kahlo"
    },
    {
        name: "Donald Trump",
        birthDate: { month: 6, day: 14 },
        birthDetails: {
            date: "June 14, 1946",
            time: "10:54 AM",
            location: "Queens, New York, USA"
        },
        chart: {
            sun: "Gemini",
            moon: "Sagittarius",
            rising: "Leo",
            planets: {
                mercury: "Cancer",
                venus: "Cancer",
                mars: "Leo",
                jupiter: "Libra",
                saturn: "Cancer",
                uranus: "Gemini",
                neptune: "Libra",
                pluto: "Leo"
            }
        },
        notable: "Algol conjunct MC (1°03′) - Intense public visibility and polarizing fame",
        interpretation: `Trump's Leo Ascendant with Mars and Pluto rising gives him that dominating, aggressive, larger-than-life presence. His Gemini Sun conjunct Uranus in the 10th house creates unpredictable communication and a constantly shifting public image. The Sagittarius Moon in the 4th house shows his grandiose self-belief and connection to real estate (4th house). Jupiter in Libra in the 2nd house brought wealth through partnerships and deals. Algol conjunct the Midheaven manifests as intense public controversy, survival through multiple crises, and a career built on polarization. The Cancer stellium (Mercury, Venus, Saturn) shows his focus on legacy, family dynasty, and emotional manipulation.`,
        keyThemes: ["Power", "Polarization", "Regal presence", "Media mastery", "Real estate empire"],
        image: "🏛️",
        slug: "donald-trump"
    }
];

// Helper function to get celebrity by date
function getCelebrityByDate(month, day) {
    return celebrityDatabase.filter(celeb =>
        celeb.birthDate.month === month && celeb.birthDate.day === day
    );
}

// Helper function to get celebrity by slug
function getCelebrityBySlug(slug) {
    return celebrityDatabase.find(celeb => celeb.slug === slug);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { celebrityDatabase, getCelebrityByDate, getCelebrityBySlug };
}








