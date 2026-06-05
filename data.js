// FIFA Weltmeisterschaft 2026 - Spieldaten
// Turniere in USA, Mexiko und Kanada

const teams = {
    // Gruppe A
    'MEX': { name: 'Mexiko', flag: '🇲🇽', group: 'A' },
    'ZAF': { name: 'Südafrika', flag: '🇿🇦', group: 'A' },
    'KOR': { name: 'Südkorea', flag: '🇰🇷', group: 'A' },
    'CZE': { name: 'Tschechien', flag: '🇨🇿', group: 'A' },
    
    // Gruppe B
    'CAN': { name: 'Kanada', flag: '🇨🇦', group: 'B' },
    'BIH': { name: 'Bosnien-Herzegowina', flag: '🇧🇦', group: 'B' },
    'QAT': { name: 'Katar', flag: '🇶🇦', group: 'B' },
    'SUI': { name: 'Schweiz', flag: '🇨🇭', group: 'B' },
    
    // Gruppe C
    'BRA': { name: 'Brasilien', flag: '🇧🇷', group: 'C' },
    'MAR': { name: 'Marokko', flag: '🇲🇦', group: 'C' },
    'HTI': { name: 'Haiti', flag: '🇭🇹', group: 'C' },
    'SCO': { name: 'Schottland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C' },
    
    // Gruppe D
    'USA': { name: 'USA', flag: '🇺🇸', group: 'D' },
    'PRY': { name: 'Paraguay', flag: '🇵🇾', group: 'D' },
    'AUS': { name: 'Australien', flag: '🇦🇺', group: 'D' },
    'TUR': { name: 'Türkei', flag: '🇹🇷', group: 'D' },
    
    // Gruppe E
    'GER': { name: 'Deutschland', flag: '🇩🇪', group: 'E' },
    'CUW': { name: 'Curaçao', flag: '🇨🇼', group: 'E' },
    'CIV': { name: 'Elfenbeinküste', flag: '🇨🇮', group: 'E' },
    'ECU': { name: 'Ecuador', flag: '🇪🇨', group: 'E' },
    
    // Gruppe F
    'NED': { name: 'Niederlande', flag: '🇳🇱', group: 'F' },
    'JPN': { name: 'Japan', flag: '🇯🇵', group: 'F' },
    'SWE': { name: 'Schweden', flag: '🇸🇪', group: 'F' },
    'TUN': { name: 'Tunesien', flag: '🇹🇳', group: 'F' },
    
    // Gruppe G
    'BEL': { name: 'Belgien', flag: '🇧🇪', group: 'G' },
    'EGY': { name: 'Ägypten', flag: '🇪🇬', group: 'G' },
    'IRN': { name: 'Iran', flag: '🇮🇷', group: 'G' },
    'NZL': { name: 'Neuseeland', flag: '🇳🇿', group: 'G' },
    
    // Gruppe H
    'ESP': { name: 'Spanien', flag: '🇪🇸', group: 'H' },
    'CPV': { name: 'Kap Verde', flag: '🇨🇻', group: 'H' },
    'SAU': { name: 'Saudi-Arabien', flag: '🇸🇦', group: 'H' },
    'URY': { name: 'Uruguay', flag: '🇺🇾', group: 'H' },
    
    // Gruppe I
    'FRA': { name: 'Frankreich', flag: '🇫🇷', group: 'I' },
    'SEN': { name: 'Senegal', flag: '🇸🇳', group: 'I' },
    'IRQ': { name: 'Irak', flag: '🇮🇶', group: 'I' },
    'NOR': { name: 'Norwegen', flag: '🇳🇴', group: 'I' },
    
    // Gruppe J
    'ARG': { name: 'Argentinien', flag: '🇦🇷', group: 'J' },
    'ALG': { name: 'Algerien', flag: '🇩🇿', group: 'J' },
    'AUT': { name: 'Österreich', flag: '🇦🇹', group: 'J' },
    'JOR': { name: 'Jordanien', flag: '🇯🇴', group: 'J' },
    
    // Gruppe K
    'POR': { name: 'Portugal', flag: '🇵🇹', group: 'K' },
    'COD': { name: 'DR Kongo', flag: '🇨🇩', group: 'K' },
    'UZB': { name: 'Usbekistan', flag: '🇺🇿', group: 'K' },
    'COL': { name: 'Kolumbien', flag: '🇨🇴', group: 'K' },
    
    // Gruppe L
    'ENG': { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L' },
    'CRO': { name: 'Kroatien', flag: '🇭🇷', group: 'L' },
    'GHA': { name: 'Ghana', flag: '🇬🇭', group: 'L' },
    'PAN': { name: 'Panama', flag: '🇵🇦', group: 'L' },
};

const stadiums = {
    // USA - 11 Stadien
    'MetLife': { name: 'MetLife Stadium', city: 'New Jersey', country: '🇺🇸' },
    'Dallas': { name: 'AT&T Stadium', city: 'Dallas, Texas', country: '🇺🇸' },
    'Kansas': { name: 'Arrowhead Stadium', city: 'Kansas City, Missouri', country: '🇺🇸' },
    'Atlanta': { name: 'Mercedes-Benz Stadium', city: 'Atlanta, Georgia', country: '🇺🇸' },
    'Miami': { name: 'Hard Rock Stadium', city: 'Miami, Florida', country: '🇺🇸' },
    'Houston': { name: 'NRG Stadium', city: 'Houston, Texas', country: '🇺🇸' },
    'Denver': { name: 'Empower Field', city: 'Denver, Colorado', country: '🇺🇸' },
    'Seattle': { name: 'Lumen Field', city: 'Seattle, Washington', country: '🇺🇸' },
    'LA': { name: 'SoFi Stadium', city: 'Los Angeles, Kalifornien', country: '🇺🇸' },
    'Vegas': { name: 'Allegiant Stadium', city: 'Las Vegas, Nevada', country: '🇺🇸' },
    'Phoenix': { name: 'State Farm Stadium', city: 'Phoenix, Arizona', country: '🇺🇸' },
    'Boston': { name: 'Gillette Stadium', city: 'Boston, Massachusetts', country: '🇺🇸' },
    
    // Mexiko - 3 Stadien
    'Guadalajara': { name: 'Estadio Jalisco', city: 'Guadalajara, Jalisco', country: '🇲🇽' },
    'Mexico City': { name: 'Estadio Azteca', city: 'Mexico City', country: '🇲🇽' },
    'Monterrey': { name: 'Estadio BBVA', city: 'Monterrey, Nuevo León', country: '🇲🇽' },
    
    // Kanada - 2 Stadien
    'Toronto': { name: 'BMO Field', city: 'Toronto, Ontario', country: '🇨🇦' },
    'Vancouver': { name: 'BC Place', city: 'Vancouver, British Columbia', country: '🇨🇦' },
};

const games = [
    // Gruppe A Spiele
    {
        id: 1,
        stage: 'Gruppenphase',
        team1: 'MEX',
        team2: 'ZAF',
        date: '2026-06-15',
        time: '14:00',
        stadium: 'MetLife',
        group: 'A'
    },
    {
        id: 2,
        stage: 'Gruppenphase',
        team1: 'KOR',
        team2: 'CZE',
        date: '2026-06-15',
        time: '17:00',
        stadium: 'Dallas',
        group: 'A'
    },
    {
        id: 3,
        stage: 'Gruppenphase',
        team1: 'MEX',
        team2: 'KOR',
        date: '2026-06-22',
        time: '14:00',
        stadium: 'Houston',
        group: 'A'
    },
    {
        id: 4,
        stage: 'Gruppenphase',
        team1: 'ZAF',
        team2: 'CZE',
        date: '2026-06-22',
        time: '17:00',
        stadium: 'Guadalajara',
        group: 'A'
    },
    {
        id: 5,
        stage: 'Gruppenphase',
        team1: 'CZE',
        team2: 'MEX',
        date: '2026-06-29',
        time: '20:00',
        stadium: 'Phoenix',
        group: 'A'
    },
    {
        id: 6,
        stage: 'Gruppenphase',
        team1: 'ZAF',
        team2: 'KOR',
        date: '2026-06-29',
        time: '20:00',
        stadium: 'Seattle',
        group: 'A'
    },

    // Gruppe B Spiele
    {
        id: 7,
        stage: 'Gruppenphase',
        team1: 'CAN',
        team2: 'BIH',
        date: '2026-06-15',
        time: '20:00',
        stadium: 'Toronto',
        group: 'B'
    },
    {
        id: 8,
        stage: 'Gruppenphase',
        team1: 'QAT',
        team2: 'SUI',
        date: '2026-06-15',
        time: '17:30',
        stadium: 'Miami',
        group: 'B'
    },
    {
        id: 9,
        stage: 'Gruppenphase',
        team1: 'CAN',
        team2: 'QAT',
        date: '2026-06-23',
        time: '14:00',
        stadium: 'Vancouver',
        group: 'B'
    },
    {
        id: 10,
        stage: 'Gruppenphase',
        team1: 'BIH',
        team2: 'SUI',
        date: '2026-06-23',
        time: '17:00',
        stadium: 'Denver',
        group: 'B'
    },
    {
        id: 11,
        stage: 'Gruppenphase',
        team1: 'SUI',
        team2: 'CAN',
        date: '2026-06-30',
        time: '18:00',
        stadium: 'LA',
        group: 'B'
    },
    {
        id: 12,
        stage: 'Gruppenphase',
        team1: 'BIH',
        team2: 'QAT',
        date: '2026-06-30',
        time: '18:00',
        stadium: 'Mexico City',
        group: 'B'
    },

    // Gruppe C Spiele
    {
        id: 13,
        stage: 'Gruppenphase',
        team1: 'BRA',
        team2: 'MAR',
        date: '2026-06-16',
        time: '14:00',
        stadium: 'Kansas',
        group: 'C'
    },
    {
        id: 14,
        stage: 'Gruppenphase',
        team1: 'HTI',
        team2: 'SCO',
        date: '2026-06-16',
        time: '17:00',
        stadium: 'Atlanta',
        group: 'C'
    },
    {
        id: 15,
        stage: 'Gruppenphase',
        team1: 'BRA',
        team2: 'HTI',
        date: '2026-06-24',
        time: '14:00',
        stadium: 'Phoenix',
        group: 'C'
    },
    {
        id: 16,
        stage: 'Gruppenphase',
        team1: 'MAR',
        team2: 'SCO',
        date: '2026-06-24',
        time: '17:00',
        stadium: 'Monterrey',
        group: 'C'
    },
    {
        id: 17,
        stage: 'Gruppenphase',
        team1: 'SCO',
        team2: 'BRA',
        date: '2026-07-01',
        time: '18:00',
        stadium: 'Dallas',
        group: 'C'
    },
    {
        id: 18,
        stage: 'Gruppenphase',
        team1: 'MAR',
        team2: 'HTI',
        date: '2026-07-01',
        time: '18:00',
        stadium: 'Seattle',
        group: 'C'
    },

    // Gruppe D Spiele
    {
        id: 19,
        stage: 'Gruppenphase',
        team1: 'USA',
        team2: 'PRY',
        date: '2026-06-16',
        time: '20:00',
        stadium: 'Vegas',
        group: 'D'
    },
    {
        id: 20,
        stage: 'Gruppenphase',
        team1: 'AUS',
        team2: 'TUR',
        date: '2026-06-17',
        time: '14:00',
        stadium: 'Denver',
        group: 'D'
    },
    {
        id: 21,
        stage: 'Gruppenphase',
        team1: 'USA',
        team2: 'AUS',
        date: '2026-06-25',
        time: '18:00',
        stadium: 'LA',
        group: 'D'
    },
    {
        id: 22,
        stage: 'Gruppenphase',
        team1: 'PRY',
        team2: 'TUR',
        date: '2026-06-25',
        time: '18:00',
        stadium: 'Houston',
        group: 'D'
    },
    {
        id: 23,
        stage: 'Gruppenphase',
        team1: 'TUR',
        team2: 'USA',
        date: '2026-07-02',
        time: '18:00',
        stadium: 'MetLife',
        group: 'D'
    },
    {
        id: 24,
        stage: 'Gruppenphase',
        team1: 'PRY',
        team2: 'AUS',
        date: '2026-07-02',
        time: '18:00',
        stadium: 'Mexico City',
        group: 'D'
    },

    // Gruppe E Spiele
    {
        id: 25,
        stage: 'Gruppenphase',
        team1: 'GER',
        team2: 'CUW',
        date: '2026-06-17',
        time: '17:00',
        stadium: 'Miami',
        group: 'E'
    },
    {
        id: 26,
        stage: 'Gruppenphase',
        team1: 'CIV',
        team2: 'ECU',
        date: '2026-06-17',
        time: '20:00',
        stadium: 'Atlanta',
        group: 'E'
    },
    {
        id: 27,
        stage: 'Gruppenphase',
        team1: 'GER',
        team2: 'CIV',
        date: '2026-06-26',
        time: '14:00',
        stadium: 'Boston',
        group: 'E'
    },
    {
        id: 28,
        stage: 'Gruppenphase',
        team1: 'CUW',
        team2: 'ECU',
        date: '2026-06-26',
        time: '17:00',
        stadium: 'Guadalajara',
        group: 'E'
    },
    {
        id: 29,
        stage: 'Gruppenphase',
        team1: 'ECU',
        team2: 'GER',
        date: '2026-07-03',
        time: '19:00',
        stadium: 'Dallas',
        group: 'E'
    },
    {
        id: 30,
        stage: 'Gruppenphase',
        team1: 'CUW',
        team2: 'CIV',
        date: '2026-07-03',
        time: '19:00',
        stadium: 'LA',
        group: 'E'
    },

    // Gruppe F Spiele
    {
        id: 31,
        stage: 'Gruppenphase',
        team1: 'NED',
        team2: 'JPN',
        date: '2026-06-18',
        time: '14:00',
        stadium: 'Seattle',
        group: 'F'
    },
    {
        id: 32,
        stage: 'Gruppenphase',
        team1: 'SWE',
        team2: 'TUN',
        date: '2026-06-18',
        time: '17:00',
        stadium: 'Monterrey',
        group: 'F'
    },
    {
        id: 33,
        stage: 'Gruppenphase',
        team1: 'NED',
        team2: 'SWE',
        date: '2026-06-27',
        time: '14:00',
        stadium: 'Houston',
        group: 'F'
    },
    {
        id: 34,
        stage: 'Gruppenphase',
        team1: 'JPN',
        team2: 'TUN',
        date: '2026-06-27',
        time: '17:00',
        stadium: 'Guadalajara',
        group: 'F'
    },
    {
        id: 35,
        stage: 'Gruppenphase',
        team1: 'TUN',
        team2: 'NED',
        date: '2026-07-04',
        time: '18:00',
        stadium: 'LA',
        group: 'F'
    },
    {
        id: 36,
        stage: 'Gruppenphase',
        team1: 'JPN',
        team2: 'SWE',
        date: '2026-07-04',
        time: '18:00',
        stadium: 'Denver',
        group: 'F'
    },

    // Gruppe G Spiele
    {
        id: 37,
        stage: 'Gruppenphase',
        team1: 'BEL',
        team2: 'EGY',
        date: '2026-06-18',
        time: '20:00',
        stadium: 'Vegas',
        group: 'G'
    },
    {
        id: 38,
        stage: 'Gruppenphase',
        team1: 'IRN',
        team2: 'NZL',
        date: '2026-06-19',
        time: '17:00',
        stadium: 'Toronto',
        group: 'G'
    },
    {
        id: 39,
        stage: 'Gruppenphase',
        team1: 'BEL',
        team2: 'IRN',
        date: '2026-06-28',
        time: '14:00',
        stadium: 'Phoenix',
        group: 'G'
    },
    {
        id: 40,
        stage: 'Gruppenphase',
        team1: 'EGY',
        team2: 'NZL',
        date: '2026-06-28',
        time: '17:00',
        stadium: 'Vancouver',
        group: 'G'
    },
    {
        id: 41,
        stage: 'Gruppenphase',
        team1: 'NZL',
        team2: 'BEL',
        date: '2026-07-05',
        time: '18:00',
        stadium: 'Dallas',
        group: 'G'
    },
    {
        id: 42,
        stage: 'Gruppenphase',
        team1: 'IRN',
        team2: 'EGY',
        date: '2026-07-05',
        time: '18:00',
        stadium: 'Mexico City',
        group: 'G'
    },

    // Gruppe H Spiele
    {
        id: 43,
        stage: 'Gruppenphase',
        team1: 'ESP',
        team2: 'CPV',
        date: '2026-06-19',
        time: '14:00',
        stadium: 'Kansas',
        group: 'H'
    },
    {
        id: 44,
        stage: 'Gruppenphase',
        team1: 'SAU',
        team2: 'URY',
        date: '2026-06-19',
        time: '20:00',
        stadium: 'Miami',
        group: 'H'
    },
    {
        id: 45,
        stage: 'Gruppenphase',
        team1: 'ESP',
        team2: 'SAU',
        date: '2026-06-29',
        time: '14:00',
        stadium: 'Denver',
        group: 'H'
    },
    {
        id: 46,
        stage: 'Gruppenphase',
        team1: 'CPV',
        team2: 'URY',
        date: '2026-06-29',
        time: '17:00',
        stadium: 'Seattle',
        group: 'H'
    },
    {
        id: 47,
        stage: 'Gruppenphase',
        team1: 'URY',
        team2: 'ESP',
        date: '2026-07-06',
        time: '19:00',
        stadium: 'Atlanta',
        group: 'H'
    },
    {
        id: 48,
        stage: 'Gruppenphase',
        team1: 'CPV',
        team2: 'SAU',
        date: '2026-07-06',
        time: '19:00',
        stadium: 'Houston',
        group: 'H'
    },

    // Gruppe I Spiele
    {
        id: 49,
        stage: 'Gruppenphase',
        team1: 'FRA',
        team2: 'SEN',
        date: '2026-06-20',
        time: '14:00',
        stadium: 'Boston',
        group: 'I'
    },
    {
        id: 50,
        stage: 'Gruppenphase',
        team1: 'IRQ',
        team2: 'NOR',
        date: '2026-06-20',
        time: '17:00',
        stadium: 'Monterrey',
        group: 'I'
    },
    {
        id: 51,
        stage: 'Gruppenphase',
        team1: 'FRA',
        team2: 'IRQ',
        date: '2026-06-30',
        time: '14:00',
        stadium: 'LA',
        group: 'I'
    },
    {
        id: 52,
        stage: 'Gruppenphase',
        team1: 'SEN',
        team2: 'NOR',
        date: '2026-06-30',
        time: '17:00',
        stadium: 'Toronto',
        group: 'I'
    },
    {
        id: 53,
        stage: 'Gruppenphase',
        team1: 'NOR',
        team2: 'FRA',
        date: '2026-07-07',
        time: '19:00',
        stadium: 'Vegas',
        group: 'I'
    },
    {
        id: 54,
        stage: 'Gruppenphase',
        team1: 'IRQ',
        team2: 'SEN',
        date: '2026-07-07',
        time: '19:00',
        stadium: 'Phoenix',
        group: 'I'
    },

    // Gruppe J Spiele
    {
        id: 55,
        stage: 'Gruppenphase',
        team1: 'ARG',
        team2: 'ALG',
        date: '2026-06-20',
        time: '20:00',
        stadium: 'MetLife',
        group: 'J'
    },
    {
        id: 56,
        stage: 'Gruppenphase',
        team1: 'AUT',
        team2: 'JOR',
        date: '2026-06-21',
        time: '14:00',
        stadium: 'Kansas',
        group: 'J'
    },
    {
        id: 57,
        stage: 'Gruppenphase',
        team1: 'ARG',
        team2: 'AUT',
        date: '2026-07-01',
        time: '14:00',
        stadium: 'Houston',
        group: 'J'
    },
    {
        id: 58,
        stage: 'Gruppenphase',
        team1: 'ALG',
        team2: 'JOR',
        date: '2026-07-01',
        time: '17:00',
        stadium: 'Mexico City',
        group: 'J'
    },
    {
        id: 59,
        stage: 'Gruppenphase',
        team1: 'JOR',
        team2: 'ARG',
        date: '2026-07-08',
        time: '19:00',
        stadium: 'Seattle',
        group: 'J'
    },
    {
        id: 60,
        stage: 'Gruppenphase',
        team1: 'ALG',
        team2: 'AUT',
        date: '2026-07-08',
        time: '19:00',
        stadium: 'Denver',
        group: 'J'
    },

    // Gruppe K Spiele
    {
        id: 61,
        stage: 'Gruppenphase',
        team1: 'POR',
        team2: 'COD',
        date: '2026-06-21',
        time: '17:00',
        stadium: 'Dallas',
        group: 'K'
    },
    {
        id: 62,
        stage: 'Gruppenphase',
        team1: 'UZB',
        team2: 'COL',
        date: '2026-06-21',
        time: '20:00',
        stadium: 'Atlanta',
        group: 'K'
    },
    {
        id: 63,
        stage: 'Gruppenphase',
        team1: 'POR',
        team2: 'UZB',
        date: '2026-07-02',
        time: '14:00',
        stadium: 'LA',
        group: 'K'
    },
    {
        id: 64,
        stage: 'Gruppenphase',
        team1: 'COD',
        team2: 'COL',
        date: '2026-07-02',
        time: '17:00',
        stadium: 'Vancouver',
        group: 'K'
    },
    {
        id: 65,
        stage: 'Gruppenphase',
        team1: 'COL',
        team2: 'POR',
        date: '2026-07-09',
        time: '19:00',
        stadium: 'Miami',
        group: 'K'
    },
    {
        id: 66,
        stage: 'Gruppenphase',
        team1: 'COD',
        team2: 'UZB',
        date: '2026-07-09',
        time: '19:00',
        stadium: 'Guadalajara',
        group: 'K'
    },

    // Gruppe L Spiele
    {
        id: 67,
        stage: 'Gruppenphase',
        team1: 'ENG',
        team2: 'CRO',
        date: '2026-06-21',
        time: '20:00',
        stadium: 'Boston',
        group: 'L'
    },
    {
        id: 68,
        stage: 'Gruppenphase',
        team1: 'GHA',
        team2: 'PAN',
        date: '2026-06-22',
        time: '14:00',
        stadium: 'Dallas',
        group: 'L'
    },
    {
        id: 69,
        stage: 'Gruppenphase',
        team1: 'ENG',
        team2: 'GHA',
        date: '2026-07-03',
        time: '14:00',
        stadium: 'Denver',
        group: 'L'
    },
    {
        id: 70,
        stage: 'Gruppenphase',
        team1: 'CRO',
        team2: 'PAN',
        date: '2026-07-03',
        time: '17:00',
        stadium: 'Houston',
        group: 'L'
    },
    {
        id: 71,
        stage: 'Gruppenphase',
        team1: 'PAN',
        team2: 'ENG',
        date: '2026-07-10',
        time: '19:00',
        stadium: 'LA',
        group: 'L'
    },
    {
        id: 72,
        stage: 'Gruppenphase',
        team1: 'CRO',
        team2: 'GHA',
        date: '2026-07-10',
        time: '19:00',
        stadium: 'Phoenix',
        group: 'L'
    },

    // Achtelfinale
    {
        id: 73,
        stage: 'Achtelfinale',
        team1: 'ARG',
        team2: 'AUS',
        date: '2026-07-12',
        time: '14:00',
        stadium: 'MetLife',
    },
    {
        id: 74,
        stage: 'Achtelfinale',
        team1: 'FRA',
        team2: 'BEL',
        date: '2026-07-12',
        time: '18:00',
        stadium: 'Dallas',
    },
    {
        id: 75,
        stage: 'Achtelfinale',
        team1: 'GER',
        team2: 'BRA',
        date: '2026-07-13',
        time: '14:00',
        stadium: 'Houston',
    },
    {
        id: 76,
        stage: 'Achtelfinale',
        team1: 'ESP',
        team2: 'NED',
        date: '2026-07-13',
        time: '18:00',
        stadium: 'Denver',
    },
    {
        id: 77,
        stage: 'Achtelfinale',
        team1: 'ENG',
        team2: 'SUI',
        date: '2026-07-14',
        time: '14:00',
        stadium: 'LA',
    },
    {
        id: 78,
        stage: 'Achtelfinale',
        team1: 'USA',
        team2: 'POR',
        date: '2026-07-14',
        time: '18:00',
        stadium: 'Atlanta',
    },
    {
        id: 79,
        stage: 'Achtelfinale',
        team1: 'MEX',
        team2: 'SEN',
        date: '2026-07-15',
        time: '14:00',
        stadium: 'Phoenix',
    },
    {
        id: 80,
        stage: 'Achtelfinale',
        team1: 'JPN',
        team2: 'URY',
        date: '2026-07-15',
        time: '18:00',
        stadium: 'Kansas',
    },

    // Viertelfinale
    {
        id: 81,
        stage: 'Viertelfinale',
        team1: 'ARG',
        team2: 'FRA',
        date: '2026-07-18',
        time: '14:00',
        stadium: 'MetLife',
    },
    {
        id: 82,
        stage: 'Viertelfinale',
        team1: 'GER',
        team2: 'ESP',
        date: '2026-07-18',
        time: '18:00',
        stadium: 'Houston',
    },
    {
        id: 83,
        stage: 'Viertelfinale',
        team1: 'ENG',
        team2: 'USA',
        date: '2026-07-19',
        time: '14:00',
        stadium: 'LA',
    },
    {
        id: 84,
        stage: 'Viertelfinale',
        team1: 'MEX',
        team2: 'JPN',
        date: '2026-07-19',
        time: '18:00',
        stadium: 'Dallas',
    },

    // Semifinale
    {
        id: 85,
        stage: 'Semifinale',
        team1: 'ARG',
        team2: 'GER',
        date: '2026-07-22',
        time: '20:00',
        stadium: 'MetLife',
    },
    {
        id: 86,
        stage: 'Semifinale',
        team1: 'ENG',
        team2: 'MEX',
        date: '2026-07-23',
        time: '20:00',
        stadium: 'Houston',
    },

    // Finale
    {
        id: 87,
        stage: 'Finale',
        team1: 'ARG',
        team2: 'ENG',
        date: '2026-07-26',
        time: '19:00',
        stadium: 'MetLife',
    },
];
