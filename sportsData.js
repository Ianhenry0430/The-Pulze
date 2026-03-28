// Central data store for the collegiate sports tracker
import { getPlayersForTeam } from './realPlayers';

export const TIERS = [
  { id: 'D1', name: 'Division I', short: 'D1', color: 'tier-accent-d1', bg: 'tier-bg-d1', border: 'tier-border-d1' },
  { id: 'D2', name: 'Division II', short: 'D2', color: 'tier-accent-d2', bg: 'tier-bg-d2', border: 'tier-border-d2' },
  { id: 'D3', name: 'Division III', short: 'D3', color: 'tier-accent-d3', bg: 'tier-bg-d3', border: 'tier-border-d3' },
  { id: 'NAIA', name: 'NAIA', short: 'NAIA', color: 'tier-accent-naia', bg: 'tier-bg-naia', border: 'tier-border-naia' },
  { id: 'JUCO', name: 'JUCO', short: 'JUCO', color: 'tier-accent-juco', bg: 'tier-bg-juco', border: 'tier-border-juco' },
];

export const SPORTS = [
  { id: 'football', name: 'Football', gender: 'men', icon: '🏈' },
  { id: 'baseball', name: 'Baseball', gender: 'men', icon: '⚾' },
  { id: 'hockey', name: 'Hockey', gender: 'men', icon: '🏒' },
  { id: 'volleyball', name: "Women's Volleyball", gender: 'women', icon: '🏐' },
  { id: 'tennis', name: "Women's Tennis", gender: 'women', icon: '🎾' },
  { id: 'whockey', name: "Women's Hockey", gender: 'women', icon: '🏒' },
];

export const CONFERENCES = {
  D1: {
    football: ['SEC', 'Big Ten', 'Big 12', 'ACC', 'Sun Belt', 'AAC', 'C-USA', 'MAC', 'MWC', 'Independents'],
    baseball: ['SEC', 'ACC', 'Big 12', 'Big Ten', 'AAC', 'Sun Belt', 'Pac-12', 'Colonial'],
    hockey: ['Big Ten', 'NCHC', 'Hockey East', 'ECAC', 'CCHA', 'Atlantic Hockey'],
    volleyball: ['Big Ten', 'SEC', 'ACC', 'Big 12', 'AAC', 'WCC', 'Pac-12'],
    tennis: ['SEC', 'ACC', 'Big Ten', 'Big 12', 'AAC', 'WCC', 'Pac-12'],
    whockey: ['WCHA', 'ECAC', 'Hockey East', 'CHA'],
  },
  D2: {
    football: ['GLIAC', 'MIAA', 'PSAC', 'GAC', 'Lone Star', 'GNAC', 'CIAA', 'SIAC'],
    baseball: ['Peach Belt', 'SSC', 'GLIAC', 'MIAA', 'Lone Star', 'CCAA'],
    hockey: ['NE-10'],
    volleyball: ['GLIAC', 'MIAA', 'CCAA', 'GNAC', 'Lone Star'],
    tennis: ['Peach Belt', 'SSC', 'GLIAC', 'Gulf South'],
    whockey: ['NE-10'],
  },
  D3: {
    football: ['WIAC', 'MIAC', 'OAC', 'NESCAC', 'Centennial', 'Liberty League'],
    baseball: ['WIAC', 'MIAC', 'OAC', 'NESCAC', 'Centennial'],
    hockey: ['NESCAC', 'MIAC', 'NCHA'],
    volleyball: ['WIAC', 'MIAC', 'SCIAC', 'NESCAC', 'UAA'],
    tennis: ['NESCAC', 'UAA', 'SCIAC', 'Centennial'],
    whockey: ['NESCAC', 'MIAC', 'NCHA'],
  },
  NAIA: {
    football: ['KCAC', 'HAAC', 'MSC', 'GPAC', 'Frontier'],
    baseball: ['KCAC', 'HAAC', 'MSC', 'GPAC', 'Chicagoland'],
    hockey: ['ACHA NAIA'],
    volleyball: ['KCAC', 'HAAC', 'GPAC', 'MSC'],
    tennis: ['KCAC', 'HAAC', 'GPAC', 'MSC'],
    whockey: ['ACHA NAIA'],
  },
  JUCO: {
    football: ['KJCCC', 'MACJC', 'SWJCFC', 'NJCAA'],
    baseball: ['NJCAA DI', 'NJCAA DII', 'CCCAA', 'NWAC'],
    hockey: ['NJCAA Hockey'],
    volleyball: ['NJCAA DI', 'NJCAA DII', 'CCCAA'],
    tennis: ['NJCAA', 'CCCAA'],
    whockey: ['NJCAA Hockey'],
  },
};

// ── REAL TEAMS DATA ──────────────────────────────────────────────────────────

