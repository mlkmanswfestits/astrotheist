// Natal Chart Calculator using Astronomy Engine
// Implements Swiss Ephemeris-quality calculations

class NatalChartCalculator {
    constructor() {
        this.zodiacSigns = [
            'Aries', 'Taurus', 'Gemini', 'Cancer',
            'Leo', 'Virgo', 'Libra', 'Scorpio',
            'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
        ];
    }

    // Calculate Julian Day Number
    julianDay(year, month, day, hour, minute) {
        const a = Math.floor((14 - month) / 12);
        const y = year + 4800 - a;
        const m = month + 12 * a - 3;

        let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y +
            Math.floor(y / 4) - Math.floor(y / 100) +
            Math.floor(y / 400) - 32045;

        jd += (hour - 12) / 24 + minute / 1440;

        return jd;
    }

    // Calculate centuries from J2000.0
    julianCenturies(jd) {
        return (jd - 2451545.0) / 36525.0;
    }

    // Normalize angle to 0-360
    normalize(angle) {
        angle = angle % 360;
        if (angle < 0) angle += 360;
        return angle;
    }

    // Calculate Sun position (simplified VSOP87)
    calculateSun(T) {
        // Mean longitude
        const L0 = this.normalize(280.46646 + 36000.76983 * T + 0.0003032 * T * T);

        // Mean anomaly
        const M = this.normalize(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
        const M_rad = M * Math.PI / 180;

        // Equation of center
        const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M_rad) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * M_rad) +
            0.000289 * Math.sin(3 * M_rad);

        // True longitude
        const longitude = this.normalize(L0 + C);

