const horoscopeData = {
    fire: [
        "Energy is high today. Use this burst of motivation to tackle your biggest challenges.",
        "Passion leads the way. Follow your heart, but be mindful of stepping on toes.",
        "A spontaneous adventure calls your name. Say yes to the unknown.",
        "Your charisma is magnetic. Others are looking to you for leadership.",
        "Burnout is a risk. Pace yourself, even if you feel invincible."
    ],
    earth: [
        "Practicality pays off. Focus on the details and you will find success.",
        "Nature is your healer today. Spend time grounding yourself outdoors.",
        "Financial matters are favored. Look for long-term investments.",
        "Stubbornness may block progress. Be open to a new method.",
        "Build slowly. Rome wasn't built in a day, and neither is your empire."
    ],
    air: [
        "Communication flows effortlessly. It's a great day for networking and ideas.",
        "Your mind is racing. Meditation or writing will help channel the chaos.",
        "Social connections bring unexpected opportunities. Say yes to the invitation.",
        "Indecision strikes. Don't overthink; trust your first instinct.",
        "A fresh perspective changes everything. Look at the problem from a new angle."
    ],
    water: [
        "Emotions run deep today. Trust your intuition over pure logic.",
        "Creativity is heightened. Express your feelings through art or music.",
        "Boundaries are essential. Don't let others' moods drown you.",
        "Dreams contain messages. Pay attention to what your subconscious is saying.",
        "Vulnerability is a strength. Open up to someone you trust."
    ],
    general: [
        "The cosmic weather stimulates growth. Embrace the changes coming your way.",
        "A quiet day for reflection. Don't force progress if it feels stuck.",
        "Alignment is key. Ensure your actions match your inner values.",
        "Tensions rise, but so does the potential for breakthrough.",
        "Harmony is restored. Enjoy the peace after the recent storm."
    ]
};

function getDailyHoroscope(sign, dayOfYear) {
    // Simple hashing to pick a consistent message for the day
    // This ensures everyone sees the same message for the same sign on the same day
    const distinctSeed = sign.length + dayOfYear;

    let pool = [];
    if (['Aries', 'Leo', 'Sagittarius'].includes(sign)) pool = horoscopeData.fire;
    else if (['Taurus', 'Virgo', 'Capricorn'].includes(sign)) pool = horoscopeData.earth;
    else if (['Gemini', 'Libra', 'Aquarius'].includes(sign)) pool = horoscopeData.air;
    else if (['Cancer', 'Scorpio', 'Pisces'].includes(sign)) pool = horoscopeData.water;
    else pool = horoscopeData.general;

    const index = distinctSeed % pool.length;
    return pool[index];
}

function getCosmicWeather(dayOfYear) {
    const pool = horoscopeData.general;
    const index = dayOfYear % pool.length;
    return pool[index];
}