const REAL_TEAMS = {
  D1: {
    football: {
      SEC: [
        { name: 'Alabama Crimson Tide', wins: 12, losses: 2, ranking: 4 },
        { name: 'Georgia Bulldogs', wins: 11, losses: 2, ranking: 8 },
        { name: 'Texas Longhorns', wins: 13, losses: 1, ranking: 3 },
        { name: 'Ole Miss Rebels', wins: 10, losses: 3, ranking: 15 },
        { name: 'LSU Tigers', wins: 9, losses: 4 },
        { name: 'Tennessee Volunteers', wins: 10, losses: 3, ranking: 12 },
        { name: 'South Carolina Gamecocks', wins: 8, losses: 5 },
        { name: 'Auburn Tigers', wins: 7, losses: 6 },
        { name: 'Mississippi State Bulldogs', wins: 6, losses: 7 },
        { name: 'Kentucky Wildcats', wins: 8, losses: 5 },
        { name: 'Vanderbilt Commodores', wins: 5, losses: 7 },
        { name: 'Arkansas Razorbacks', wins: 7, losses: 6 },
      ],
      'Big Ten': [
        { name: 'Ohio State Buckeyes', wins: 13, losses: 1, ranking: 2 },
        { name: 'Penn State Nittany Lions', wins: 13, losses: 3, ranking: 5 },
        { name: 'Oregon Ducks', wins: 12, losses: 2, ranking: 6 },
        { name: 'Michigan Wolverines', wins: 8, losses: 5 },
        { name: 'Michigan State Spartans', wins: 5, losses: 7 },
        { name: 'Iowa Hawkeyes', wins: 8, losses: 5 },
        { name: 'Wisconsin Badgers', wins: 9, losses: 4 },
        { name: 'Indiana Hoosiers', wins: 11, losses: 2, ranking: 17 },
        { name: 'Rutgers Scarlet Knights', wins: 5, losses: 7 },
        { name: 'UCLA Bruins', wins: 5, losses: 7 },
        { name: 'Northwestern Wildcats', wins: 5, losses: 7 },
        { name: 'Minnesota Golden Gophers', wins: 6, losses: 6 },
      ],
      'Big 12': [
        { name: 'Colorado Buffaloes', wins: 9, losses: 4, ranking: 18 },
        { name: 'Kansas State Wildcats', wins: 9, losses: 4 },
        { name: 'Iowa State Cyclones', wins: 11, losses: 3, ranking: 10 },
        { name: 'BYU Cougars', wins: 10, losses: 3, ranking: 14 },
        { name: 'Arizona State Sun Devils', wins: 11, losses: 3, ranking: 9 },
        { name: 'Baylor Bears', wins: 7, losses: 5 },
        { name: 'TCU Horned Frogs', wins: 8, losses: 5 },
        { name: 'West Virginia Mountaineers', wins: 6, losses: 7 },
        { name: 'Texas Tech Red Raiders', wins: 8, losses: 5 },
        { name: 'Oklahoma State Cowboys', wins: 6, losses: 7 },
      ],
      ACC: [
        { name: 'Clemson Tigers', wins: 11, losses: 3 },
        { name: 'SMU Mustangs', wins: 11, losses: 3, ranking: 13 },
        { name: 'Miami Hurricanes', wins: 10, losses: 3, ranking: 16 },
        { name: 'Pittsburgh Panthers', wins: 8, losses: 5 },
        { name: 'Notre Dame Fighting Irish', wins: 14, losses: 2, ranking: 1 },
        { name: 'Virginia Tech Hokies', wins: 6, losses: 7 },
        { name: 'NC State Wolfpack', wins: 10, losses: 3, ranking: 20 },
        { name: 'Georgia Tech Yellow Jackets', wins: 7, losses: 6 },
        { name: 'Duke Blue Devils', wins: 9, losses: 4 },
        { name: 'Wake Forest Demon Deacons', wins: 5, losses: 7 },
      ],
      'Sun Belt': [
        { name: 'Tulane Green Wave', wins: 11, losses: 3 },
        { name: 'Louisiana Ragin\' Cajuns', wins: 9, losses: 4 },
        { name: 'Arkansas State Red Wolves', wins: 6, losses: 6 },
        { name: 'Southern Miss Golden Eagles', wins: 5, losses: 7 },
        { name: 'Appalachian State Mountaineers', wins: 5, losses: 7 },
        { name: 'James Madison Dukes', wins: 8, losses: 5 },
        { name: 'Louisiana Monroe Warhawks', wins: 4, losses: 8 },
        { name: 'Georgia Southern Eagles', wins: 5, losses: 7 },
      ],
      AAC: [
        { name: 'Memphis Tigers', wins: 10, losses: 3 },
        { name: 'Army Black Knights', wins: 12, losses: 2, ranking: 19 },
        { name: 'Navy Midshipmen', wins: 9, losses: 4 },
        { name: 'Tulsa Golden Hurricane', wins: 5, losses: 7 },
        { name: 'UTSA Roadrunners', wins: 7, losses: 6 },
        { name: 'North Texas Mean Green', wins: 6, losses: 7 },
        { name: 'FAU Owls', wins: 8, losses: 5 },
        { name: 'Rice Owls', wins: 6, losses: 7 },
      ],
      'C-USA': [
        { name: 'Liberty Flames', wins: 11, losses: 3 },
        { name: 'UTEP Miners', wins: 6, losses: 7 },
        { name: 'Jacksonville State Gamecocks', wins: 7, losses: 6 },
        { name: 'FIU Panthers', wins: 3, losses: 9 },
        { name: 'Western Kentucky Hilltoppers', wins: 7, losses: 6 },
        { name: 'New Mexico State Aggies', wins: 5, losses: 7 },
      ],
      MAC: [
        { name: 'Miami (OH) RedHawks', wins: 9, losses: 4 },
        { name: 'Ohio Bobcats', wins: 7, losses: 6 },
        { name: 'Buffalo Bulls', wins: 6, losses: 7 },
        { name: 'Bowling Green Falcons', wins: 9, losses: 4 },
        { name: 'Toledo Rockets', wins: 7, losses: 6 },
        { name: 'Northern Illinois Huskies', wins: 8, losses: 5 },
        { name: 'Eastern Michigan Eagles', wins: 3, losses: 9 },
        { name: 'Western Michigan Broncos', wins: 4, losses: 8 },
      ],
      MWC: [
        { name: 'Boise State Broncos', wins: 12, losses: 2, ranking: 7 },
        { name: 'UNLV Rebels', wins: 11, losses: 3, ranking: 11 },
        { name: 'San Diego State Aztecs', wins: 8, losses: 5 },
        { name: 'Colorado State Rams', wins: 8, losses: 5 },
        { name: 'Air Force Falcons', wins: 7, losses: 6 },
        { name: 'Wyoming Cowboys', wins: 5, losses: 7 },
        { name: 'Fresno State Bulldogs', wins: 8, losses: 5 },
        { name: 'Hawaii Rainbow Warriors', wins: 5, losses: 8 },
      ],
      Independents: [
        { name: 'Notre Dame Fighting Irish', wins: 14, losses: 2, ranking: 1 },
        { name: 'Connecticut Huskies', wins: 3, losses: 9 },
        { name: 'Massachusetts Minutemen', wins: 2, losses: 10 },
        { name: 'Old Dominion Monarchs', wins: 4, losses: 8 },
      ],
    },
    baseball: {
      SEC: [
        { name: 'Tennessee Volunteers', wins: 56, losses: 14, ranking: 1 },
        { name: 'Arkansas Razorbacks', wins: 52, losses: 16, ranking: 3 },
        { name: 'LSU Tigers', wins: 45, losses: 20, ranking: 8 },
        { name: 'Vanderbilt Commodores', wins: 48, losses: 18, ranking: 5 },
        { name: 'Florida Gators', wins: 43, losses: 20, ranking: 12 },
        { name: 'Georgia Bulldogs', wins: 40, losses: 22 },
        { name: 'Mississippi State Bulldogs', wins: 38, losses: 24 },
        { name: 'Texas A&M Aggies', wins: 44, losses: 20, ranking: 10 },
        { name: 'Kentucky Wildcats', wins: 35, losses: 26 },
        { name: 'Auburn Tigers', wins: 33, losses: 27 },
        { name: 'Ole Miss Rebels', wins: 41, losses: 21 },
        { name: 'South Carolina Gamecocks', wins: 36, losses: 25 },
      ],
      ACC: [
        { name: 'Virginia Cavaliers', wins: 50, losses: 16, ranking: 2 },
        { name: 'North Carolina Tar Heels', wins: 46, losses: 19, ranking: 6 },
        { name: 'Miami Hurricanes', wins: 44, losses: 20, ranking: 9 },
        { name: 'Wake Forest Demon Deacons', wins: 40, losses: 21 },
        { name: 'Duke Blue Devils', wins: 38, losses: 23 },
        { name: 'Clemson Tigers', wins: 35, losses: 26 },
        { name: 'Florida State Seminoles', wins: 42, losses: 20, ranking: 14 },
        { name: 'NC State Wolfpack', wins: 37, losses: 24 },
        { name: 'Georgia Tech Yellow Jackets', wins: 33, losses: 27 },
        { name: 'Pittsburgh Panthers', wins: 28, losses: 30 },
      ],
      'Big 12': [
        { name: 'Texas Longhorns', wins: 50, losses: 17, ranking: 4 },
        { name: 'Oklahoma State Cowboys', wins: 47, losses: 19, ranking: 7 },
        { name: 'TCU Horned Frogs', wins: 45, losses: 20, ranking: 11 },
        { name: 'Texas Tech Red Raiders', wins: 42, losses: 22 },
        { name: 'West Virginia Mountaineers', wins: 38, losses: 24 },
        { name: 'Kansas Jayhawks', wins: 32, losses: 28 },
        { name: 'Baylor Bears', wins: 35, losses: 27 },
        { name: 'BYU Cougars', wins: 30, losses: 29 },
      ],
      'Big Ten': [
        { name: 'Indiana Hoosiers', wins: 44, losses: 20, ranking: 13 },
        { name: 'Michigan Wolverines', wins: 40, losses: 22 },
        { name: 'Maryland Terrapins', wins: 38, losses: 24 },
        { name: 'Nebraska Cornhuskers', wins: 35, losses: 26 },
        { name: 'Illinois Fighting Illini', wins: 32, losses: 28 },
        { name: 'Ohio State Buckeyes', wins: 36, losses: 25 },
        { name: 'Minnesota Golden Gophers', wins: 30, losses: 29 },
        { name: 'Rutgers Scarlet Knights', wins: 25, losses: 33 },
      ],
      AAC: [
        { name: 'Dallas Baptist Patriots', wins: 48, losses: 17, ranking: 15 },
        { name: 'East Carolina Pirates', wins: 40, losses: 22 },
        { name: 'Tulane Green Wave', wins: 35, losses: 25 },
        { name: 'Memphis Tigers', wins: 30, losses: 28 },
        { name: 'Rice Owls', wins: 37, losses: 23 },
        { name: 'South Florida Bulls', wins: 28, losses: 30 },
      ],
      'Sun Belt': [
        { name: 'Southern Miss Golden Eagles', wins: 45, losses: 19 },
        { name: 'Troy Trojans', wins: 40, losses: 22 },
        { name: 'Louisiana Ragin\' Cajuns', wins: 38, losses: 23 },
        { name: 'Coastal Carolina Chanticleers', wins: 36, losses: 25 },
        { name: 'Georgia Southern Eagles', wins: 32, losses: 27 },
        { name: 'Texas State Bobcats', wins: 35, losses: 24 },
      ],
      'Pac-12': [
        { name: 'Oregon State Beavers', wins: 52, losses: 14, ranking: 2 },
        { name: 'Stanford Cardinal', wins: 46, losses: 18 },
        { name: 'Arizona Wildcats', wins: 40, losses: 22 },
        { name: 'UCLA Bruins', wins: 35, losses: 25 },
        { name: 'Washington Huskies', wins: 30, losses: 28 },
        { name: 'Cal Bears', wins: 28, losses: 30 },
      ],
      Colonial: [
        { name: 'North Carolina-Wilmington Seahawks', wins: 42, losses: 20 },
        { name: 'James Madison Dukes', wins: 38, losses: 22 },
        { name: 'Elon Phoenix', wins: 32, losses: 26 },
        { name: 'Delaware Fightin Blue Hens', wins: 28, losses: 30 },
        { name: 'Hofstra Pride', wins: 25, losses: 32 },
        { name: 'William & Mary Tribe', wins: 22, losses: 34 },
      ],
    },
    hockey: {
      'Big Ten': [
        { name: 'Michigan Wolverines', wins: 28, losses: 8, ranking: 2 },
        { name: 'Minnesota Golden Gophers', wins: 25, losses: 12, ranking: 5 },
        { name: 'Penn State Nittany Lions', wins: 22, losses: 14 },
        { name: 'Wisconsin Badgers', wins: 20, losses: 16 },
        { name: 'Ohio State Buckeyes', wins: 18, losses: 18 },
        { name: 'Notre Dame Fighting Irish', wins: 24, losses: 12, ranking: 7 },
        { name: 'Michigan State Spartans', wins: 14, losses: 22 },
      ],
      NCHC: [
        { name: 'Denver Pioneers', wins: 30, losses: 6, ranking: 1 },
        { name: 'Minnesota Duluth Bulldogs', wins: 26, losses: 10, ranking: 4 },
        { name: 'North Dakota Fighting Hawks', wins: 24, losses: 12, ranking: 6 },
        { name: 'Colorado College Tigers', wins: 18, losses: 18 },
        { name: 'Miami (OH) RedHawks', wins: 20, losses: 16 },
        { name: 'Omaha Mavericks', wins: 15, losses: 21 },
        { name: 'St. Cloud State Huskies', wins: 22, losses: 14, ranking: 9 },
        { name: 'Western Michigan Broncos', wins: 17, losses: 19 },
      ],
      'Hockey East': [
        { name: 'Boston College Eagles', wins: 27, losses: 9, ranking: 3 },
        { name: 'UMass Minutemen', wins: 24, losses: 12, ranking: 8 },
        { name: 'Providence Friars', wins: 22, losses: 14 },
        { name: 'UConn Huskies', wins: 20, losses: 16 },
        { name: 'Northeastern Huskies', wins: 21, losses: 15 },
        { name: 'New Hampshire Wildcats', wins: 16, losses: 20 },
        { name: 'Maine Black Bears', wins: 12, losses: 24 },
        { name: 'Vermont Catamounts', wins: 14, losses: 22 },
        { name: 'Merrimack Warriors', wins: 13, losses: 23 },
      ],
      ECAC: [
        { name: 'Quinnipiac Bobcats', wins: 26, losses: 10, ranking: 10 },
        { name: 'Cornell Big Red', wins: 23, losses: 13 },
        { name: 'Yale Bulldogs', wins: 20, losses: 16 },
        { name: 'Harvard Crimson', wins: 19, losses: 17 },
        { name: 'Colgate Raiders', wins: 21, losses: 15 },
        { name: 'Clarkson Golden Knights', wins: 18, losses: 18 },
        { name: 'RPI Engineers', wins: 14, losses: 22 },
        { name: 'Union Dutchmen', wins: 12, losses: 24 },
      ],
      CCHA: [
        { name: 'Michigan Tech Huskies', wins: 22, losses: 14 },
        { name: 'Minnesota State Mavericks', wins: 28, losses: 8, ranking: 12 },
        { name: 'Bowling Green Falcons', wins: 18, losses: 18 },
        { name: 'Ferris State Bulldogs', wins: 20, losses: 16 },
        { name: 'Lake Superior State Lakers', wins: 16, losses: 20 },
        { name: 'Northern Michigan Wildcats', wins: 14, losses: 22 },
        { name: 'Bemidji State Beavers', wins: 20, losses: 15 },
      ],
      'Atlantic Hockey': [
        { name: 'Air Force Falcons', wins: 20, losses: 16 },
        { name: 'AIC Yellow Jackets', wins: 18, losses: 18 },
        { name: 'Army Black Knights', wins: 15, losses: 21 },
        { name: 'Canisius Golden Griffins', wins: 12, losses: 24 },
        { name: 'Holy Cross Crusaders', wins: 16, losses: 20 },
        { name: 'Sacred Heart Pioneers', wins: 14, losses: 22 },
        { name: 'Robert Morris Colonials', wins: 11, losses: 25 },
      ],
    },
    volleyball: {
      'Big Ten': [
        { name: 'Nebraska Cornhuskers', wins: 32, losses: 3, ranking: 1 },
        { name: 'Wisconsin Badgers', wins: 29, losses: 5, ranking: 3 },
        { name: 'Penn State Nittany Lions', wins: 27, losses: 7, ranking: 5 },
        { name: 'Minnesota Golden Gophers', wins: 25, losses: 9, ranking: 8 },
        { name: 'Illinois Fighting Illini', wins: 20, losses: 14 },
        { name: 'Iowa Hawkeyes', wins: 18, losses: 16 },
        { name: 'Ohio State Buckeyes', wins: 16, losses: 18 },
        { name: 'Purdue Boilermakers', wins: 22, losses: 12 },
        { name: 'Michigan Wolverines', wins: 15, losses: 19 },
        { name: 'Michigan State Spartans', wins: 12, losses: 22 },
      ],
      SEC: [
        { name: 'Kentucky Wildcats', wins: 30, losses: 4, ranking: 2 },
        { name: 'Florida Gators', wins: 26, losses: 8, ranking: 6 },
        { name: 'Texas A&M Aggies', wins: 22, losses: 12 },
        { name: 'Georgia Bulldogs', wins: 20, losses: 14 },
        { name: 'Tennessee Volunteers', wins: 18, losses: 16 },
        { name: 'LSU Tigers', wins: 24, losses: 10, ranking: 10 },
        { name: 'Missouri Tigers', wins: 16, losses: 18 },
        { name: 'Arkansas Razorbacks', wins: 14, losses: 20 },
      ],
      ACC: [
        { name: 'Pittsburgh Panthers', wins: 28, losses: 5, ranking: 4 },
        { name: 'Louisville Cardinals', wins: 25, losses: 9, ranking: 7 },
        { name: 'North Carolina Tar Heels', wins: 22, losses: 12 },
        { name: 'Miami Hurricanes', wins: 20, losses: 14 },
        { name: 'Georgia Tech Yellow Jackets', wins: 16, losses: 18 },
        { name: 'NC State Wolfpack', wins: 18, losses: 16 },
        { name: 'Clemson Tigers', wins: 14, losses: 20 },
        { name: 'Virginia Cavaliers', wins: 12, losses: 22 },
      ],
      'Big 12': [
        { name: 'Texas Longhorns', wins: 31, losses: 3, ranking: 1 },
        { name: 'Baylor Bears', wins: 25, losses: 9, ranking: 9 },
        { name: 'Kansas Jayhawks', wins: 22, losses: 12 },
        { name: 'Iowa State Cyclones', wins: 20, losses: 14 },
        { name: 'TCU Horned Frogs', wins: 18, losses: 16 },
        { name: 'BYU Cougars', wins: 24, losses: 10 },
        { name: 'Colorado Buffaloes', wins: 15, losses: 19 },
        { name: 'West Virginia Mountaineers', wins: 13, losses: 21 },
      ],
      AAC: [
        { name: 'UCF Knights', wins: 22, losses: 10 },
        { name: 'Memphis Tigers', wins: 18, losses: 14 },
        { name: 'South Florida Bulls', wins: 16, losses: 16 },
        { name: 'Tulsa Golden Hurricane', wins: 14, losses: 18 },
        { name: 'SMU Mustangs', wins: 20, losses: 12 },
        { name: 'Rice Owls', wins: 17, losses: 15 },
      ],
      WCC: [
        { name: "BYU Cougars", wins: 28, losses: 6 },
        { name: "San Diego Toreros", wins: 22, losses: 10 },
        { name: "Gonzaga Bulldogs", wins: 20, losses: 12 },
        { name: "Loyola Marymount Lions", wins: 16, losses: 16 },
        { name: "Portland Pilots", wins: 14, losses: 18 },
        { name: "Pepperdine Waves", wins: 18, losses: 14 },
      ],
      'Pac-12': [
        { name: 'Stanford Cardinal', wins: 30, losses: 4, ranking: 2 },
        { name: 'Washington Huskies', wins: 26, losses: 8 },
        { name: 'Oregon Ducks', wins: 22, losses: 12 },
        { name: 'UCLA Bruins', wins: 24, losses: 10 },
        { name: 'Arizona Wildcats', wins: 18, losses: 16 },
        { name: 'Cal Bears', wins: 15, losses: 19 },
        { name: 'Utah Utes', wins: 20, losses: 14 },
      ],
    },
    tennis: {
      SEC: [
        { name: 'Florida Gators', wins: 25, losses: 4, ranking: 1 },
        { name: 'Tennessee Volunteers', wins: 23, losses: 6, ranking: 3 },
        { name: 'Georgia Bulldogs', wins: 22, losses: 7, ranking: 5 },
        { name: 'Vanderbilt Commodores', wins: 20, losses: 9 },
        { name: 'Texas A&M Aggies', wins: 18, losses: 11 },
        { name: 'South Carolina Gamecocks', wins: 17, losses: 12 },
        { name: 'LSU Tigers', wins: 15, losses: 14 },
        { name: 'Kentucky Wildcats', wins: 19, losses: 10 },
      ],
      ACC: [
        { name: 'Duke Blue Devils', wins: 24, losses: 5, ranking: 2 },
        { name: 'North Carolina Tar Heels', wins: 22, losses: 7, ranking: 4 },
        { name: 'Virginia Cavaliers', wins: 21, losses: 8, ranking: 6 },
        { name: 'Miami Hurricanes', wins: 19, losses: 10 },
        { name: 'Notre Dame Fighting Irish', wins: 20, losses: 9 },
        { name: 'NC State Wolfpack', wins: 16, losses: 13 },
        { name: 'Wake Forest Demon Deacons', wins: 18, losses: 11 },
        { name: 'Clemson Tigers', wins: 14, losses: 15 },
      ],
      'Big Ten': [
        { name: 'Michigan Wolverines', wins: 22, losses: 7 },
        { name: 'Illinois Fighting Illini', wins: 24, losses: 5, ranking: 7 },
        { name: 'Ohio State Buckeyes', wins: 20, losses: 9 },
        { name: 'Northwestern Wildcats', wins: 18, losses: 11 },
        { name: 'Indiana Hoosiers', wins: 16, losses: 13 },
        { name: 'Wisconsin Badgers', wins: 14, losses: 15 },
        { name: 'Minnesota Golden Gophers', wins: 15, losses: 14 },
      ],
      'Big 12': [
        { name: 'Texas Longhorns', wins: 26, losses: 3, ranking: 1 },
        { name: 'Oklahoma Sooners', wins: 22, losses: 7, ranking: 8 },
        { name: 'TCU Horned Frogs', wins: 20, losses: 9 },
        { name: 'Baylor Bears', wins: 18, losses: 11 },
        { name: 'Kansas Jayhawks', wins: 17, losses: 12 },
        { name: 'Iowa State Cyclones', wins: 15, losses: 14 },
        { name: 'Arizona Wildcats', wins: 21, losses: 8 },
      ],
      AAC: [
        { name: 'UCF Knights', wins: 18, losses: 10 },
        { name: 'Memphis Tigers', wins: 16, losses: 12 },
        { name: 'East Carolina Pirates', wins: 14, losses: 14 },
        { name: 'South Florida Bulls', wins: 13, losses: 15 },
        { name: 'Tulsa Golden Hurricane', wins: 11, losses: 17 },
      ],
      WCC: [
        { name: 'Stanford Cardinal', wins: 24, losses: 5, ranking: 2 },
        { name: 'Pepperdine Waves', wins: 20, losses: 9 },
        { name: 'San Diego Toreros', wins: 18, losses: 11 },
        { name: 'Gonzaga Bulldogs', wins: 16, losses: 13 },
        { name: 'BYU Cougars', wins: 15, losses: 14 },
        { name: 'Santa Clara Broncos', wins: 12, losses: 17 },
      ],
      'Pac-12': [
        { name: 'UCLA Bruins', wins: 23, losses: 6, ranking: 3 },
        { name: 'Arizona Wildcats', wins: 22, losses: 7 },
        { name: 'Washington Huskies', wins: 20, losses: 9 },
        { name: 'Oregon Ducks', wins: 17, losses: 12 },
        { name: 'Cal Bears', wins: 16, losses: 13 },
        { name: 'Utah Utes', wins: 14, losses: 15 },
      ],
    },
    whockey: {
      WCHA: [
        { name: 'Wisconsin Badgers', wins: 32, losses: 4, ranking: 1 },
        { name: 'Minnesota Golden Gophers', wins: 28, losses: 7, ranking: 2 },
        { name: 'Ohio State Buckeyes', wins: 26, losses: 10, ranking: 4 },
        { name: 'Michigan Wolverines', wins: 22, losses: 12 },
        { name: 'Michigan State Spartans', wins: 18, losses: 16 },
        { name: 'Minnesota Duluth Bulldogs', wins: 20, losses: 14 },
      ],
      ECAC: [
        { name: 'Quinnipiac Bobcats', wins: 25, losses: 9, ranking: 5 },
        { name: 'Cornell Big Red', wins: 22, losses: 12 },
        { name: 'Yale Bulldogs', wins: 18, losses: 16 },
        { name: 'Harvard Crimson', wins: 20, losses: 14 },
        { name: 'Clarkson Golden Knights', wins: 24, losses: 10, ranking: 7 },
        { name: 'Princeton Tigers', wins: 16, losses: 18 },
        { name: 'RPI Engineers', wins: 12, losses: 22 },
        { name: 'Union Dutchwomen', wins: 10, losses: 24 },
      ],
      'Hockey East': [
        { name: 'Boston College Eagles', wins: 27, losses: 8, ranking: 3 },
        { name: 'Boston University Terriers', wins: 24, losses: 11, ranking: 6 },
        { name: 'Northeastern Huskies', wins: 22, losses: 13 },
        { name: 'Vermont Catamounts', wins: 20, losses: 15 },
        { name: 'UConn Huskies', wins: 18, losses: 17 },
        { name: 'Maine Black Bears', wins: 14, losses: 21 },
        { name: 'Providence Friars', wins: 16, losses: 19 },
        { name: 'New Hampshire Wildcats', wins: 13, losses: 22 },
      ],
      CHA: [
        { name: 'Robert Morris Colonials', wins: 22, losses: 12 },
        { name: 'Penn State Nittany Lions', wins: 20, losses: 14 },
        { name: 'Syracuse Orange', wins: 18, losses: 16 },
        { name: 'Mercyhurst Lakers', wins: 24, losses: 10, ranking: 8 },
        { name: 'Lindenwood Lions', wins: 16, losses: 18 },
        { name: 'Stonehill Skyhawks', wins: 12, losses: 22 },
      ],
    },
  },
  D2: {
    football: {
      GLIAC: [
        { name: 'Grand Valley State Lakers', wins: 13, losses: 2, ranking: 1 },
        { name: 'Ferris State Bulldogs', wins: 11, losses: 4 },
        { name: 'Saginaw Valley State Cardinals', wins: 9, losses: 4 },
        { name: 'Michigan Tech Huskies', wins: 8, losses: 5 },
        { name: 'Northwood Timberwolves', wins: 6, losses: 7 },
        { name: 'Wayne State Warriors', wins: 5, losses: 8 },
        { name: 'Davenport Panthers', wins: 4, losses: 9 },
      ],
      MIAA: [
        { name: 'Ashland Eagles', wins: 13, losses: 1, ranking: 2 },
        { name: 'Wayne State Warriors', wins: 10, losses: 3 },
        { name: 'Findlay Oilers', wins: 9, losses: 4 },
        { name: 'Tiffin Dragons', wins: 7, losses: 5 },
        { name: 'Hillsdale Chargers', wins: 8, losses: 4 },
        { name: 'Ohio Dominican Panthers', wins: 5, losses: 7 },
        { name: 'Walsh Cavaliers', wins: 4, losses: 8 },
      ],
      PSAC: [
        { name: 'Shepherd Rams', wins: 12, losses: 2, ranking: 3 },
        { name: 'Kutztown Golden Bears', wins: 10, losses: 4 },
        { name: 'West Chester Golden Rams', wins: 9, losses: 4 },
        { name: 'Indiana (PA) Indians', wins: 8, losses: 5 },
        { name: 'Slippery Rock Pride', wins: 7, losses: 6 },
        { name: 'Bloomsburg Huskies', wins: 5, losses: 8 },
        { name: 'Shippensburg Raiders', wins: 6, losses: 7 },
        { name: 'Edinboro Fighting Scots', wins: 4, losses: 9 },
      ],
      GAC: [
        { name: 'Henderson State Reddies', wins: 9, losses: 3, ranking: 12 },
        { name: 'Arkansas Tech Wonder Boys', wins: 8, losses: 4 },
        { name: 'Ouachita Baptist Tigers', wins: 10, losses: 2, ranking: 8 },
        { name: 'Southern Arkansas Muleriders', wins: 7, losses: 5 },
        { name: 'Harding Bisons', wins: 9, losses: 3 },
        { name: 'East Central Tigers', wins: 5, losses: 7 },
        { name: 'Northwestern Oklahoma Rangers', wins: 3, losses: 9 },
      ],
      'Lone Star': [
        { name: 'West Texas A&M Buffaloes', wins: 12, losses: 2, ranking: 4 },
        { name: 'Angelo State Rams', wins: 10, losses: 3 },
        { name: 'Midwestern State Mustangs', wins: 8, losses: 5 },
        { name: 'Tarleton State Texans', wins: 9, losses: 4 },
        { name: 'UT Permian Basin Falcons', wins: 5, losses: 8 },
        { name: 'Eastern New Mexico Greyhounds', wins: 4, losses: 9 },
        { name: 'UTPB Falcons', wins: 3, losses: 10 },
      ],
      GNAC: [
        { name: 'Azusa Pacific Cougars', wins: 10, losses: 2 },
        { name: 'California Baptist Lancers', wins: 9, losses: 3 },
        { name: 'Humboldt State Lumberjacks', wins: 7, losses: 5 },
        { name: 'Chico State Wildcats', wins: 8, losses: 4 },
        { name: 'Sonoma State Seawolves', wins: 5, losses: 7 },
        { name: 'San Francisco State Gators', wins: 3, losses: 9 },
      ],
      CIAA: [
        { name: 'Virginia State Trojans', wins: 10, losses: 2 },
        { name: 'Fayetteville State Broncos', wins: 9, losses: 3 },
        { name: 'Winston-Salem State Rams', wins: 8, losses: 4 },
        { name: 'Johnson C. Smith Golden Bulls', wins: 6, losses: 6 },
        { name: 'Bowie State Bulldogs', wins: 10, losses: 1, ranking: 6 },
        { name: 'Livingstone Blue Bears', wins: 4, losses: 8 },
        { name: 'Elizabeth City State Vikings', wins: 3, losses: 9 },
      ],
      SIAC: [
        { name: 'Fort Valley State Wildcats', wins: 9, losses: 2 },
        { name: 'Miles College Golden Bears', wins: 8, losses: 3 },
        { name: 'Albany State Golden Rams', wins: 10, losses: 1, ranking: 7 },
        { name: 'Tuskegee Golden Tigers', wins: 7, losses: 4 },
        { name: 'Benedict Tigers', wins: 5, losses: 6 },
        { name: 'Clark Atlanta Panthers', wins: 3, losses: 8 },
      ],
    },
    baseball: {
      'Peach Belt': [
        { name: 'Columbus State Cougars', wins: 38, losses: 18 },
        { name: 'Georgia College Bobcats', wins: 32, losses: 22 },
        { name: 'Flagler Saints', wins: 35, losses: 20 },
        { name: 'Augusta GreenJackets', wins: 28, losses: 26 },
        { name: 'North Georgia Nighthawks', wins: 30, losses: 24 },
        { name: 'USC Aiken Pacers', wins: 25, losses: 29 },
      ],
      SSC: [
        { name: 'Union (TN) Bulldogs', wins: 40, losses: 16 },
        { name: 'Cumberland Phoenix', wins: 36, losses: 18 },
        { name: 'Lindsey Wilson Blue Raiders', wins: 30, losses: 24 },
        { name: 'Campbellsville Tigers', wins: 28, losses: 26 },
        { name: 'Georgetown (KY) Tigers', wins: 32, losses: 22 },
        { name: 'Mid-Continent Cardinals', wins: 22, losses: 32 },
      ],
      GLIAC: [
        { name: 'Grand Valley State Lakers', wins: 35, losses: 18 },
        { name: 'Northwood Timberwolves', wins: 30, losses: 22 },
        { name: 'Saginaw Valley State Cardinals', wins: 28, losses: 24 },
        { name: 'Michigan Tech Huskies', wins: 25, losses: 28 },
        { name: 'Ferris State Bulldogs', wins: 33, losses: 20 },
        { name: 'Lake Superior State Lakers', wins: 20, losses: 33 },
      ],
      MIAA: [
        { name: 'Findlay Oilers', wins: 38, losses: 15 },
        { name: 'Ashland Eagles', wins: 34, losses: 18 },
        { name: 'Tiffin Dragons', wins: 30, losses: 22 },
        { name: 'Hillsdale Chargers', wins: 28, losses: 25 },
        { name: 'Ohio Dominican Panthers', wins: 24, losses: 29 },
      ],
      'Lone Star': [
        { name: 'West Texas A&M Buffaloes', wins: 42, losses: 16 },
        { name: 'Angelo State Rams', wins: 38, losses: 19 },
        { name: 'Tarleton State Texans', wins: 35, losses: 22 },
        { name: 'Midwestern State Mustangs', wins: 30, losses: 25 },
        { name: 'UT Permian Basin Falcons', wins: 25, losses: 30 },
      ],
      CCAA: [
        { name: 'Cal Poly Pomona Broncos', wins: 36, losses: 18 },
        { name: 'Sonoma State Seawolves', wins: 30, losses: 24 },
        { name: 'Chico State Wildcats', wins: 28, losses: 26 },
        { name: 'Dominguez Hills Toros', wins: 25, losses: 29 },
        { name: 'San Francisco State Gators', wins: 22, losses: 32 },
      ],
    },
    hockey: {
      'NE-10': [
        { name: 'American International Yellow Jackets', wins: 20, losses: 10 },
        { name: 'Post Eagles', wins: 18, losses: 12 },
        { name: 'Stonehill Skyhawks', wins: 15, losses: 15 },
        { name: 'Southern New Hampshire Penmen', wins: 12, losses: 18 },
        { name: 'New Haven Chargers', wins: 14, losses: 16 },
      ],
    },
    volleyball: {
      GLIAC: [
        { name: 'Grand Valley State Lakers', wins: 28, losses: 6 },
        { name: 'Ferris State Bulldogs', wins: 24, losses: 9 },
        { name: 'Michigan Tech Huskies', wins: 22, losses: 11 },
        { name: 'Saginaw Valley State Cardinals', wins: 18, losses: 15 },
        { name: 'Northwood Timberwolves', wins: 15, losses: 18 },
        { name: 'Wayne State Warriors', wins: 12, losses: 21 },
      ],
      MIAA: [
        { name: 'Ashland Eagles', wins: 26, losses: 7 },
        { name: 'Findlay Oilers', wins: 22, losses: 11 },
        { name: 'Hillsdale Chargers', wins: 20, losses: 13 },
        { name: 'Tiffin Dragons', wins: 16, losses: 17 },
        { name: 'Ohio Dominican Panthers', wins: 13, losses: 20 },
      ],
      CCAA: [
        { name: 'Cal Poly Pomona Broncos', wins: 25, losses: 8 },
        { name: 'Chico State Wildcats', wins: 22, losses: 11 },
        { name: 'Sonoma State Seawolves', wins: 18, losses: 15 },
        { name: 'Dominguez Hills Toros', wins: 15, losses: 18 },
        { name: 'San Francisco State Gators', wins: 12, losses: 21 },
      ],
      GNAC: [
        { name: 'Azusa Pacific Cougars', wins: 24, losses: 9 },
        { name: 'California Baptist Lancers', wins: 22, losses: 11 },
        { name: 'Humboldt State Lumberjacks', wins: 18, losses: 15 },
        { name: 'Chico State Wildcats', wins: 20, losses: 13 },
        { name: 'Sonoma State Seawolves', wins: 15, losses: 18 },
      ],
      'Lone Star': [
        { name: 'West Texas A&M Buffaloes', wins: 26, losses: 7 },
        { name: 'Angelo State Rams', wins: 22, losses: 11 },
        { name: 'Tarleton State Texans', wins: 19, losses: 14 },
        { name: 'Midwestern State Mustangs', wins: 16, losses: 17 },
        { name: 'UT Permian Basin Falcons', wins: 12, losses: 21 },
      ],
    },
    tennis: {
      'Peach Belt': [
        { name: 'Columbus State Cougars', wins: 16, losses: 6 },
        { name: 'Georgia College Bobcats', wins: 14, losses: 8 },
        { name: 'Flagler Saints', wins: 13, losses: 9 },
        { name: 'North Georgia Nighthawks', wins: 11, losses: 11 },
        { name: 'Augusta GreenJackets', wins: 9, losses: 13 },
      ],
      SSC: [
        { name: 'Union (TN) Bulldogs', wins: 15, losses: 7 },
        { name: 'Cumberland Phoenix', wins: 13, losses: 9 },
        { name: 'Georgetown (KY) Tigers', wins: 11, losses: 11 },
        { name: 'Lindsey Wilson Blue Raiders', wins: 9, losses: 13 },
      ],
      GLIAC: [
        { name: 'Grand Valley State Lakers', wins: 18, losses: 5 },
        { name: 'Ferris State Bulldogs', wins: 14, losses: 8 },
        { name: 'Northwood Timberwolves', wins: 12, losses: 11 },
        { name: 'Saginaw Valley State Cardinals', wins: 10, losses: 13 },
      ],
      'Gulf South': [
        { name: 'Valdosta State Blazers', wins: 15, losses: 7 },
        { name: 'West Alabama Tigers', wins: 13, losses: 9 },
        { name: 'Delta State Statesmen', wins: 11, losses: 11 },
        { name: 'North Alabama Lions', wins: 9, losses: 13 },
        { name: 'Mississippi College Choctaws', wins: 8, losses: 14 },
      ],
    },
    whockey: {
      'NE-10': [
        { name: 'Post Eagles', wins: 18, losses: 10 },
        { name: 'Stonehill Skyhawks', wins: 15, losses: 13 },
        { name: 'Southern New Hampshire Penmen', wins: 12, losses: 16 },
        { name: 'New Haven Chargers', wins: 14, losses: 14 },
      ],
    },
  },
  D3: {
    football: {
      WIAC: [
        { name: 'Wisconsin-Whitewater Warhawks', wins: 15, losses: 1, ranking: 1 },
        { name: 'Wisconsin-Oshkosh Titans', wins: 12, losses: 3 },
        { name: 'Wisconsin-La Crosse Eagles', wins: 10, losses: 4 },
        { name: 'Wisconsin-Platteville Pioneers', wins: 9, losses: 5 },
        { name: 'Wisconsin-Stevens Point Pointers', wins: 7, losses: 6 },
        { name: 'Eau Claire Blugolds', wins: 6, losses: 7 },
      ],
      MIAC: [
        { name: 'St. John\'s (MN) Johnnies', wins: 14, losses: 1, ranking: 2 },
        { name: 'Bethel Royals', wins: 11, losses: 3 },
        { name: 'Carleton Knights', wins: 9, losses: 4 },
        { name: 'St. Olaf Oles', wins: 8, losses: 5 },
        { name: 'Gustavus Adolphus Gusties', wins: 7, losses: 6 },
        { name: 'Augsburg Auggies', wins: 5, losses: 8 },
      ],
      OAC: [
        { name: 'Mount Union Raiders', wins: 15, losses: 0, ranking: 1 },
        { name: 'Marietta Pioneers', wins: 10, losses: 3 },
        { name: 'Wilmington Quakers', wins: 9, losses: 4 },
        { name: 'Ohio Northern Polar Bears', wins: 8, losses: 5 },
        { name: 'Otterbein Cardinals', wins: 7, losses: 6 },
        { name: 'Capital Crusaders', wins: 5, losses: 8 },
        { name: 'Heidelberg Student Princes', wins: 4, losses: 9 },
      ],
      NESCAC: [
        { name: 'Amherst Mammoths', wins: 10, losses: 1, ranking: 4 },
        { name: 'Middlebury Panthers', wins: 9, losses: 2 },
        { name: 'Trinity Bantams', wins: 8, losses: 3 },
        { name: 'Tufts Jumbos', wins: 7, losses: 4 },
        { name: 'Williams Ephs', wins: 6, losses: 5 },
        { name: 'Bowdoin Polar Bears', wins: 5, losses: 6 },
        { name: 'Wesleyan Cardinals', wins: 4, losses: 7 },
        { name: 'Colby White Mules', wins: 3, losses: 8 },
      ],
      Centennial: [
        { name: 'Muhlenberg Mules', wins: 10, losses: 1, ranking: 5 },
        { name: 'Johns Hopkins Blue Jays', wins: 9, losses: 2 },
        { name: 'Dickinson Red Devils', wins: 7, losses: 4 },
        { name: 'Ursinus Bears', wins: 6, losses: 5 },
        { name: 'Gettysburg Bullets', wins: 5, losses: 6 },
        { name: 'Franklin & Marshall Diplomats', wins: 4, losses: 7 },
      ],
      'Liberty League': [
        { name: 'RPI Engineers', wins: 9, losses: 2 },
        { name: 'Ithaca Bombers', wins: 8, losses: 3 },
        { name: 'Hobart Statesmen', wins: 7, losses: 4 },
        { name: 'Union Dutchmen', wins: 6, losses: 5 },
        { name: 'Rochester Yellowjackets', wins: 5, losses: 6 },
        { name: 'St. Lawrence Saints', wins: 4, losses: 7 },
        { name: 'Hartwick Hawks', wins: 3, losses: 8 },
      ],
    },
    baseball: {
      WIAC: [
        { name: 'Wisconsin-Whitewater Warhawks', wins: 38, losses: 10 },
        { name: 'Wisconsin-Oshkosh Titans', wins: 32, losses: 14 },
        { name: 'Wisconsin-La Crosse Eagles', wins: 28, losses: 18 },
        { name: 'Eau Claire Blugolds', wins: 25, losses: 21 },
        { name: 'Wisconsin-Stevens Point Pointers', wins: 22, losses: 24 },
      ],
      MIAC: [
        { name: 'Bethel Royals', wins: 30, losses: 14 },
        { name: 'St. John\'s (MN) Johnnies', wins: 28, losses: 16 },
        { name: 'Carleton Knights', wins: 24, losses: 20 },
        { name: 'St. Olaf Oles', wins: 22, losses: 22 },
        { name: 'Gustavus Adolphus Gusties', wins: 20, losses: 24 },
      ],
      OAC: [
        { name: 'Mount Union Raiders', wins: 40, losses: 12 },
        { name: 'Marietta Pioneers', wins: 35, losses: 16 },
        { name: 'Otterbein Cardinals', wins: 30, losses: 20 },
        { name: 'Ohio Northern Polar Bears', wins: 26, losses: 24 },
        { name: 'Capital Crusaders', wins: 22, losses: 28 },
      ],
      NESCAC: [
        { name: 'Middlebury Panthers', wins: 28, losses: 14 },
        { name: 'Amherst Mammoths', wins: 24, losses: 18 },
        { name: 'Williams Ephs', wins: 22, losses: 20 },
        { name: 'Trinity Bantams', wins: 20, losses: 22 },
        { name: 'Tufts Jumbos', wins: 18, losses: 24 },
      ],
      Centennial: [
        { name: 'Johns Hopkins Blue Jays', wins: 35, losses: 13 },
        { name: 'Muhlenberg Mules', wins: 30, losses: 18 },
        { name: 'Dickinson Red Devils', wins: 26, losses: 22 },
        { name: 'Ursinus Bears', wins: 22, losses: 26 },
        { name: 'Gettysburg Bullets', wins: 18, losses: 30 },
      ],
    },
    hockey: {
      NESCAC: [
        { name: 'Middlebury Panthers', wins: 22, losses: 6, ranking: 1 },
        { name: 'Amherst Mammoths', wins: 18, losses: 10 },
        { name: 'Williams Ephs', wins: 16, losses: 12 },
        { name: 'Trinity Bantams', wins: 14, losses: 14 },
        { name: 'Bowdoin Polar Bears', wins: 12, losses: 16 },
        { name: 'Colby White Mules', wins: 10, losses: 18 },
      ],
      MIAC: [
        { name: 'St. John\'s (MN) Johnnies', wins: 20, losses: 8 },
        { name: 'Bethel Royals', wins: 18, losses: 10 },
        { name: 'Augsburg Auggies', wins: 16, losses: 12 },
        { name: 'St. Olaf Oles', wins: 14, losses: 14 },
        { name: 'Gustavus Adolphus Gusties', wins: 12, losses: 16 },
      ],
      NCHA: [
        { name: 'Wisconsin-Stevens Point Pointers', wins: 22, losses: 6 },
        { name: 'Adrian Bulldogs', wins: 20, losses: 8 },
        { name: 'Lake Forest Foresters', wins: 16, losses: 12 },
        { name: 'Marian Sabres', wins: 14, losses: 14 },
        { name: 'Lawrence Vikings', wins: 10, losses: 18 },
      ],
    },
    volleyball: {
      WIAC: [
        { name: 'Wisconsin-Stevens Point Pointers', wins: 28, losses: 5 },
        { name: 'Wisconsin-Whitewater Warhawks', wins: 24, losses: 9 },
        { name: 'Wisconsin-Eau Claire Blugolds', wins: 20, losses: 13 },
        { name: 'Wisconsin-Oshkosh Titans', wins: 18, losses: 15 },
        { name: 'Wisconsin-La Crosse Eagles', wins: 15, losses: 18 },
      ],
      MIAC: [
        { name: 'Bethel Royals', wins: 26, losses: 7 },
        { name: 'St. Catherine Saints', wins: 22, losses: 11 },
        { name: 'Gustavus Adolphus Gusties', wins: 18, losses: 15 },
        { name: 'St. Olaf Oles', wins: 16, losses: 17 },
        { name: 'Carleton Knights', wins: 14, losses: 19 },
      ],
      SCIAC: [
        { name: 'Claremont-Mudd-Scripps Stags', wins: 26, losses: 6 },
        { name: 'Cal Lutheran Regals', wins: 22, losses: 10 },
        { name: 'Redlands Bulldogs', wins: 18, losses: 14 },
        { name: 'Whittier Poets', wins: 15, losses: 17 },
        { name: 'La Verne Leopards', wins: 13, losses: 19 },
      ],
      NESCAC: [
        { name: 'Wellesley Blue', wins: 24, losses: 8 },
        { name: 'Amherst Mammoths', wins: 20, losses: 12 },
        { name: 'Trinity Bantams', wins: 18, losses: 14 },
        { name: 'Williams Ephs', wins: 16, losses: 16 },
        { name: 'Middlebury Panthers', wins: 14, losses: 18 },
      ],
      UAA: [
        { name: 'NYU Violets', wins: 24, losses: 8 },
        { name: 'Carnegie Mellon Tartans', wins: 20, losses: 12 },
        { name: 'Rochester Yellowjackets', wins: 18, losses: 14 },
        { name: 'Case Western Spartans', wins: 15, losses: 17 },
        { name: 'Emory Eagles', wins: 22, losses: 10 },
        { name: 'Washington (MO) Bears', wins: 16, losses: 16 },
      ],
    },
    tennis: {
      NESCAC: [
        { name: 'Middlebury Panthers', wins: 20, losses: 4 },
        { name: 'Amherst Mammoths', wins: 18, losses: 6 },
        { name: 'Williams Ephs', wins: 16, losses: 8 },
        { name: 'Trinity Bantams', wins: 14, losses: 10 },
        { name: 'Bowdoin Polar Bears', wins: 12, losses: 12 },
        { name: 'Colby White Mules', wins: 10, losses: 14 },
      ],
      UAA: [
        { name: 'Emory Eagles', wins: 22, losses: 3 },
        { name: 'Carnegie Mellon Tartans', wins: 18, losses: 7 },
        { name: 'NYU Violets', wins: 16, losses: 9 },
        { name: 'Case Western Spartans', wins: 14, losses: 11 },
        { name: 'Washington (MO) Bears', wins: 15, losses: 10 },
      ],
      SCIAC: [
        { name: 'Claremont-Mudd-Scripps Stags', wins: 19, losses: 5 },
        { name: 'Cal Lutheran Regals', wins: 16, losses: 8 },
        { name: 'Redlands Bulldogs', wins: 14, losses: 10 },
        { name: 'Whittier Poets', wins: 12, losses: 12 },
        { name: 'La Verne Leopards', wins: 10, losses: 14 },
      ],
      Centennial: [
        { name: 'Johns Hopkins Blue Jays', wins: 20, losses: 4 },
        { name: 'Muhlenberg Mules', wins: 17, losses: 7 },
        { name: 'Ursinus Bears', wins: 15, losses: 9 },
        { name: 'Dickinson Red Devils', wins: 13, losses: 11 },
        { name: 'Gettysburg Bullets', wins: 11, losses: 13 },
      ],
    },
    whockey: {
      NESCAC: [
        { name: 'Middlebury Panthers', wins: 20, losses: 5, ranking: 1 },
        { name: 'Amherst Mammoths', wins: 18, losses: 7 },
        { name: 'Trinity Bantams', wins: 16, losses: 9 },
        { name: 'Bowdoin Polar Bears', wins: 14, losses: 11 },
        { name: 'Colby White Mules', wins: 10, losses: 15 },
        { name: 'Williams Ephs', wins: 12, losses: 13 },
      ],
      MIAC: [
        { name: 'Bethel Royals', wins: 22, losses: 6 },
        { name: 'Gustavus Adolphus Gusties', wins: 18, losses: 10 },
        { name: 'St. Catherine Saints', wins: 16, losses: 12 },
        { name: 'Augsburg Auggies', wins: 14, losses: 14 },
        { name: 'St. Olaf Oles', wins: 12, losses: 16 },
      ],
      NCHA: [
        { name: 'Adrian Bulldogs', wins: 20, losses: 8 },
        { name: 'Lake Forest Foresters', wins: 17, losses: 11 },
        { name: 'Marian Sabres', wins: 14, losses: 14 },
        { name: 'Wisconsin-Stevens Point Pointers', wins: 18, losses: 10 },
        { name: 'Lawrence Vikings', wins: 10, losses: 18 },
      ],
    },
  },
  NAIA: {
    football: {
      KCAC: [
        { name: 'Ottawa Braves', wins: 11, losses: 2 },
        { name: 'Kansas Wesleyan Coyotes', wins: 10, losses: 3 },
        { name: 'Bethel (KS) Threshers', wins: 9, losses: 4 },
        { name: 'Sterling Warriors', wins: 8, losses: 5 },
        { name: 'Southwestern College Moundbuilders', wins: 7, losses: 6 },
        { name: 'Friends Falcons', wins: 5, losses: 8 },
        { name: 'McPherson Bulldogs', wins: 4, losses: 9 },
        { name: 'Tabor Bluejays', wins: 6, losses: 7 },
      ],
      HAAC: [
        { name: 'Missouri Valley Vikings', wins: 11, losses: 1, ranking: 1 },
        { name: 'Evangel Crusaders', wins: 10, losses: 2 },
        { name: 'William Penn Statesmen', wins: 9, losses: 3 },
        { name: 'Benedictine (KS) Ravens', wins: 8, losses: 4 },
        { name: 'Central Methodist Eagles', wins: 7, losses: 5 },
        { name: 'Graceland Yellow Jackets', wins: 6, losses: 6 },
        { name: 'Iowa Wesleyan Tigers', wins: 4, losses: 8 },
      ],
      MSC: [
        { name: 'Marian Knights', wins: 12, losses: 1, ranking: 2 },
        { name: 'Indiana Wesleyan Wildcats', wins: 10, losses: 3 },
        { name: 'Bethel (IN) Pilots', wins: 8, losses: 5 },
        { name: 'Goshen Maple Leafs', wins: 7, losses: 6 },
        { name: 'Taylor Trojans', wins: 6, losses: 7 },
        { name: 'Huntington Foresters', wins: 5, losses: 8 },
      ],
      GPAC: [
        { name: 'Northwestern (IA) Red Raiders', wins: 11, losses: 2, ranking: 3 },
        { name: 'Morningside Mustangs', wins: 10, losses: 3 },
        { name: 'Dordt Defenders', wins: 9, losses: 4 },
        { name: 'Briar Cliff Chargers', wins: 7, losses: 6 },
        { name: 'Dakota Wesleyan Tigers', wins: 6, losses: 7 },
        { name: 'Doane Tigers', wins: 8, losses: 5 },
      ],
      Frontier: [
        { name: 'Montana Western Bulldogs', wins: 10, losses: 2 },
        { name: 'Carroll Saints', wins: 9, losses: 3 },
        { name: 'Southern Oregon Raiders', wins: 8, losses: 4 },
        { name: 'College of Idaho Yotes', wins: 7, losses: 5 },
        { name: 'Montana Tech Orediggers', wins: 6, losses: 6 },
        { name: 'Rocky Mountain Bears', wins: 4, losses: 8 },
      ],
    },
    baseball: {
      KCAC: [
        { name: 'Ottawa Braves', wins: 35, losses: 18 },
        { name: 'Kansas Wesleyan Coyotes', wins: 30, losses: 22 },
        { name: 'Bethel (KS) Threshers', wins: 28, losses: 24 },
        { name: 'Sterling Warriors', wins: 25, losses: 27 },
        { name: 'Southwestern College Moundbuilders', wins: 22, losses: 30 },
        { name: 'Friends Falcons', wins: 20, losses: 32 },
      ],
      HAAC: [
        { name: 'William Penn Statesmen', wins: 38, losses: 16 },
        { name: 'Central Methodist Eagles', wins: 32, losses: 21 },
        { name: 'Evangel Crusaders', wins: 29, losses: 24 },
        { name: 'Benedictine (KS) Ravens', wins: 26, losses: 27 },
        { name: 'Graceland Yellow Jackets', wins: 22, losses: 31 },
      ],
      MSC: [
        { name: 'Indiana Wesleyan Wildcats', wins: 40, losses: 14 },
        { name: 'Marian Knights', wins: 35, losses: 18 },
        { name: 'Bethel (IN) Pilots', wins: 30, losses: 23 },
        { name: 'Goshen Maple Leafs', wins: 26, losses: 27 },
        { name: 'Taylor Trojans', wins: 22, losses: 31 },
      ],
      GPAC: [
        { name: 'Morningside Mustangs', wins: 42, losses: 15 },
        { name: 'Northwestern (IA) Red Raiders', wins: 38, losses: 19 },
        { name: 'Dordt Defenders', wins: 33, losses: 24 },
        { name: 'Doane Tigers', wins: 29, losses: 28 },
        { name: 'Briar Cliff Chargers', wins: 25, losses: 32 },
      ],
      Chicagoland: [
        { name: 'St. Francis (IL) Fighting Saints', wins: 34, losses: 20 },
        { name: 'Cardinal Stritch Wolves', wins: 28, losses: 26 },
        { name: 'Robert Morris (IL) Eagles', wins: 25, losses: 29 },
        { name: 'Dominican (IL) Stars', wins: 22, losses: 32 },
        { name: 'Calumet College Crimson Wave', wins: 18, losses: 36 },
      ],
    },
    hockey: {
      'ACHA NAIA': [
        { name: 'Minot State Beavers', wins: 18, losses: 8 },
        { name: 'Providence (MT) Argonauts', wins: 15, losses: 11 },
        { name: 'Concordia (MI) Cardinals', wins: 12, losses: 14 },
        { name: 'Northland College Lumberjacks', wins: 14, losses: 12 },
      ],
    },
    volleyball: {
      KCAC: [
        { name: 'Kansas Wesleyan Coyotes', wins: 26, losses: 6 },
        { name: 'Ottawa Braves', wins: 22, losses: 10 },
        { name: 'Bethel (KS) Threshers', wins: 20, losses: 12 },
        { name: 'Sterling Warriors', wins: 18, losses: 14 },
        { name: 'Southwestern College Moundbuilders', wins: 15, losses: 17 },
        { name: 'Friends Falcons', wins: 12, losses: 20 },
      ],
      HAAC: [
        { name: 'Benedictine (KS) Ravens', wins: 28, losses: 5 },
        { name: 'William Penn Statesmen', wins: 24, losses: 9 },
        { name: 'Evangel Crusaders', wins: 20, losses: 13 },
        { name: 'Central Methodist Eagles', wins: 17, losses: 16 },
        { name: 'Graceland Yellow Jackets', wins: 14, losses: 19 },
      ],
      GPAC: [
        { name: 'Dordt Defenders', wins: 30, losses: 4 },
        { name: 'Morningside Mustangs', wins: 26, losses: 7 },
        { name: 'Northwestern (IA) Red Raiders', wins: 22, losses: 11 },
        { name: 'Doane Tigers', wins: 18, losses: 15 },
        { name: 'Briar Cliff Chargers', wins: 14, losses: 19 },
      ],
      MSC: [
        { name: 'Indiana Wesleyan Wildcats', wins: 28, losses: 6 },
        { name: 'Bethel (IN) Pilots', wins: 24, losses: 10 },
        { name: 'Taylor Trojans', wins: 20, losses: 14 },
        { name: 'Marian Knights', wins: 18, losses: 16 },
        { name: 'Goshen Maple Leafs', wins: 15, losses: 19 },
      ],
    },
    tennis: {
      KCAC: [
        { name: 'Kansas Wesleyan Coyotes', wins: 16, losses: 5 },
        { name: 'Ottawa Braves', wins: 14, losses: 7 },
        { name: 'Bethel (KS) Threshers', wins: 12, losses: 9 },
        { name: 'Sterling Warriors', wins: 10, losses: 11 },
        { name: 'Friends Falcons', wins: 8, losses: 13 },
      ],
      HAAC: [
        { name: 'William Penn Statesmen', wins: 17, losses: 4 },
        { name: 'Central Methodist Eagles', wins: 14, losses: 7 },
        { name: 'Evangel Crusaders', wins: 12, losses: 9 },
        { name: 'Benedictine (KS) Ravens', wins: 10, losses: 11 },
      ],
      GPAC: [
        { name: 'Morningside Mustangs', wins: 18, losses: 4 },
        { name: 'Dordt Defenders', wins: 15, losses: 7 },
        { name: 'Northwestern (IA) Red Raiders', wins: 13, losses: 9 },
        { name: 'Doane Tigers', wins: 11, losses: 11 },
      ],
      MSC: [
        { name: 'Indiana Wesleyan Wildcats', wins: 16, losses: 5 },
        { name: 'Marian Knights', wins: 13, losses: 8 },
        { name: 'Taylor Trojans', wins: 11, losses: 10 },
        { name: 'Bethel (IN) Pilots', wins: 9, losses: 12 },
      ],
    },
    whockey: {
      'ACHA NAIA': [
        { name: 'Minot State Beavers', wins: 16, losses: 10 },
        { name: 'Concordia (MI) Cardinals', wins: 13, losses: 13 },
        { name: 'Providence (MT) Argonauts', wins: 10, losses: 16 },
      ],
    },
  },
  JUCO: {
    football: {
      KJCCC: [
        { name: 'Hutchinson Blue Dragons', wins: 12, losses: 1, ranking: 1 },
        { name: 'Garden City Broncbusters', wins: 10, losses: 3 },
        { name: 'Iowa Central Tritons', wins: 9, losses: 2 },
        { name: 'Butler Grizzlies', wins: 8, losses: 4 },
        { name: 'Coffeyville Red Ravens', wins: 7, losses: 5 },
        { name: 'Fort Scott Greyhounds', wins: 6, losses: 6 },
        { name: 'Pratt Beavers', wins: 4, losses: 8 },
        { name: 'Cloud County Thunderbirds', wins: 5, losses: 7 },
      ],
      MACJC: [
        { name: 'Northwest Mississippi Rangers', wins: 11, losses: 1, ranking: 2 },
        { name: 'Itawamba Indians', wins: 9, losses: 3 },
        { name: 'Jones County Bobcats', wins: 8, losses: 4 },
        { name: 'Coahoma Comets', wins: 7, losses: 5 },
        { name: 'Holmes Bulldogs', wins: 6, losses: 6 },
        { name: 'Pearl River Wildcats', wins: 5, losses: 7 },
        { name: 'East Mississippi Lions', wins: 10, losses: 1, ranking: 3 },
        { name: 'Southwest Mississippi Bears', wins: 4, losses: 8 },
      ],
      SWJCFC: [
        { name: 'Blinn Buccaneers', wins: 11, losses: 2, ranking: 4 },
        { name: 'Trinity Valley Cardinals', wins: 10, losses: 2 },
        { name: 'Navarro Bulldogs', wins: 9, losses: 3 },
        { name: 'Kilgore Rangers', wins: 8, losses: 4 },
        { name: 'Tyler Apaches', wins: 7, losses: 5 },
        { name: 'Panola Ponies', wins: 6, losses: 6 },
        { name: 'Cisco Wranglers', wins: 5, losses: 7 },
      ],
      NJCAA: [
        { name: 'Iowa Western Reivers', wins: 11, losses: 1, ranking: 5 },
        { name: 'Lackawanna Falcons', wins: 10, losses: 2, ranking: 6 },
        { name: 'Snow Badgers', wins: 9, losses: 3 },
        { name: 'Arizona Western Matadors', wins: 8, losses: 4 },
        { name: 'Georgia Military Bulldogs', wins: 7, losses: 5 },
        { name: 'Hinds Eagles', wins: 6, losses: 6 },
        { name: 'Mississippi Gulf Coast Bulldogs', wins: 9, losses: 2 },
      ],
    },
    baseball: {
      'NJCAA DI': [
        { name: 'Weatherford Coyotes', wins: 45, losses: 14, ranking: 1 },
        { name: 'McLennan Highlanders', wins: 40, losses: 18 },
        { name: 'Texarkana Eagles', wins: 35, losses: 22 },
        { name: 'Connors Cowboys', wins: 32, losses: 25 },
        { name: 'Seminole State Trojans', wins: 30, losses: 27 },
        { name: 'Arkansas Baptist Bears', wins: 28, losses: 29 },
        { name: 'Wabash Valley Warriors', wins: 36, losses: 20 },
        { name: 'Jefferson (MO) Vikings', wins: 26, losses: 31 },
      ],
      'NJCAA DII': [
        { name: 'Wallace State Governors', wins: 40, losses: 13 },
        { name: 'Snead State Parsons', wins: 35, losses: 18 },
        { name: 'Southern Union Bison', wins: 32, losses: 21 },
        { name: 'Lurleen B. Wallace Bulldogs', wins: 28, losses: 25 },
        { name: 'Bevill State Bears', wins: 25, losses: 28 },
        { name: 'Calhoun Eagles', wins: 30, losses: 23 },
      ],
      CCCAA: [
        { name: 'Fresno City Rams', wins: 38, losses: 16 },
        { name: 'Modesto Pirates', wins: 33, losses: 20 },
        { name: 'San Joaquin Delta Mustangs', wins: 30, losses: 24 },
        { name: 'Merced Blue Devils', wins: 28, losses: 26 },
        { name: 'Reedley Tigers', wins: 25, losses: 29 },
        { name: 'Porterville Pirates', wins: 22, losses: 32 },
      ],
      NWAC: [
        { name: 'Yakima Valley Yaks', wins: 34, losses: 18 },
        { name: 'Wenatchee Valley Knights', wins: 30, losses: 22 },
        { name: 'Walla Walla Warriors', wins: 28, losses: 24 },
        { name: 'Columbia Basin Hawks', wins: 25, losses: 27 },
        { name: 'Lower Columbia Red Devils', wins: 22, losses: 30 },
      ],
    },
    hockey: {
      'NJCAA Hockey': [
        { name: 'Rochester Community Yellowjackets', wins: 18, losses: 8 },
        { name: 'Hibbing-Chisholm Blue Jays', wins: 16, losses: 10 },
        { name: 'Bismarck Mystics', wins: 14, losses: 12 },
        { name: 'Saint Paul College Bulldogs', wins: 12, losses: 14 },
        { name: 'Mesabi Range Cardinals', wins: 10, losses: 16 },
      ],
    },
    volleyball: {
      'NJCAA DI': [
        { name: 'Tyler Apaches', wins: 28, losses: 5 },
        { name: 'Iowa Western Reivers', wins: 24, losses: 9 },
        { name: 'Wabash Valley Warriors', wins: 22, losses: 11 },
        { name: 'Cloud County Thunderbirds', wins: 18, losses: 15 },
        { name: 'Barton County Cougars', wins: 15, losses: 18 },
        { name: 'Coffeyville Red Ravens', wins: 12, losses: 21 },
      ],
      'NJCAA DII': [
        { name: 'Wallace State Governors', wins: 25, losses: 8 },
        { name: 'Snead State Parsons', wins: 22, losses: 11 },
        { name: 'Calhoun Eagles', wins: 18, losses: 15 },
        { name: 'Bevill State Bears', wins: 15, losses: 18 },
        { name: 'Southern Union Bison', wins: 12, losses: 21 },
      ],
      CCCAA: [
        { name: 'Fresno City Rams', wins: 26, losses: 7 },
        { name: 'Modesto Pirates', wins: 22, losses: 11 },
        { name: 'Merced Blue Devils', wins: 18, losses: 15 },
        { name: 'San Joaquin Delta Mustangs', wins: 15, losses: 18 },
        { name: 'Reedley Tigers', wins: 12, losses: 21 },
      ],
    },
    tennis: {
      NJCAA: [
        { name: 'Tyler Apaches', wins: 14, losses: 6 },
        { name: 'Wabash Valley Warriors', wins: 12, losses: 8 },
        { name: 'Iowa Western Reivers', wins: 10, losses: 10 },
        { name: 'Barton County Cougars', wins: 8, losses: 12 },
        { name: 'Cloud County Thunderbirds', wins: 6, losses: 14 },
      ],
      CCCAA: [
        { name: 'Fresno City Rams', wins: 16, losses: 5 },
        { name: 'Modesto Pirates', wins: 13, losses: 8 },
        { name: 'San Joaquin Delta Mustangs', wins: 11, losses: 10 },
        { name: 'Merced Blue Devils', wins: 9, losses: 12 },
        { name: 'Reedley Tigers', wins: 7, losses: 14 },
      ],
    },
    whockey: {
      'NJCAA Hockey': [
        { name: 'Rochester Community Yellowjackets', wins: 15, losses: 11 },
        { name: 'Bismarck Mystics', wins: 12, losses: 14 },
        { name: 'Saint Paul College Bulldogs', wins: 10, losses: 16 },
        { name: 'Mesabi Range Cardinals', wins: 8, losses: 18 },
      ],
    },
  },
};