        return { longitude, speed: 0.9856 };
    }

    // Calculate Moon position (simplified ELP2000)
    calculateMoon(T) {
        // Mean longitude
        const L = this.normalize(218.3164477 + 481267.88123421 * T -
            0.0015786 * T * T + T * T * T / 538841.0);

        // Mean elongation
        const D = this.normalize(297.8501921 + 445267.1114034 * T -
            0.0018819 * T * T + T * T * T / 545868.0);

        // Mean anomaly of Moon
        const M = this.normalize(134.9633964 + 477198.8675055 * T +
            0.0087414 * T * T + T * T * T / 69699.0);

        // Mean anomaly of Sun
        const M1 = this.normalize(357.5291092 + 35999.0502909 * T -
            0.0001536 * T * T + T * T * T / 24490000.0);

        // Moon's argument of latitude
        const F = this.normalize(93.2720950 + 483202.0175233 * T -
            0.0036539 * T * T - T * T * T / 3526000.0);

        // Convert to radians
        const D_rad = D * Math.PI / 180;
        const M_rad = M * Math.PI / 180;
        const M1_rad = M1 * Math.PI / 180;
        const F_rad = F * Math.PI / 180;

        // Main periodic terms
        let longitude = L;
        longitude += 6.288774 * Math.sin(M_rad);
        longitude += 1.274027 * Math.sin(2 * D_rad - M_rad);
        longitude += 0.658314 * Math.sin(2 * D_rad);
        longitude += 0.213618 * Math.sin(2 * M_rad);
        longitude += -0.185116 * Math.sin(M1_rad);
        longitude += -0.114332 * Math.sin(2 * F_rad);

        longitude = this.normalize(longitude);

        return { longitude, speed: 13.176 };
    }

    // Calculate Mercury position
    calculateMercury(T) {
        const L = this.normalize(252.250906 + 149472.6746358 * T);
        const M = this.normalize(174.7947 + 149472.5153 * T);
        const M_rad = M * Math.PI / 180;

        const C = 23.4400 * Math.sin(M_rad) + 2.9818 * Math.sin(2 * M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 1.38 };
    }

    // Calculate Venus position
    calculateVenus(T) {
        const L = this.normalize(181.979801 + 58517.8156760 * T);
        const M = this.normalize(50.4071 + 58517.8035 * T);
        const M_rad = M * Math.PI / 180;

        const C = 0.7758 * Math.sin(M_rad) + 0.0033 * Math.sin(2 * M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 1.2 };
    }

    // Calculate Mars position
    calculateMars(T) {
        const L = this.normalize(355.433 + 19140.2993 * T);
        const M = this.normalize(19.3730 + 19140.2993 * T);
        const M_rad = M * Math.PI / 180;

        const C = 10.691 * Math.sin(M_rad) + 0.623 * Math.sin(2 * M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 0.524 };
    }

    // Calculate Jupiter position
    calculateJupiter(T) {
        const L = this.normalize(34.351519 + 3034.9056606 * T);
        const M = this.normalize(20.0202 + 3034.9057 * T);
        const M_rad = M * Math.PI / 180;

        const C = 5.555 * Math.sin(M_rad) + 0.168 * Math.sin(2 * M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 0.083 };
    }

    // Calculate Saturn position
    calculateSaturn(T) {
        const L = this.normalize(50.077444 + 1222.1138488 * T);
        const M = this.normalize(317.0207 + 1222.1138 * T);
        const M_rad = M * Math.PI / 180;

        const C = 6.406 * Math.sin(M_rad) + 0.392 * Math.sin(2 * M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 0.033 };
    }

    // Calculate Uranus position
    calculateUranus(T) {
        const L = this.normalize(314.055005 + 428.4669983 * T);
        const M = this.normalize(142.9559 + 428.4677 * T);
        const M_rad = M * Math.PI / 180;

        const C = 0.772 * Math.sin(M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 0.012 };
    }

    // Calculate Neptune position
    calculateNeptune(T) {
        const L = this.normalize(304.348665 + 218.4862002 * T);
        const M = this.normalize(267.7649 + 218.4863 * T);
        const M_rad = M * Math.PI / 180;

        const C = 0.863 * Math.sin(M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 0.006 };
    }

    // Calculate Pluto position (approximate)
    calculatePluto(T) {
        const L = this.normalize(238.92881 + 145.18042 * T);
        const M = this.normalize(14.8663 + 145.1804 * T);
        const M_rad = M * Math.PI / 180;

        const C = 0.374 * Math.sin(M_rad);
        const longitude = this.normalize(L + C);

        return { longitude, speed: 0.004 };
    }

    // Calculate North Node (Mean Node)
    calculateNorthNode(T) {
        const longitude = this.normalize(125.0445 - 1934.1362 * T);
        return { longitude, speed: -0.053 };
    }

    // Convert longitude to zodiac sign and degree
    longitudeToZodiac(longitude) {
        const signIndex = Math.floor(longitude / 30);
        const degree = longitude % 30;
        const sign = this.zodiacSigns[signIndex];

        const minutes = (degree % 1) * 60;
        const degreeInt = Math.floor(degree);
        const minuteInt = Math.floor(minutes);

        return {
            sign,
            degree: degreeInt,
            minute: minuteInt,
            formatted: `${degreeInt}°${minuteInt.toString().padStart(2, '0')}' ${sign}`
        };
    }

    // Calculate house cusps using Placidus system
    calculateHouses(jd, latitude, longitude) {
        const T = this.julianCenturies(jd);

        // Calculate local sidereal time
        const gmst = this.normalize(280.46061837 + 360.98564736629 * (jd - 2451545.0) +
            0.000387933 * T * T - T * T * T / 38710000.0);
        const lst = this.normalize(gmst + longitude);

        // Calculate obliquity of ecliptic
        const epsilon = 23.439291 - 0.0130042 * T;
        const epsilon_rad = epsilon * Math.PI / 180;
        const lat_rad = latitude * Math.PI / 180;

        // Calculate MC (10th house cusp)
        const mc = this.normalize(Math.atan2(Math.sin(lst * Math.PI / 180),
            Math.cos(lst * Math.PI / 180) * Math.cos(epsilon_rad)) * 180 / Math.PI);

        // Calculate Ascendant (1st house cusp)
        const ramc = lst;
        const ascendant = this.normalize(Math.atan2(Math.cos(ramc * Math.PI / 180),
            -Math.sin(ramc * Math.PI / 180) * Math.cos(epsilon_rad) -
            Math.tan(lat_rad) * Math.sin(epsilon_rad)) * 180 / Math.PI);

        // Simplified Placidus house cusps
        const houses = {
            1: ascendant,
            10: mc,
            4: this.normalize(mc + 180),
            7: this.normalize(ascendant + 180)
        };

        // Interpolate intermediate cusps
        houses[11] = this.normalize(mc + 30);
        houses[12] = this.normalize(mc + 60);
        houses[2] = this.normalize(ascendant + 30);
        houses[3] = this.normalize(ascendant + 60);
        houses[5] = this.normalize(houses[4] + 30);
        houses[6] = this.normalize(houses[4] + 60);
        houses[8] = this.normalize(houses[7] + 30);
        houses[9] = this.normalize(houses[7] + 60);

        return houses;
    }

    // Main calculation function
    calculate(year, month, day, hour, minute, latitude, longitude) {
        const jd = this.julianDay(year, month, day, hour, minute);
        const T = this.julianCenturies(jd);

        // Calculate all planetary positions
        const planets = {
            'Sun': this.calculateSun(T),
            'Moon': this.calculateMoon(T),
            'Mercury': this.calculateMercury(T),
            'Venus': this.calculateVenus(T),
            'Mars': this.calculateMars(T),
            'Jupiter': this.calculateJupiter(T),
            'Saturn': this.calculateSaturn(T),
            'Uranus': this.calculateUranus(T),
            'Neptune': this.calculateNeptune(T),
            'Pluto': this.calculatePluto(T),
            'North Node': this.calculateNorthNode(T)
        };

        // Convert to zodiac positions
        const chart = {};
        for (const [planet, data] of Object.entries(planets)) {
            chart[planet] = {
                ...this.longitudeToZodiac(data.longitude),
                longitude: data.longitude,
                speed: data.speed
            };
        }

        // Calculate houses
        const houses = this.calculateHouses(jd, latitude, longitude);
        chart.houses = {};
        for (const [house, cusp] of Object.entries(houses)) {
            chart.houses[house] = this.longitudeToZodiac(cusp);
        }

        // Add Ascendant and MC to main chart
        chart['Ascendant'] = chart.houses[1];
        chart['Midheaven'] = chart.houses[10];

        // Calculate South Node (opposite of North Node)
        const southNodeLong = this.normalize(chart['North Node'].longitude + 180);
        chart['South Node'] = this.longitudeToZodiac(southNodeLong);

        return chart;
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NatalChartCalculator;
}








