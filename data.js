// FIFA Weltmeisterschaft 2026 - Offizielle Spieldaten
// Turniere in USA, Mexiko und Kanada - 48 Teams in 12 Gruppen

const teams = {
    // Gruppe A (4 Teams)
    'MEX': { name: 'Mexiko', flag: '🇲🇽', group: 'A' },
    'ZAF': { name: 'Südafrika', flag: '🇿🇦', group: 'A' },
    'KOR': { name: 'Südkorea', flag: '🇰🇷', group: 'A' },
    'CZE': { name: 'Tschechien', flag: '🇨🇿', group: 'A' },
    
    // Gruppe B (4 Teams)
    'CAN': { name: 'Kanada', flag: '🇨🇦', group: 'B' },
    'BIH': { name: 'Bosnien-Herzegowina', flag: '🇧🇦', group: 'B' },
    'QAT': { name: 'Katar', flag: '🇶🇦', group: 'B' },
    'SUI': { name: 'Schweiz', flag: '🇨🇭', group: 'B' },
    
    // Gruppe C (4 Teams)
    'BRA': { name: 'Brasilien', flag: '🇧🇷', group: 'C' },
    'MAR': { name: 'Marokko', flag: '🇲🇦', group: 'C' },
    'HTI': { name: 'Haiti', flag: '🇭🇹', group: 'C' },
    'SCO': { name: 'Schottland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C' },
    
    // Gruppe D (4 Teams)
    'USA': { name: 'USA', flag: '🇺🇸', group: 'D' },
    'PRY': { name: 'Paraguay', flag: '🇵🇾', group: 'D' },
    'AUS': { name: 'Australien', flag: '🇦🇺', group: 'D' },
    'TUR': { name: 'Türkei', flag: '🇹🇷', group: 'D' },
    
    // Gruppe E (4 Teams)
    'GER': { name: 'Deutschland', flag: '🇩🇪', group: 'E' },
    'CUW': { name: 'Curaçao', flag: '🇨🇼', group: 'E' },
    'CIV': { name: 'Elfenbeinküste', flag: '🇨🇮', group: 'E' },
    'ECU': { name: 'Ecuador', flag: '🇪🇨', group: 'E' },
    
    // Gruppe F (4 Teams)
    'NED': { name: 'Niederlande', flag: '🇳🇱', group: 'F' },
    'JPN': { name: 'Japan', flag: '🇯🇵', group: 'F' },
    'SWE': { name: 'Schweden', flag: '🇸🇪', group: 'F' },
    'TUN': { name: 'Tunesien', flag: '🇹🇳', group: 'F' },
    
    // Gruppe G (4 Teams)
    'BEL': { name: 'Belgien', flag: '🇧🇪', group: 'G' },
    'EGY': { name: 'Ägypten', flag: '🇪🇬', group: 'G' },
    'IRN': { name: 'Iran', flag: '🇮🇷', group: 'G' },
    'NZL': { name: 'Neuseeland', flag: '🇳🇿', group: 'G' },
    
    // Gruppe H (4 Teams)
    'ESP': { name: 'Spanien', flag: '🇪🇸', group: 'H' },
    'CPV': { name: 'Kap Verde', flag: '🇨🇻', group: 'H' },
    'SAU': { name: 'Saudi-Arabien', flag: '🇸🇦', group: 'H' },
    'URY': { name: 'Uruguay', flag: '🇺🇾', group: 'H' },
    
    // Gruppe I (4 Teams)
    'FRA': { name: 'Frankreich', flag: '🇫🇷', group: 'I' },
    'SEN': { name: 'Senegal', flag: '🇸🇳', group: 'I' },
    'IRQ': { name: 'Irak', flag: '🇮🇶', group: 'I' },
    'NOR': { name: 'Norwegen', flag: '🇳🇴', group: 'I' },
    
    // Gruppe J (4 Teams)
    'ARG': { name: 'Argentinien', flag: '🇦🇷', group: 'J' },
    'UGD': { name: 'Uganda', flag: '🇺🇬', group: 'J' },
    'PER': { name: 'Peru', flag: '🇵🇪', group: 'J' },
    'ANG': { name: 'Angola', flag: '🇦🇴', group: 'J' },
    
    // Gruppe K (4 Teams)
    'POL': { name: 'Polen', flag: '🇵🇱', group: 'K' },
    'SVK': { name: 'Slowakei', flag: '🇸🇰', group: 'K' },
    'ALB': { name: 'Albanien', flag: '🇦🇱', group: 'K' },
    'TKM': { name: 'Turkmenistan', flag: '🇹🇲', group: 'K' },
    
    // Gruppe L (4 Teams)
    'ENG': { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L' },
    'UKR': { name: 'Ukraine', flag: '🇺🇦', group: 'L' },
    'SVN': { name: 'Slowenien', flag: '🇸🇮', group: 'L' },
    'FIN': { name: 'Finnland', flag: '🇫🇮', group: 'L' },
};

const stadiums = {
    // USA - 12 Stadien
    'MetLife': { name: 'MetLife Stadium', city: 'East Rutherford, New Jersey', country: '🇺🇸', capacity: 82500 },
    'Dallas': { name: 'AT&T Stadium', city: 'Arlington, Texas', country: '🇺🇸', capacity: 80000 },
    'Kansas': { name: 'Arrowhead Stadium', city: 'Kansas City, Missouri', country: '🇺🇸', capacity: 76416 },
    'Atlanta': { name: 'Mercedes-Benz Stadium', city: 'Atlanta, Georgia', country: '🇺🇸', capacity: 71000 },
    'Miami': { name: 'Hard Rock Stadium', city: 'Miami Gardens, Florida', country: '🇺🇸', capacity: 65326 },
    'Houston': { name: 'NRG Stadium', city: 'Houston, Texas', country: '🇺🇸', capacity: 72220 },
    'Denver': { name: 'Empower Field at Mile High', city: 'Denver, Colorado', country: '🇺🇸', capacity: 76915 },
    'Seattle': { name: 'Lumen Field', city: 'Seattle, Washington', country: '🇺🇸', capacity: 68740 },
    'LA': { name: 'SoFi Stadium', city: 'Inglewood, Kalifornien', country: '🇺🇸', capacity: 70240 },
    'Vegas': { name: 'Allegiant Stadium', city: 'Las Vegas, Nevada', country: '🇺🇸', capacity: 61629 },
    'Phoenix': { name: 'State Farm Stadium', city: 'Glendale, Arizona', country: '🇺🇸', capacity: 63400 },
    'Boston': { name: 'Gillette Stadium', city: 'Foxborough, Massachusetts', country: '🇺🇸', capacity: 65878 },
    'Philadelphia': { name: 'Lincoln Financial Field', city: 'Philadelphia, Pennsylvania', country: '🇺🇸', capacity: 69176 },
    'SanFrancisco': { name: 'Levi\'s Stadium', city: 'Santa Clara, Kalifornien', country: '🇺🇸', capacity: 68500 },
    'Nashville': { name: 'Nissan Stadium', city: 'Nashville, Tennessee', country: '🇺🇸', capacity: 69143 },
    'Orlando': { name: 'Camping World Stadium', city: 'Orlando, Florida', country: '🇺🇸', capacity: 65618 },
    
    // Mexiko - 3 Stadien
    'Guadalajara': { name: 'Estadio Jalisco', city: 'Guadalajara, Jalisco', country: '🇲🇽', capacity: 54000 },
    'Mexico City': { name: 'Estadio Azteca', city: 'Mexico City', country: '🇲🇽', capacity: 87523 },
    'Monterrey': { name: 'Estadio BBVA', city: 'Monterrey, Nuevo León', country: '🇲🇽', capacity: 51967 },
    
    // Kanada - 2 Stadien
    'Toronto': { name: 'BMO Field', city: 'Toronto, Ontario', country: '🇨🇦', capacity: 45918 },
    'Vancouver': { name: 'BC Place', city: 'Vancouver, British Columbia', country: '🇨🇦', capacity: 54500 },
};

const games = [
    // ===== GRUPPE A =====
    { id: 1, stage: 'Gruppenphase', team1: 'MEX', team2: 'ZAF', date: '2026-06-11', time: '16:00', stadium: 'Mexico City', group: 'A' },
    { id: 2, stage: 'Gruppenphase', team1: 'CAN', team2: 'BIH', date: '2026-06-12', time: '19:00', stadium: 'Toronto', group: 'B' },
    { id: 3, stage: 'Gruppenphase', team1: 'BRA', team2: 'MAR', date: '2026-06-12', time: '21:00', stadium: 'MetLife', group: 'C' },
    { id: 4, stage: 'Gruppenphase', team1: 'USA', team2: 'PRY', date: '2026-06-12', time: '19:30', stadium: 'Houston', group: 'D' },
    
    { id: 5, stage: 'Gruppenphase', team1: 'GER', team2: 'CUW', date: '2026-06-14', time: '18:00', stadium: 'Houston', group: 'E' },
    { id: 6, stage: 'Gruppenphase', team1: 'NED', team2: 'JPN', date: '2026-06-14', time: '19:30', stadium: 'Seattle', group: 'F' },
    { id: 7, stage: 'Gruppenphase', team1: 'BEL', team2: 'EGY', date: '2026-06-14', time: '21:00', stadium: 'Boston', group: 'G' },
    { id: 8, stage: 'Gruppenphase', team1: 'ESP', team2: 'CPV', date: '2026-06-15', time: '18:00', stadium: 'MetLife', group: 'H' },
    
    { id: 9, stage: 'Gruppenphase', team1: 'FRA', team2: 'SEN', date: '2026-06-15', time: '19:30', stadium: 'Miami', group: 'I' },
    { id: 10, stage: 'Gruppenphase', team1: 'ARG', team2: 'UGD', date: '2026-06-15', time: '21:00', stadium: 'MetLife', group: 'J' },
    { id: 11, stage: 'Gruppenphase', team1: 'POL', team2: 'SVK', date: '2026-06-16', time: '18:00', stadium: 'Boston', group: 'K' },
    { id: 12, stage: 'Gruppenphase', team1: 'ENG', team2: 'UKR', date: '2026-06-16', time: '19:30', stadium: 'MetLife', group: 'L' },
    
    { id: 13, stage: 'Gruppenphase', team1: 'KOR', team2: 'CZE', date: '2026-06-17', time: '18:00', stadium: 'Kansas', group: 'A' },
    { id: 14, stage: 'Gruppenphase', team1: 'QAT', team2: 'SUI', date: '2026-06-17', time: '19:30', stadium: 'Miami', group: 'B' },
    { id: 15, stage: 'Gruppenphase', team1: 'HTI', team2: 'SCO', date: '2026-06-17', time: '21:00', stadium: 'Boston', group: 'C' },
    { id: 16, stage: 'Gruppenphase', team1: 'AUS', team2: 'TUR', date: '2026-06-18', time: '18:00', stadium: 'Atlanta', group: 'D' },
    
    { id: 17, stage: 'Gruppenphase', team1: 'CIV', team2: 'ECU', date: '2026-06-18', time: '19:30', stadium: 'Kansas', group: 'E' },
    { id: 18, stage: 'Gruppenphase', team1: 'SWE', team2: 'TUN', date: '2026-06-18', time: '21:00', stadium: 'Houston', group: 'F' },
    { id: 19, stage: 'Gruppenphase', team1: 'IRN', team2: 'NZL', date: '2026-06-19', time: '18:00', stadium: 'Miami', group: 'G' },
    { id: 20, stage: 'Gruppenphase', team1: 'SAU', team2: 'URY', date: '2026-06-19', time: '19:30', stadium: 'Phoenix', group: 'H' },
    
    { id: 21, stage: 'Gruppenphase', team1: 'IRQ', team2: 'NOR', date: '2026-06-19', time: '21:00', stadium: 'Denver', group: 'I' },
    { id: 22, stage: 'Gruppenphase', team1: 'PER', team2: 'ANG', date: '2026-06-20', time: '18:00', stadium: 'Dallas', group: 'J' },
    { id: 23, stage: 'Gruppenphase', team1: 'ALB', team2: 'TKM', date: '2026-06-20', time: '19:30', stadium: 'Phoenix', group: 'K' },
    { id: 24, stage: 'Gruppenphase', team1: 'SVN', team2: 'FIN', date: '2026-06-20', time: '21:00', stadium: 'LA', group: 'L' },
    
    { id: 25, stage: 'Gruppenphase', team1: 'MEX', team2: 'KOR', date: '2026-06-21', time: '18:00', stadium: 'Phoenix', group: 'A' },
    { id: 26, stage: 'Gruppenphase', team1: 'CAN', team2: 'QAT', date: '2026-06-21', time: '19:30', stadium: 'Vancouver', group: 'B' },
    { id: 27, stage: 'Gruppenphase', team1: 'BRA', team2: 'HTI', date: '2026-06-21', time: '21:00', stadium: 'Miami', group: 'C' },
    { id: 28, stage: 'Gruppenphase', team1: 'USA', team2: 'AUS', date: '2026-06-22', time: '18:00', stadium: 'LA', group: 'D' },
    
    { id: 29, stage: 'Gruppenphase', team1: 'GER', team2: 'CIV', date: '2026-06-22', time: '19:30', stadium: 'Toronto', group: 'E' },
    { id: 30, stage: 'Gruppenphase', team1: 'NED', team2: 'SWE', date: '2026-06-22', time: '21:00', stadium: 'Boston', group: 'F' },
    { id: 31, stage: 'Gruppenphase', team1: 'BEL', team2: 'IRN', date: '2026-06-23', time: '18:00', stadium: 'Denver', group: 'G' },
    { id: 32, stage: 'Gruppenphase', team1: 'ESP', team2: 'SAU', date: '2026-06-23', time: '19:30', stadium: 'MetLife', group: 'H' },
    
    { id: 33, stage: 'Gruppenphase', team1: 'FRA', team2: 'IRQ', date: '2026-06-23', time: '21:00', stadium: 'LA', group: 'I' },
    { id: 34, stage: 'Gruppenphase', team1: 'ARG', team2: 'PER', date: '2026-06-24', time: '18:00', stadium: 'MetLife', group: 'J' },
    { id: 35, stage: 'Gruppenphase', team1: 'POL', team2: 'ALB', date: '2026-06-24', time: '19:30', stadium: 'Boston', group: 'K' },
    { id: 36, stage: 'Gruppenphase', team1: 'ENG', team2: 'SVN', date: '2026-06-24', time: '21:00', stadium: 'MetLife', group: 'L' },
    
    { id: 37, stage: 'Gruppenphase', team1: 'ZAF', team2: 'CZE', date: '2026-06-25', time: '18:00', stadium: 'Monterrey', group: 'A' },
    { id: 38, stage: 'Gruppenphase', team1: 'BIH', team2: 'SUI', date: '2026-06-25', time: '19:30', stadium: 'Denver', group: 'B' },
    { id: 39, stage: 'Gruppenphase', team1: 'MAR', team2: 'SCO', date: '2026-06-25', time: '21:00', stadium: 'Phoenix', group: 'C' },
    { id: 40, stage: 'Gruppenphase', team1: 'PRY', team2: 'TUR', date: '2026-06-26', time: '18:00', stadium: 'Atlanta', group: 'D' },
    
    { id: 41, stage: 'Gruppenphase', team1: 'CUW', team2: 'ECU', date: '2026-06-26', time: '19:30', stadium: 'Kansas', group: 'E' },
    { id: 42, stage: 'Gruppenphase', team1: 'JPN', team2: 'TUN', date: '2026-06-26', time: '21:00', stadium: 'Houston', group: 'F' },
    { id: 43, stage: 'Gruppenphase', team1: 'EGY', team2: 'NZL', date: '2026-06-27', time: '18:00', stadium: 'Seattle', group: 'G' },
    { id: 44, stage: 'Gruppenphase', team1: 'CPV', team2: 'URY', date: '2026-06-27', time: '19:30', stadium: 'LA', group: 'H' },
    
    { id: 45, stage: 'Gruppenphase', team1: 'SEN', team2: 'NOR', date: '2026-06-27', time: '21:00', stadium: 'Nashville', group: 'I' },
    { id: 46, stage: 'Gruppenphase', team1: 'UGD', team2: 'ANG', date: '2026-06-28', time: '18:00', stadium: 'Phoenix', group: 'J' },
    { id: 47, stage: 'Gruppenphase', team1: 'SVK', team2: 'TKM', date: '2026-06-28', time: '19:30', stadium: 'Dallas', group: 'K' },
    { id: 48, stage: 'Gruppenphase', team1: 'UKR', team2: 'FIN', date: '2026-06-28', time: '21:00', stadium: 'Boston', group: 'L' },
    
    // Letzte Spieltage (alle Teams spielen zeitgleich)
    { id: 49, stage: 'Gruppenphase', team1: 'MEX', team2: 'CZE', date: '2026-06-29', time: '19:00', stadium: 'Boston', group: 'A' },
    { id: 50, stage: 'Gruppenphase', team1: 'ZAF', team2: 'KOR', date: '2026-06-29', time: '19:00', stadium: 'Orlando', group: 'A' },
    { id: 51, stage: 'Gruppenphase', team1: 'CAN', team2: 'SUI', date: '2026-06-29', time: '19:00', stadium: 'LA', group: 'B' },
    { id: 52, stage: 'Gruppenphase', team1: 'BIH', team2: 'QAT', date: '2026-06-29', time: '19:00', stadium: 'Philadelphia', group: 'B' },
    
    { id: 53, stage: 'Gruppenphase', team1: 'BRA', team2: 'SCO', date: '2026-06-29', time: '19:00', stadium: 'MetLife', group: 'C' },
    { id: 54, stage: 'Gruppenphase', team1: 'MAR', team2: 'HTI', date: '2026-06-29', time: '19:00', stadium: 'Denver', group: 'C' },
    { id: 55, stage: 'Gruppenphase', team1: 'USA', team2: 'TUR', date: '2026-06-29', time: '19:00', stadium: 'Dallas', group: 'D' },
    { id: 56, stage: 'Gruppenphase', team1: 'PRY', team2: 'AUS', date: '2026-06-29', time: '19:00', stadium: 'Atlanta', group: 'D' },
    
    { id: 57, stage: 'Gruppenphase', team1: 'GER', team2: 'ECU', date: '2026-06-29', time: '19:00', stadium: 'Boston', group: 'E' },
    { id: 58, stage: 'Gruppenphase', team1: 'CUW', team2: 'CIV', date: '2026-06-29', time: '19:00', stadium: 'Kansas', group: 'E' },
    { id: 59, stage: 'Gruppenphase', team1: 'NED', team2: 'TUN', date: '2026-06-29', time: '19:00', stadium: 'Houston', group: 'F' },
    { id: 60, stage: 'Gruppenphase', team1: 'JPN', team2: 'SWE', date: '2026-06-29', time: '19:00', stadium: 'LA', group: 'F' },
    
    { id: 61, stage: 'Gruppenphase', team1: 'BEL', team2: 'NZL', date: '2026-06-29', time: '19:00', stadium: 'Denver', group: 'G' },
    { id: 62, stage: 'Gruppenphase', team1: 'IRN', team2: 'EGY', date: '2026-06-29', time: '19:00', stadium: 'Seattle', group: 'G' },
    { id: 63, stage: 'Gruppenphase', team1: 'ESP', team2: 'URY', date: '2026-06-29', time: '19:00', stadium: 'MetLife', group: 'H' },
    { id: 64, stage: 'Gruppenphase', team1: 'CPV', team2: 'SAU', date: '2026-06-29', time: '19:00', stadium: 'Atlanta', group: 'H' },
    
    { id: 65, stage: 'Gruppenphase', team1: 'FRA', team2: 'NOR', date: '2026-06-29', time: '19:00', stadium: 'Nashville', group: 'I' },
    { id: 66, stage: 'Gruppenphase', team1: 'IRQ', team2: 'SEN', date: '2026-06-29', time: '19:00', stadium: 'Phoenix', group: 'I' },
    { id: 67, stage: 'Gruppenphase', team1: 'ARG', team2: 'ANG', date: '2026-06-29', time: '19:00', stadium: 'MetLife', group: 'J' },
    { id: 68, stage: 'Gruppenphase', team1: 'UGD', team2: 'PER', date: '2026-06-29', time: '19:00', stadium: 'Phoenix', group: 'J' },
    
    { id: 69, stage: 'Gruppenphase', team1: 'POL', team2: 'TKM', date: '2026-06-29', time: '19:00', stadium: 'Dallas', group: 'K' },
    { id: 70, stage: 'Gruppenphase', team1: 'SVK', team2: 'ALB', date: '2026-06-29', time: '19:00', stadium: 'Boston', group: 'K' },
    { id: 71, stage: 'Gruppenphase', team1: 'ENG', team2: 'FIN', date: '2026-06-29', time: '19:00', stadium: 'Boston', group: 'L' },
    { id: 72, stage: 'Gruppenphase', team1: 'UKR', team2: 'SVN', date: '2026-06-29', time: '19:00', stadium: 'MetLife', group: 'L' },

    // ===== KNOCKOUT PHASE =====
    // Sechzehntelfinale (Round of 16)
    { id: 73, stage: 'Sechzehntelfinale', team1: 'ARG', team2: 'AUS', date: '2026-07-02', time: '19:00', stadium: 'MetLife' },
    { id: 74, stage: 'Sechzehntelfinale', team1: 'FRA', team2: 'BEL', date: '2026-07-03', time: '19:00', stadium: 'LA' },
    { id: 75, stage: 'Sechzehntelfinale', team1: 'GER', team2: 'BRA', date: '2026-07-04', time: '19:00', stadium: 'Houston' },
    { id: 76, stage: 'Sechzehntelfinale', team1: 'ESP', team2: 'NED', date: '2026-07-05', time: '19:00', stadium: 'Denver' },
    { id: 77, stage: 'Sechzehntelfinale', team1: 'ENG', team2: 'SUI', date: '2026-07-06', time: '19:00', stadium: 'Dallas' },
    { id: 78, stage: 'Sechzehntelfinale', team1: 'USA', team2: 'POR', date: '2026-07-07', time: '19:00', stadium: 'Atlanta' },

    // Achtelfinale
    { id: 79, stage: 'Achtelfinale', team1: 'ARG', team2: 'FRA', date: '2026-07-09', time: '19:00', stadium: 'MetLife' },
    { id: 80, stage: 'Achtelfinale', team1: 'GER', team2: 'ESP', date: '2026-07-09', time: '19:00', stadium: 'Houston' },

    // Viertelfinale
    { id: 81, stage: 'Viertelfinale', team1: 'ARG', team2: 'GER', date: '2026-07-11', time: '19:00', stadium: 'MetLife' },

    // Semifinale
    { id: 82, stage: 'Semifinale', team1: 'ARG', team2: 'FRA', date: '2026-07-14', time: '20:00', stadium: 'MetLife' },

    // Finale
    { id: 83, stage: 'Finale', team1: 'ARG', team2: 'FRA', date: '2026-07-19', time: '19:00', stadium: 'MetLife' },
];