export function generateTeams(tier, sport, conference) {
  const teamsData = REAL_TEAMS[tier]?.[sport]?.[conference];
  if (!teamsData) return [];

  return teamsData.map((team, i) => {
    const seed = `${tier}-${sport}-${conference}-${i}`;
    let hash = 0;
    for (let c of seed) { hash = ((hash << 5) - hash) + c.charCodeAt(0); hash |= 0; }

    const confW = Math.min(team.wins, Math.abs(hash % (team.wins + 1)));
    const confL = Math.min(team.losses, Math.abs((hash + 1) % (team.losses + 1)));
    const streakWin = Math.abs(hash % 2) === 0;
    const streakLen = 1 + Math.abs(hash % 4);

    return {
      id: `${tier}-${sport}-${conference}-${i}`,
      name: team.name,
      conference,
      tier,
      sport,
      wins: team.wins,
      losses: team.losses,
      winPct: team.wins + team.losses > 0
        ? (team.wins / (team.wins + team.losses)).toFixed(3)
        : '.000',
      confWins: confW,
      confLosses: confL,
      streak: streakWin ? `W${streakLen}` : `L${streakLen}`,
      ranking: team.ranking || null,
    };
  });
}

export function generatePlayers(team) {
  // Try real players first
  const realPlayers = getPlayersForTeam(team.tier, team.sport, team.name);
  if (realPlayers && realPlayers.length > 0) {
    return realPlayers.map((p, i) => ({
      id: `${team.id}-player-${i}`,
      ...p,
      team: team.name,
      teamId: team.id,
      tier: team.tier,
      sport: team.sport,
    }));
  }

  // Fallback: generated players
  const firstNames = ['Marcus', 'James', 'Tyrell', 'Brandon', 'Kyle', 'Darius', 'Jake', 'Caleb', 'Xavier', 'Devon', 'Alejandro', 'Noah', 'Ethan', 'Jackson', 'Mason', 'Chase', 'Tyler', 'Bryce', 'Logan', 'Jordan'];
  const lastNames = ['Williams', 'Johnson', 'Smith', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark'];
  const positions = {
    football: ['QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'CB', 'S', 'K'],
    baseball: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF', 'DH'],
    hockey: ['C', 'LW', 'RW', 'D', 'G'],
    volleyball: ['S', 'OH', 'MB', 'OPP', 'L', 'DS'],
    tennis: ['Singles #1', 'Singles #2', 'Singles #3', 'Doubles #1', 'Doubles #2'],
    whockey: ['C', 'LW', 'RW', 'D', 'G'],
  };

  let hash = 0;
  for (let c of team.id) { hash = ((hash << 5) - hash) + c.charCodeAt(0); hash |= 0; }

  const pos = positions[team.sport] || positions.football;
  const players = [];
  for (let i = 0; i < 15; i++) {
    const fnIdx = Math.abs((hash + i * 7) % firstNames.length);
    const lnIdx = Math.abs((hash + i * 11) % lastNames.length);
    const posIdx = Math.abs((hash + i * 3) % pos.length);
    const year = ['Fr.', 'So.', 'Jr.', 'Sr.'][Math.abs((hash + i) % 4)];
    const stats = generatePlayerStats(team.sport, pos[posIdx], hash + i);

    players.push({
      id: `${team.id}-player-${i}`,
      name: `${firstNames[fnIdx]} ${lastNames[lnIdx]}`,
      position: pos[posIdx],
      year,
      number: Math.abs((hash + i * 17) % 99) + 1,
      team: team.name,
      teamId: team.id,
      tier: team.tier,
      sport: team.sport,
      stats,
    });
  }
  return players;
}

function generatePlayerStats(sport, position, seed) {
  const r = (min, max) => min + Math.abs(seed % (max - min + 1));

  if (sport === 'football') {
    if (position === 'QB') return { passYds: r(1200, 3800), passTD: r(8, 35), INT: r(2, 15), compPct: r(55, 72).toFixed(1), rushYds: r(50, 500), rating: r(110, 165) };
    if (position === 'RB') return { rushYds: r(400, 1600), rushTD: r(3, 18), ypc: (r(35, 62) / 10).toFixed(1), rec: r(10, 45), recYds: r(80, 450) };
    if (position === 'WR') return { rec: r(20, 85), recYds: r(300, 1400), recTD: r(2, 14), ypr: (r(100, 175) / 10).toFixed(1), targets: r(40, 120) };
    return { tackles: r(20, 95), sacks: r(0, 14), INT: r(0, 6), TFL: r(3, 18), FF: r(0, 5) };
  }
  if (sport === 'baseball') {
    if (position === 'P') return { ERA: (r(150, 550) / 100).toFixed(2), W: r(2, 12), L: r(1, 8), SO: r(40, 140), IP: r(40, 110), WHIP: (r(90, 160) / 100).toFixed(2) };
    return { AVG: '.' + r(220, 380), HR: r(2, 22), RBI: r(15, 75), OBP: '.' + r(300, 450), SLG: '.' + r(350, 650), SB: r(1, 30) };
  }
  if (sport === 'hockey' || sport === 'whockey') {
    if (position === 'G') return { GAA: (r(180, 320) / 100).toFixed(2), svPct: '.' + r(895, 935), W: r(8, 25), L: r(3, 15), SO: r(0, 6) };
    return { goals: r(3, 30), assists: r(5, 40), points: r(10, 60), plusMinus: r(-10, 25), PIM: r(8, 80), shots: r(40, 200) };
  }
  if (sport === 'volleyball') {
    return { kills: r(100, 450), aces: r(15, 60), digs: r(80, 400), blocks: r(20, 120), assists: r(30, 1200), hitPct: '.' + r(180, 380) };
  }
  if (sport === 'tennis') {
    return { wins: r(8, 25), losses: r(2, 12), setsWon: r(20, 60), aces: r(30, 120), winPct: r(55, 88).toFixed(1) };
  }
  return {};
}

export function generateNews(tier, sport) {
  const headlines = {
    football: [
      { title: 'Dramatic Fourth Quarter Comeback Stuns #3 Ranked Opponents', summary: 'Down 21 points entering the final quarter, a resilient squad engineered one of the most memorable comebacks in conference history with three unanswered touchdowns.', category: 'Game Recap' },
      { title: 'Star Quarterback Declares for NFL Draft After Record-Setting Season', summary: 'The two-time conference player of the year announced his decision to enter the professional ranks after throwing for 4,200 yards and 38 touchdowns.', category: 'Breaking News' },
      { title: 'Transfer Portal Shakes Up Conference Title Race', summary: 'Several high-profile transfers have dramatically altered the competitive landscape heading into the spring, with three top-25 programs adding key contributors.', category: 'Analysis' },
      { title: 'Defensive Unit Posts Historic Shutout in Rivalry Game', summary: 'The dominant defense recorded 8 sacks and 3 interceptions en route to a 31-0 victory that clinched the division championship.', category: 'Game Recap' },
      { title: 'Coaching Carousel: Three Programs Announce New Head Coaches', summary: 'The offseason coaching changes continue to reshape the conference as programs look to find their next leader.', category: 'Breaking News' },
    ],
    baseball: [
      { title: 'Freshman Pitcher Throws No-Hitter in Conference Opener', summary: 'The 18-year-old right-hander struck out 14 batters in a dominant performance that signaled the arrival of a potential All-American.', category: 'Game Recap' },
      { title: 'Walk-Off Grand Slam Caps Incredible Series Comeback', summary: 'Trailing 2-0 in the series, a clutch grand slam in the bottom of the ninth of Game 3 sent the home crowd into a frenzy.', category: 'Game Recap' },
      { title: 'College World Series Bracket Predictions Released', summary: 'Analysts break down the projected regional hosts and potential matchups as the postseason picture begins to crystallize.', category: 'Analysis' },
      { title: 'Record-Breaking Home Run Streak Reaches 12 Games', summary: 'The junior slugger has now homered in 12 consecutive games, tying the all-time NCAA record and drawing attention from professional scouts.', category: 'Player Spotlight' },
    ],
    hockey: [
      { title: 'Overtime Thriller Decides Conference Championship', summary: 'A power-play goal at 3:47 of overtime sealed the conference title in front of a sold-out arena of 8,200 fans.', category: 'Game Recap' },
      { title: 'Goaltender Sets New Single-Season Save Record', summary: 'With a 42-save performance on Saturday, the junior netminder eclipsed the program record of 1,247 saves in a season.', category: 'Player Spotlight' },
      { title: 'Frozen Four Preview: Breaking Down the Final Four', summary: 'A comprehensive look at the four remaining teams, their paths to the championship, and the key matchups that will decide it all.', category: 'Analysis' },
    ],
    volleyball: [
      { title: 'Undefeated Conference Season Clinches #1 Seed', summary: 'With a dominant 18-0 conference record, the program secured the top seed and home-court advantage throughout the tournament.', category: 'Breaking News' },
      { title: 'Record Kill Count Highlights Five-Set Victory', summary: 'A remarkable 32-kill performance by the junior outside hitter powered a come-from-behind victory in a match that lasted nearly three hours.', category: 'Game Recap' },
      { title: 'Freshman Setter Named Conference Player of the Week', summary: 'The first-year playmaker averaged 12.4 assists per set while also contributing 15 aces across three matches.', category: 'Player Spotlight' },
    ],
    tennis: [
      { title: 'Ranked Upset: Unranked Squad Topples #5 Nationally', summary: 'A gutsy performance at the singles positions and a dominant showing in doubles led to a shocking 4-3 team victory.', category: 'Game Recap' },
      { title: 'Sophomore Climbs to #1 Individual National Ranking', summary: 'After a 15-match winning streak that includes victories over five top-10 opponents, the rising star claims the top spot.', category: 'Player Spotlight' },
    ],
    whockey: [
      { title: 'Hat Trick Hero Leads Team to Regional Championship', summary: 'Three goals in the third period, including the game-winner with 45 seconds remaining, capped an unforgettable night.', category: 'Game Recap' },
      { title: 'Defensive Dominance: Program Allows Just 1.2 Goals Per Game', summary: 'The league-best defensive record is powered by a combination of elite goaltending and disciplined team structure.', category: 'Analysis' },
    ],
  };

  const tierLabel = TIERS.find(t => t.id === tier)?.name || tier;
  const articles = headlines[sport] || headlines.football;

  return articles.map((article, i) => ({
    id: `${tier}-${sport}-news-${i}`,
    ...article,
    tier,
    tierLabel,
    sport,
    date: new Date(2026, 2, 28 - i * 2).toISOString(),
    readTime: `${3 + i * 2} min read`,
    author: ['Marcus Chen', 'Sarah Williams', 'James Rodriguez', 'Emily Thompson', 'David Park'][i % 5],
  }));
}

export function generateTopPlayers(tier, sport) {
  const conferences = CONFERENCES[tier]?.[sport] || [];
  if (conferences.length === 0) return [];

  const allPlayers = [];
  conferences.slice(0, 3).forEach(conf => {
    const teams = generateTeams(tier, sport, conf);
    teams.slice(0, 3).forEach(team => {
      const players = generatePlayers(team);
      allPlayers.push(...players.slice(0, 3));
    });
  });

  return allPlayers.slice(0, 10);
}

export function getStatLabels(sport) {
  const labels = {
    football: ['Pass Yds', 'Rush Yds', 'TD', 'INT', 'Tackles', 'Sacks'],
    baseball: ['AVG', 'HR', 'RBI', 'ERA', 'SO', 'SB'],
    hockey: ['Goals', 'Assists', 'Points', '+/-', 'PIM', 'Sv%'],
    volleyball: ['Kills', 'Aces', 'Digs', 'Blocks', 'Assists', 'Hit%'],
    tennis: ['Wins', 'Losses', 'Sets Won', 'Aces', 'Win%'],
    whockey: ['Goals', 'Assists', 'Points', '+/-', 'PIM', 'Sv%'],
  };
  return labels[sport] || labels.football;
}

export function getPlayerRadarData(player) {
  const stats = player.stats;
  const sport = player.sport;

  if (sport === 'football') {
    if (stats.passYds) return [
      { stat: 'Pass Yds', value: Math.min(stats.passYds / 4000 * 100, 100) },
      { stat: 'Pass TD', value: Math.min(stats.passTD / 40 * 100, 100) },
      { stat: 'Comp%', value: parseFloat(stats.compPct) },
      { stat: 'Rush Yds', value: Math.min(stats.rushYds / 600 * 100, 100) },
      { stat: 'Rating', value: Math.min(stats.rating / 170 * 100, 100) },
      { stat: 'Low INT', value: Math.max(100 - stats.INT * 6, 0) },
    ];
    if (stats.rushYds) return [
      { stat: 'Rush Yds', value: Math.min(stats.rushYds / 1800 * 100, 100) },
      { stat: 'Rush TD', value: Math.min(stats.rushTD / 20 * 100, 100) },
      { stat: 'YPC', value: Math.min(parseFloat(stats.ypc) / 7 * 100, 100) },
      { stat: 'Rec', value: Math.min(stats.rec / 50 * 100, 100) },
      { stat: 'Rec Yds', value: Math.min(stats.recYds / 500 * 100, 100) },
    ];
    if (stats.rec) return [
      { stat: 'Rec', value: Math.min(stats.rec / 90 * 100, 100) },
      { stat: 'Rec Yds', value: Math.min(stats.recYds / 1500 * 100, 100) },
      { stat: 'Rec TD', value: Math.min(stats.recTD / 15 * 100, 100) },
      { stat: 'YPR', value: Math.min(parseFloat(stats.ypr) / 20 * 100, 100) },
      { stat: 'Targets', value: Math.min(stats.targets / 130 * 100, 100) },
    ];
    return [
      { stat: 'Tackles', value: Math.min(stats.tackles / 100 * 100, 100) },
      { stat: 'Sacks', value: Math.min(stats.sacks / 15 * 100, 100) },
      { stat: 'INT', value: Math.min(stats.INT / 7 * 100, 100) },
      { stat: 'TFL', value: Math.min(stats.TFL / 20 * 100, 100) },
      { stat: 'FF', value: Math.min(stats.FF / 6 * 100, 100) },
    ];
  }

  if (sport === 'baseball') {
    if (stats.ERA) return [
      { stat: 'Low ERA', value: Math.max(100 - parseFloat(stats.ERA) * 15, 0) },
      { stat: 'Wins', value: Math.min(stats.W / 14 * 100, 100) },
      { stat: 'SO', value: Math.min(stats.SO / 150 * 100, 100) },
      { stat: 'IP', value: Math.min(stats.IP / 120 * 100, 100) },
      { stat: 'WHIP', value: Math.max(100 - parseFloat(stats.WHIP) * 40, 0) },
    ];
    return [
      { stat: 'AVG', value: parseFloat(stats.AVG) * 250 },
      { stat: 'HR', value: Math.min(stats.HR / 25 * 100, 100) },
      { stat: 'RBI', value: Math.min(stats.RBI / 80 * 100, 100) },
      { stat: 'OBP', value: parseFloat(stats.OBP) * 220 },
      { stat: 'SLG', value: parseFloat(stats.SLG) * 150 },
      { stat: 'SB', value: Math.min(stats.SB / 35 * 100, 100) },
    ];
  }

  const entries = Object.entries(stats).slice(0, 5);
  return entries.map(([key, val]) => ({
    stat: key,
    value: typeof val === 'string' ? parseFloat(val) * 100 : Math.min(val / 50 * 100, 100),
  }));
}
