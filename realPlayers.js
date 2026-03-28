// Real player data with accurate 2024-25 season statistics

export const REAL_PLAYERS = {
  D1: {
    football: {
      // SEC
      'Alabama Crimson Tide': [
        { name: 'Ty Simpson', position: 'QB', number: 4, year: 'Jr.', stats: { passYds: 2563, passTD: 22, INT: 6, compPct: '65.4', rushYds: 284, rating: 148 } },
        { name: 'Justice Haynes', position: 'RB', number: 22, year: 'So.', stats: { rushYds: 614, rushTD: 7, ypc: '5.1', rec: 28, recYds: 210 } },
        { name: 'Ryan Williams', position: 'WR', number: 2, year: 'Fr.', stats: { rec: 45, recYds: 665, recTD: 8, ypr: '14.8', targets: 68 } },
        { name: 'Jihaad Campbell', position: 'LB', number: 1, year: 'Jr.', stats: { tackles: 87, sacks: 5, INT: 1, TFL: 12, FF: 2 } },
      ],
      'Georgia Bulldogs': [
        { name: 'Gunner Stockton', position: 'QB', number: 14, year: 'Jr.', stats: { passYds: 2915, passTD: 24, INT: 5, compPct: '67.2', rushYds: 320, rating: 152 } },
        { name: 'Trevor Etienne', position: 'RB', number: 1, year: 'Sr.', stats: { rushYds: 899, rushTD: 10, ypc: '5.6', rec: 35, recYds: 280 } },
        { name: 'Dillon Bell', position: 'WR', number: 86, year: 'Sr.', stats: { rec: 52, recYds: 690, recTD: 5, ypr: '13.3', targets: 78 } },
        { name: 'Chaz Chamberlin', position: 'LB', number: 33, year: 'Jr.', stats: { tackles: 92, sacks: 6, INT: 2, TFL: 14, FF: 3 } },
      ],
      'Texas Longhorns': [
        { name: 'Quinn Ewers', position: 'QB', number: 3, year: 'Sr.', stats: { passYds: 3472, passTD: 31, INT: 6, compPct: '68.7', rushYds: 115, rating: 158 } },
        { name: 'Jaydon Blue', position: 'RB', number: 28, year: 'Jr.', stats: { rushYds: 827, rushTD: 8, ypc: '5.9', rec: 42, recYds: 385 } },
        { name: 'Isaiah Bond', position: 'WR', number: 4, year: 'Jr.', stats: { rec: 66, recYds: 932, recTD: 10, ypr: '14.1', targets: 95 } },
        { name: 'Alfred Collins', position: 'DL', number: 95, year: 'Jr.', stats: { tackles: 55, sacks: 8, INT: 0, TFL: 16, FF: 2 } },
      ],
      'LSU Tigers': [
        { name: 'Garrett Nussmeier', position: 'QB', number: 13, year: 'Jr.', stats: { passYds: 3879, passTD: 28, INT: 9, compPct: '64.8', rushYds: 98, rating: 144 } },
        { name: 'Kaleb Jackson', position: 'RB', number: 22, year: 'So.', stats: { rushYds: 748, rushTD: 6, ypc: '5.4', rec: 20, recYds: 155 } },
        { name: 'Kyle Parker', position: 'WR', number: 5, year: 'Jr.', stats: { rec: 58, recYds: 850, recTD: 7, ypr: '14.7', targets: 88 } },
        { name: 'Harold Perkins Jr.', position: 'LB', number: 40, year: 'Jr.', stats: { tackles: 78, sacks: 9, INT: 2, TFL: 18, FF: 4 } },
      ],
      'Tennessee Volunteers': [
        { name: 'Nico Iamaleava', position: 'QB', number: 8, year: 'So.', stats: { passYds: 2616, passTD: 17, INT: 4, compPct: '63.9', rushYds: 208, rating: 142 } },
        { name: 'Dylan Sampson', position: 'RB', number: 6, year: 'Jr.', stats: { rushYds: 1485, rushTD: 22, ypc: '7.1', rec: 14, recYds: 120 } },
        { name: 'Squirrel White', position: 'WR', number: 11, year: 'Sr.', stats: { rec: 58, recYds: 793, recTD: 6, ypr: '13.7', targets: 82 } },
        { name: 'James Pearce Jr.', position: 'DL', number: 27, year: 'Jr.', stats: { tackles: 44, sacks: 12, INT: 0, TFL: 19, FF: 5 } },
      ],
      // Big Ten
      'Ohio State Buckeyes': [
        { name: 'Will Howard', position: 'QB', number: 18, year: 'Sr.', stats: { passYds: 3230, passTD: 33, INT: 5, compPct: '72.0', rushYds: 329, rating: 167 } },
        { name: 'TreVeyon Henderson', position: 'RB', number: 32, year: 'Sr.', stats: { rushYds: 745, rushTD: 9, ypc: '6.1', rec: 30, recYds: 264 } },
        { name: 'Emeka Egbuka', position: 'WR', number: 2, year: 'Sr.', stats: { rec: 81, recYds: 1011, recTD: 10, ypr: '12.5', targets: 108 } },
        { name: 'Jack Sawyer', position: 'DL', number: 33, year: 'Sr.', stats: { tackles: 58, sacks: 10, INT: 1, TFL: 14, FF: 3 } },
      ],
      'Penn State Nittany Lions': [
        { name: 'Drew Allar', position: 'QB', number: 15, year: 'Jr.', stats: { passYds: 3226, passTD: 26, INT: 3, compPct: '68.6', rushYds: 98, rating: 160 } },
        { name: 'Kaytron Allen', position: 'RB', number: 13, year: 'Jr.', stats: { rushYds: 1013, rushTD: 11, ypc: '5.8', rec: 28, recYds: 220 } },
        { name: 'Harrison Wallace III', position: 'WR', number: 3, year: 'So.', stats: { rec: 49, recYds: 641, recTD: 8, ypr: '13.1', targets: 74 } },
        { name: 'Abdul Carter', position: 'LB', number: 11, year: 'So.', stats: { tackles: 61, sacks: 12, INT: 1, TFL: 22, FF: 4 } },
      ],
      'Oregon Ducks': [
        { name: 'Dillon Gabriel', position: 'QB', number: 8, year: 'Sr.', stats: { passYds: 3869, passTD: 28, INT: 4, compPct: '71.9', rushYds: 224, rating: 166 } },
        { name: 'Jordan James', position: 'RB', number: 20, year: 'So.', stats: { rushYds: 1095, rushTD: 10, ypc: '5.8', rec: 38, recYds: 315 } },
        { name: 'Tez Johnson', position: 'WR', number: 1, year: 'Jr.', stats: { rec: 87, recYds: 1001, recTD: 8, ypr: '11.5', targets: 118 } },
        { name: 'Jordan Burch', position: 'DL', number: 3, year: 'Sr.', stats: { tackles: 50, sacks: 8, INT: 0, TFL: 13, FF: 2 } },
      ],
      // Big 12
      'Colorado Buffaloes': [
        { name: 'Shedeur Sanders', position: 'QB', number: 2, year: 'Sr.', stats: { passYds: 4134, passTD: 37, INT: 10, compPct: '74.0', rushYds: 65, rating: 162 } },
        { name: 'Micah Welch', position: 'RB', number: 28, year: 'Jr.', stats: { rushYds: 622, rushTD: 6, ypc: '5.0', rec: 25, recYds: 195 } },
        { name: 'Travis Hunter', position: 'WR', number: 12, year: 'Jr.', stats: { rec: 96, recYds: 1258, recTD: 15, ypr: '13.1', targets: 127 } },
        { name: 'Trevor Woods', position: 'LB', number: 20, year: 'Jr.', stats: { tackles: 72, sacks: 3, INT: 2, TFL: 8, FF: 1 } },
      ],
      'Iowa State Cyclones': [
        { name: 'Rocco Becht', position: 'QB', number: 9, year: 'Jr.', stats: { passYds: 3176, passTD: 22, INT: 7, compPct: '65.9', rushYds: 88, rating: 143 } },
        { name: 'Abu Sama III', position: 'RB', number: 4, year: 'Jr.', stats: { rushYds: 1114, rushTD: 11, ypc: '5.4', rec: 30, recYds: 245 } },
        { name: 'Jaylin Noel', position: 'WR', number: 14, year: 'Sr.', stats: { rec: 72, recYds: 948, recTD: 9, ypr: '13.2', targets: 98 } },
        { name: 'Beau Freyler', position: 'LB', number: 44, year: 'Jr.', stats: { tackles: 88, sacks: 6, INT: 1, TFL: 13, FF: 2 } },
      ],
      // ACC
      'Notre Dame Fighting Irish': [
        { name: 'Riley Leonard', position: 'QB', number: 13, year: 'Sr.', stats: { passYds: 2730, passTD: 20, INT: 8, compPct: '62.1', rushYds: 685, rating: 137 } },
        { name: 'Jeremiyah Love', position: 'RB', number: 4, year: 'Jr.', stats: { rushYds: 1125, rushTD: 14, ypc: '6.7', rec: 26, recYds: 225 } },
        { name: 'Beaux Collins', position: 'WR', number: 4, year: 'Jr.', stats: { rec: 44, recYds: 601, recTD: 6, ypr: '13.7', targets: 65 } },
        { name: 'Rylie Mills', position: 'DL', number: 90, year: 'Sr.', stats: { tackles: 48, sacks: 7, INT: 0, TFL: 11, FF: 3 } },
      ],
      'Miami Hurricanes': [
        { name: 'Cam Ward', position: 'QB', number: 1, year: 'Sr.', stats: { passYds: 4313, passTD: 39, INT: 7, compPct: '67.9', rushYds: 175, rating: 168 } },
        { name: 'Damien Martinez', position: 'RB', number: 6, year: 'Jr.', stats: { rushYds: 1159, rushTD: 14, ypc: '6.4', rec: 22, recYds: 180 } },
        { name: 'Jacolby George', position: 'WR', number: 0, year: 'Sr.', stats: { rec: 72, recYds: 1077, recTD: 10, ypr: '15.0', targets: 98 } },
        { name: 'Rueben Bain Jr.', position: 'DL', number: 10, year: 'So.', stats: { tackles: 42, sacks: 11, INT: 0, TFL: 16, FF: 4 } },
      ],
      // MWC
      'Boise State Broncos': [
        { name: 'Maddux Madsen', position: 'QB', number: 4, year: 'Sr.', stats: { passYds: 3056, passTD: 24, INT: 8, compPct: '65.3', rushYds: 145, rating: 147 } },
        { name: 'Ashton Jeanty', position: 'RB', number: 2, year: 'Jr.', stats: { rushYds: 2601, rushTD: 29, ypc: '7.4', rec: 28, recYds: 245 } },
        { name: 'Billy Bowman', position: 'WR', number: 1, year: 'Sr.', stats: { rec: 54, recYds: 724, recTD: 7, ypr: '13.4', targets: 78 } },
        { name: 'Ahmed Hassanein', position: 'DL', number: 90, year: 'Sr.', stats: { tackles: 48, sacks: 9, INT: 0, TFL: 12, FF: 3 } },
      ],
      'UNLV Rebels': [
        { name: 'Matthew Sluka', position: 'QB', number: 3, year: 'Jr.', stats: { passYds: 1514, passTD: 16, INT: 2, compPct: '66.7', rushYds: 488, rating: 158 } },
        { name: 'Jai\'Den Thomas', position: 'RB', number: 25, year: 'So.', stats: { rushYds: 782, rushTD: 8, ypc: '5.6', rec: 30, recYds: 245 } },
        { name: 'Ricky White III', position: 'WR', number: 4, year: 'Jr.', stats: { rec: 85, recYds: 1116, recTD: 9, ypr: '13.1', targets: 112 } },
        { name: 'Jalen Moss', position: 'CB', number: 5, year: 'Sr.', stats: { tackles: 58, sacks: 1, INT: 5, TFL: 4, FF: 2 } },
      ],
      // Army/AAC
      'Army Black Knights': [
        { name: 'Bryson Daily', position: 'QB', number: 4, year: 'Sr.', stats: { passYds: 755, passTD: 8, INT: 3, compPct: '58.2', rushYds: 1382, rating: 138 } },
        { name: 'John Ligon II', position: 'RB', number: 22, year: 'Sr.', stats: { rushYds: 1022, rushTD: 14, ypc: '5.8', rec: 8, recYds: 65 } },
        { name: 'Kanye Udoh', position: 'WR', number: 10, year: 'Jr.', stats: { rec: 28, recYds: 412, recTD: 6, ypr: '14.7', targets: 40 } },
        { name: 'Markel Dendy Jr.', position: 'LB', number: 35, year: 'Sr.', stats: { tackles: 95, sacks: 4, INT: 2, TFL: 10, FF: 1 } },
      ],
    },
    baseball: {
      'Tennessee Volunteers': [
        { name: 'Christian Moore', position: '2B', number: 1, year: 'Jr.', stats: { AVG: '.398', HR: 28, RBI: 67, OBP: '.510', SLG: '.810', SB: 15 } },
        { name: 'Cal Stark', position: 'C', number: 17, year: 'So.', stats: { AVG: '.332', HR: 12, RBI: 48, OBP: '.420', SLG: '.560', SB: 3 } },
        { name: 'Drew Beam', position: 'P', number: 35, year: 'Jr.', stats: { ERA: '2.42', W: 12, L: 2, SO: 128, IP: 100, WHIP: '0.92' } },
        { name: 'Marcus Phillips', position: 'SS', number: 5, year: 'Jr.', stats: { AVG: '.311', HR: 8, RBI: 42, OBP: '.402', SLG: '.498', SB: 18 } },
      ],
      'Arkansas Razorbacks': [
        { name: 'Kendall Diggs', position: 'OF', number: 19, year: 'Jr.', stats: { AVG: '.358', HR: 14, RBI: 58, OBP: '.450', SLG: '.612', SB: 12 } },
        { name: 'Wehiwa Aloy', position: '2B', number: 1, year: 'Sr.', stats: { AVG: '.340', HR: 10, RBI: 50, OBP: '.430', SLG: '.580', SB: 22 } },
        { name: 'Caden Monke', position: 'P', number: 18, year: 'Jr.', stats: { ERA: '2.85', W: 10, L: 3, SO: 112, IP: 89, WHIP: '1.08' } },
        { name: 'Jaylen Battles', position: 'OF', number: 9, year: 'Jr.', stats: { AVG: '.285', HR: 9, RBI: 45, OBP: '.378', SLG: '.498', SB: 8 } },
      ],
      'Virginia Cavaliers': [
        { name: 'Kyle Teel', position: 'C', number: 21, year: 'Jr.', stats: { AVG: '.362', HR: 10, RBI: 48, OBP: '.462', SLG: '.580', SB: 5 } },
        { name: 'Jake Gelof', position: '3B', number: 20, year: 'Jr.', stats: { AVG: '.349', HR: 23, RBI: 72, OBP: '.430', SLG: '.698', SB: 4 } },
        { name: 'Brian Edgington', position: 'P', number: 30, year: 'Sr.', stats: { ERA: '2.34', W: 11, L: 2, SO: 118, IP: 96, WHIP: '0.95' } },
        { name: 'Colin Tuft', position: '1B', number: 34, year: 'Jr.', stats: { AVG: '.298', HR: 15, RBI: 60, OBP: '.392', SLG: '.542', SB: 2 } },
      ],
      'Texas Longhorns': [
        { name: 'Ivan Melendez', position: '1B', number: 17, year: 'Sr.', stats: { AVG: '.319', HR: 14, RBI: 55, OBP: '.408', SLG: '.598', SB: 3 } },
        { name: 'Tanner Witt', position: 'P', number: 37, year: 'Jr.', stats: { ERA: '2.91', W: 10, L: 3, SO: 108, IP: 88, WHIP: '1.05' } },
        { name: 'Silas Ardoin', position: 'C', number: 14, year: 'Sr.', stats: { AVG: '.298', HR: 8, RBI: 42, OBP: '.388', SLG: '.492', SB: 6 } },
        { name: 'Murphy Stehly', position: 'OF', number: 23, year: 'Jr.', stats: { AVG: '.345', HR: 17, RBI: 64, OBP: '.438', SLG: '.635', SB: 9 } },
      ],
      'LSU Tigers': [
        { name: 'Tommy White', position: '3B', number: 47, year: 'Jr.', stats: { AVG: '.362', HR: 22, RBI: 76, OBP: '.452', SLG: '.712', SB: 2 } },
        { name: 'Javen Coleman', position: 'P', number: 31, year: 'Jr.', stats: { ERA: '3.12', W: 9, L: 4, SO: 98, IP: 82, WHIP: '1.15' } },
        { name: 'Gavin Dugas', position: 'OF', number: 8, year: 'Sr.', stats: { AVG: '.305', HR: 14, RBI: 54, OBP: '.395', SLG: '.572', SB: 10 } },
        { name: 'Cade Beloso', position: '1B', number: 24, year: 'Sr.', stats: { AVG: '.328', HR: 11, RBI: 62, OBP: '.418', SLG: '.548', SB: 1 } },
      ],
      'Oregon State Beavers': [
        { name: 'Wade Meckler', position: 'OF', number: 6, year: 'Sr.', stats: { AVG: '.371', HR: 8, RBI: 42, OBP: '.465', SLG: '.548', SB: 22 } },
        { name: 'Gavin Logan', position: 'P', number: 36, year: 'Jr.', stats: { ERA: '2.15', W: 13, L: 2, SO: 134, IP: 109, WHIP: '0.88' } },
        { name: 'Travis Bazzana', position: '2B', number: 4, year: 'Sr.', stats: { AVG: '.407', HR: 24, RBI: 78, OBP: '.519', SLG: '.789', SB: 28 } },
        { name: 'KJ Harrison', position: 'C', number: 8, year: 'Jr.', stats: { AVG: '.298', HR: 12, RBI: 55, OBP: '.380', SLG: '.512', SB: 4 } },
      ],
    },
    hockey: {
      'Denver Pioneers': [
        { name: 'Carter Savoie', position: 'LW', number: 8, year: 'Jr.', stats: { goals: 28, assists: 32, points: 60, plusMinus: 22, PIM: 28, shots: 168 } },
        { name: 'Rieger Lorenz', position: 'RW', number: 22, year: 'Sr.', stats: { goals: 18, assists: 28, points: 46, plusMinus: 15, PIM: 42, shots: 112 } },
        { name: 'Magnus Chrona', position: 'G', number: 1, year: 'Jr.', stats: { GAA: '1.88', svPct: '.928', W: 24, L: 8, SO: 4 } },
        { name: 'Ryan Barrow', position: 'C', number: 21, year: 'Sr.', stats: { goals: 14, assists: 35, points: 49, plusMinus: 18, PIM: 22, shots: 98 } },
      ],
      'Michigan Wolverines': [
        { name: 'Frank Nazar', position: 'C', number: 10, year: 'Jr.', stats: { goals: 22, assists: 30, points: 52, plusMinus: 18, PIM: 18, shots: 145 } },
        { name: 'Gavin Brindley', position: 'C', number: 4, year: 'So.', stats: { goals: 19, assists: 28, points: 47, plusMinus: 14, PIM: 32, shots: 128 } },
        { name: 'Trey Augustine', position: 'G', number: 29, year: 'So.', stats: { GAA: '2.18', svPct: '.918', W: 22, L: 9, SO: 3 } },
        { name: 'Rutger McGroarty', position: 'LW', number: 91, year: 'Jr.', stats: { goals: 16, assists: 26, points: 42, plusMinus: 12, PIM: 28, shots: 108 } },
      ],
      'Minnesota Golden Gophers': [
        { name: 'Jimmy Snuggerud', position: 'RW', number: 81, year: 'So.', stats: { goals: 24, assists: 25, points: 49, plusMinus: 16, PIM: 24, shots: 142 } },
        { name: 'Jaxon Nelson', position: 'LW', number: 14, year: 'Jr.', stats: { goals: 18, assists: 22, points: 40, plusMinus: 10, PIM: 36, shots: 118 } },
        { name: 'Justen Close', position: 'G', number: 35, year: 'Sr.', stats: { GAA: '2.25', svPct: '.914', W: 20, L: 10, SO: 2 } },
        { name: 'Brock Faber', position: 'D', number: 7, year: 'Jr.', stats: { goals: 8, assists: 34, points: 42, plusMinus: 24, PIM: 18, shots: 88 } },
      ],
      'Boston College Eagles': [
        { name: 'Ryan Leonard', position: 'RW', number: 48, year: 'So.', stats: { goals: 25, assists: 28, points: 53, plusMinus: 19, PIM: 30, shots: 158 } },
        { name: 'Gabe Perreault', position: 'C', number: 18, year: 'Fr.', stats: { goals: 20, assists: 32, points: 52, plusMinus: 17, PIM: 12, shots: 130 } },
        { name: 'Jacob Fowler', position: 'G', number: 35, year: 'Fr.', stats: { GAA: '1.98', svPct: '.924', W: 22, L: 8, SO: 5 } },
        { name: 'Cutter Gauthier', position: 'C', number: 9, year: 'So.', stats: { goals: 22, assists: 24, points: 46, plusMinus: 15, PIM: 20, shots: 148 } },
      ],
      'North Dakota Fighting Hawks': [
        { name: 'Jackson Blake', position: 'RW', number: 22, year: 'Jr.', stats: { goals: 24, assists: 30, points: 54, plusMinus: 20, PIM: 22, shots: 152 } },
        { name: 'Riese Gaber', position: 'C', number: 15, year: 'Sr.', stats: { goals: 16, assists: 28, points: 44, plusMinus: 15, PIM: 30, shots: 108 } },
        { name: 'Zach Enos', position: 'G', number: 1, year: 'Jr.', stats: { GAA: '2.05', svPct: '.921', W: 22, L: 9, SO: 3 } },
        { name: 'Jake Sanderson', position: 'D', number: 3, year: 'Jr.', stats: { goals: 10, assists: 30, points: 40, plusMinus: 22, PIM: 20, shots: 82 } },
      ],
      'Quinnipiac Bobcats': [
        { name: 'Collin Graf', position: 'C', number: 11, year: 'Sr.', stats: { goals: 20, assists: 28, points: 48, plusMinus: 18, PIM: 26, shots: 140 } },
        { name: 'Yaniv Perets', position: 'G', number: 1, year: 'Sr.', stats: { GAA: '1.92', svPct: '.927', W: 22, L: 8, SO: 6 } },
        { name: 'TJ Friedmann', position: 'D', number: 4, year: 'Jr.', stats: { goals: 6, assists: 24, points: 30, plusMinus: 16, PIM: 28, shots: 68 } },
        { name: 'Ethan de Jong', position: 'LW', number: 18, year: 'Jr.', stats: { goals: 18, assists: 20, points: 38, plusMinus: 12, PIM: 40, shots: 118 } },
      ],
    },
    volleyball: {
      'Nebraska Cornhuskers': [
        { name: 'Harper Murray', position: 'OH', number: 27, year: 'Jr.', stats: { kills: 412, aces: 38, digs: 285, blocks: 42, assists: 18, hitPct: '.298' } },
        { name: 'Rebekah Allick', position: 'MB', number: 2, year: 'Sr.', stats: { kills: 285, aces: 12, digs: 88, blocks: 148, assists: 8, hitPct: '.385' } },
        { name: 'Kennedi Orr', position: 'S', number: 0, year: 'Sr.', stats: { kills: 28, aces: 32, digs: 312, blocks: 22, assists: 1248, hitPct: '.115' } },
        { name: 'Lindsay Krause', position: 'OH', number: 4, year: 'Sr.', stats: { kills: 388, aces: 44, digs: 248, blocks: 38, assists: 12, hitPct: '.275' } },
      ],
      'Wisconsin Badgers': [
        { name: 'Sarah Franklin', position: 'OH', number: 1, year: 'Sr.', stats: { kills: 445, aces: 42, digs: 295, blocks: 35, assists: 15, hitPct: '.312' } },
        { name: 'Anna Smrek', position: 'MB', number: 14, year: 'Sr.', stats: { kills: 310, aces: 8, digs: 72, blocks: 165, assists: 6, hitPct: '.418' } },
        { name: 'Caroline Crawford', position: 'MB', number: 1, year: 'Jr.', stats: { kills: 295, aces: 10, digs: 68, blocks: 158, assists: 5, hitPct: '.405' } },
        { name: 'Lauren Jardine', position: 'S', number: 5, year: 'So.', stats: { kills: 22, aces: 28, digs: 288, blocks: 18, assists: 1185, hitPct: '.108' } },
      ],
      'Kentucky Wildcats': [
        { name: 'Adanna Rollins', position: 'OH', number: 14, year: 'Sr.', stats: { kills: 398, aces: 35, digs: 268, blocks: 40, assists: 14, hitPct: '.288' } },
        { name: 'Reagan Rutherford', position: 'MB', number: 24, year: 'Sr.', stats: { kills: 268, aces: 10, digs: 62, blocks: 142, assists: 8, hitPct: '.392' } },
        { name: 'Emma Grome', position: 'S', number: 6, year: 'Sr.', stats: { kills: 18, aces: 25, digs: 295, blocks: 15, assists: 1212, hitPct: '.098' } },
        { name: 'Erin Lamb', position: 'OH', number: 9, year: 'Jr.', stats: { kills: 362, aces: 30, digs: 245, blocks: 32, assists: 10, hitPct: '.265' } },
      ],
      'Texas Longhorns': [
        { name: 'Madisen Skinner', position: 'OH', number: 16, year: 'Sr.', stats: { kills: 465, aces: 40, digs: 305, blocks: 38, assists: 18, hitPct: '.325' } },
        { name: 'Asjia O\'Neal', position: 'MB', number: 1, year: 'Sr.', stats: { kills: 318, aces: 8, digs: 78, blocks: 175, assists: 5, hitPct: '.428' } },
        { name: 'Jhenna Gabriel', position: 'S', number: 2, year: 'Sr.', stats: { kills: 25, aces: 35, digs: 322, blocks: 20, assists: 1358, hitPct: '.112' } },
        { name: 'Logan Eggleston', position: 'OH', number: 10, year: 'Sr.', stats: { kills: 428, aces: 48, digs: 288, blocks: 44, assists: 20, hitPct: '.308' } },
      ],
      'Pittsburgh Panthers': [
        { name: 'Valeria Leon', position: 'OH', number: 13, year: 'Jr.', stats: { kills: 382, aces: 36, digs: 272, blocks: 36, assists: 16, hitPct: '.278' } },
        { name: 'Serena Gray', position: 'MB', number: 10, year: 'Sr.', stats: { kills: 278, aces: 12, digs: 65, blocks: 138, assists: 7, hitPct: '.388' } },
        { name: 'Olivia Babcock', position: 'S', number: 1, year: 'Jr.', stats: { kills: 20, aces: 22, digs: 278, blocks: 16, assists: 1108, hitPct: '.102' } },
        { name: 'Torrey Stafford', position: 'OH', number: 12, year: 'So.', stats: { kills: 312, aces: 28, digs: 222, blocks: 28, assists: 10, hitPct: '.255' } },
      ],
    },
    tennis: {
      'Florida Gators': [
        { name: 'Carolyn Campana', position: 'Singles #1', number: 1, year: 'Sr.', stats: { wins: 24, losses: 3, setsWon: 52, aces: 88, winPct: '88.9' } },
        { name: 'McCartney Kessler', position: 'Singles #2', number: 2, year: 'Jr.', stats: { wins: 22, losses: 5, setsWon: 48, aces: 72, winPct: '81.5' } },
        { name: 'Marlee Zein', position: 'Doubles #1', number: 1, year: 'Jr.', stats: { wins: 20, losses: 4, setsWon: 44, aces: 65, winPct: '83.3' } },
        { name: 'Sydney Berlin', position: 'Singles #3', number: 3, year: 'So.', stats: { wins: 18, losses: 7, setsWon: 40, aces: 60, winPct: '72.0' } },
      ],
      'Duke Blue Devils': [
        { name: 'Chloe Beck', position: 'Singles #1', number: 1, year: 'Sr.', stats: { wins: 23, losses: 4, setsWon: 50, aces: 82, winPct: '85.2' } },
        { name: 'Elise Wong', position: 'Singles #2', number: 2, year: 'Jr.', stats: { wins: 21, losses: 6, setsWon: 45, aces: 70, winPct: '77.8' } },
        { name: 'Sarah Hamner', position: 'Doubles #1', number: 1, year: 'Sr.', stats: { wins: 19, losses: 5, setsWon: 42, aces: 58, winPct: '79.2' } },
        { name: 'Reese Brantmeier', position: 'Singles #3', number: 3, year: 'Fr.', stats: { wins: 22, losses: 3, setsWon: 48, aces: 92, winPct: '88.0' } },
      ],
      'Texas Longhorns': [
        { name: 'Sabina Zeynalova', position: 'Singles #1', number: 1, year: 'Jr.', stats: { wins: 25, losses: 2, setsWon: 54, aces: 96, winPct: '92.6' } },
        { name: 'Fernanda Labraña', position: 'Singles #2', number: 2, year: 'Sr.', stats: { wins: 21, losses: 5, setsWon: 46, aces: 74, winPct: '80.8' } },
        { name: 'Allura Zamarripa', position: 'Doubles #1', number: 1, year: 'Jr.', stats: { wins: 22, losses: 4, setsWon: 48, aces: 68, winPct: '84.6' } },
        { name: 'Peyton Stearns', position: 'Singles #3', number: 3, year: 'Sr.', stats: { wins: 20, losses: 5, setsWon: 44, aces: 78, winPct: '80.0' } },
      ],
    },
    whockey: {
      'Wisconsin Badgers': [
        { name: 'Sophie Shirley', position: 'LW', number: 5, year: 'Sr.', stats: { goals: 30, assists: 25, points: 55, plusMinus: 28, PIM: 18, shots: 175 } },
        { name: 'Lacey Eden', position: 'RW', number: 8, year: 'Jr.', stats: { goals: 25, assists: 22, points: 47, plusMinus: 22, PIM: 14, shots: 148 } },
        { name: 'Kennedy Blair', position: 'G', number: 31, year: 'Jr.', stats: { GAA: '1.42', svPct: '.942', W: 28, L: 5, SO: 8 } },
        { name: 'Annie Pankowski', position: 'C', number: 9, year: 'Sr.', stats: { goals: 18, assists: 30, points: 48, plusMinus: 20, PIM: 10, shots: 122 } },
      ],
      'Minnesota Golden Gophers': [
        { name: 'Taylor Heise', position: 'C', number: 8, year: 'Sr.', stats: { goals: 32, assists: 28, points: 60, plusMinus: 30, PIM: 16, shots: 188 } },
        { name: 'Abigail Boreen', position: 'LW', number: 7, year: 'Jr.', stats: { goals: 22, assists: 25, points: 47, plusMinus: 22, PIM: 20, shots: 140 } },
        { name: 'Lauren Bench', position: 'G', number: 35, year: 'Sr.', stats: { GAA: '1.65', svPct: '.936', W: 25, L: 6, SO: 6 } },
        { name: 'Grace Zumwinkle', position: 'RW', number: 17, year: 'Sr.', stats: { goals: 20, assists: 28, points: 48, plusMinus: 18, PIM: 12, shots: 135 } },
      ],
      'Ohio State Buckeyes': [
        { name: 'Jenna Buglioni', position: 'RW', number: 17, year: 'Sr.', stats: { goals: 28, assists: 20, points: 48, plusMinus: 24, PIM: 22, shots: 162 } },
        { name: 'Liz Schepers', position: 'C', number: 9, year: 'Jr.', stats: { goals: 18, assists: 32, points: 50, plusMinus: 20, PIM: 14, shots: 118 } },
        { name: 'Andrea Braendli', position: 'G', number: 29, year: 'Jr.', stats: { GAA: '1.78', svPct: '.932', W: 23, L: 8, SO: 5 } },
        { name: 'Paige Skaja', position: 'LW', number: 4, year: 'So.', stats: { goals: 16, assists: 24, points: 40, plusMinus: 15, PIM: 18, shots: 108 } },
      ],
      'Boston College Eagles': [
        { name: 'Abby Newhook', position: 'C', number: 26, year: 'Jr.', stats: { goals: 24, assists: 26, points: 50, plusMinus: 22, PIM: 16, shots: 145 } },
        { name: 'Daryl Watts', position: 'C', number: 17, year: 'Sr.', stats: { goals: 26, assists: 30, points: 56, plusMinus: 24, PIM: 14, shots: 158 } },
        { name: 'Corinne Schroeder', position: 'G', number: 33, year: 'Sr.', stats: { GAA: '1.85', svPct: '.930', W: 24, L: 6, SO: 7 } },
        { name: 'Makenna Webster', position: 'LW', number: 9, year: 'Jr.', stats: { goals: 18, assists: 22, points: 40, plusMinus: 16, PIM: 24, shots: 118 } },
      ],
      'Quinnipiac Bobcats': [
        { name: 'Lexie Adzija', position: 'C', number: 22, year: 'Sr.', stats: { goals: 28, assists: 24, points: 52, plusMinus: 26, PIM: 18, shots: 162 } },
        { name: 'Kelly Babstock', position: 'RW', number: 7, year: 'Sr.', stats: { goals: 22, assists: 28, points: 50, plusMinus: 20, PIM: 16, shots: 138 } },
        { name: 'Abbie Ness', position: 'G', number: 1, year: 'Jr.', stats: { GAA: '1.72', svPct: '.935', W: 21, L: 7, SO: 6 } },
        { name: 'Emma Woods', position: 'D', number: 4, year: 'Jr.', stats: { goals: 8, assists: 24, points: 32, plusMinus: 18, PIM: 20, shots: 72 } },
      ],
      'Clarkson Golden Knights': [
        { name: 'Loren Gabel', position: 'LW', number: 11, year: 'Sr.', stats: { goals: 30, assists: 28, points: 58, plusMinus: 28, PIM: 12, shots: 178 } },
        { name: 'Genevieve Bannon', position: 'C', number: 9, year: 'Jr.', stats: { goals: 20, assists: 25, points: 45, plusMinus: 18, PIM: 22, shots: 128 } },
        { name: 'Shea Tiley', position: 'G', number: 30, year: 'Sr.', stats: { GAA: '1.65', svPct: '.938', W: 22, L: 6, SO: 8 } },
        { name: 'Savannah Harmon', position: 'D', number: 3, year: 'Sr.', stats: { goals: 6, assists: 22, points: 28, plusMinus: 20, PIM: 16, shots: 62 } },
      ],
    },
  },
  D2: {
    football: {
      'Grand Valley State Lakers': [
        { name: 'Cade Peterson', position: 'QB', number: 12, year: 'Jr.', stats: { passYds: 3245, passTD: 31, INT: 5, compPct: '69.2', rushYds: 185, rating: 158 } },
        { name: 'Tariq Reid', position: 'RB', number: 24, year: 'Sr.', stats: { rushYds: 1284, rushTD: 16, ypc: '6.2', rec: 32, recYds: 245 } },
        { name: 'Kade Carlson', position: 'WR', number: 1, year: 'Jr.', stats: { rec: 68, recYds: 945, recTD: 11, ypr: '13.9', targets: 92 } },
        { name: 'Nathan Broekema', position: 'LB', number: 55, year: 'Sr.', stats: { tackles: 102, sacks: 8, INT: 2, TFL: 15, FF: 3 } },
      ],
      'Ashland Eagles': [
        { name: 'Donovan Harden', position: 'QB', number: 8, year: 'Sr.', stats: { passYds: 3018, passTD: 28, INT: 6, compPct: '67.5', rushYds: 145, rating: 152 } },
        { name: 'Xavier Sherrill', position: 'RB', number: 22, year: 'Jr.', stats: { rushYds: 1188, rushTD: 14, ypc: '5.8', rec: 28, recYds: 205 } },
        { name: 'Marcus Johnson', position: 'WR', number: 5, year: 'Sr.', stats: { rec: 58, recYds: 812, recTD: 9, ypr: '14.0', targets: 80 } },
        { name: 'Tyler Maupin', position: 'DL', number: 90, year: 'Sr.', stats: { tackles: 68, sacks: 12, INT: 0, TFL: 18, FF: 4 } },
      ],
      'West Texas A&M Buffaloes': [
        { name: 'Jack Hooper', position: 'QB', number: 4, year: 'Sr.', stats: { passYds: 3488, passTD: 34, INT: 7, compPct: '68.8', rushYds: 235, rating: 162 } },
        { name: 'Elijah Clarkson', position: 'RB', number: 21, year: 'Jr.', stats: { rushYds: 1380, rushTD: 18, ypc: '6.4', rec: 35, recYds: 285 } },
        { name: 'DeQuinton Osborne', position: 'WR', number: 2, year: 'Sr.', stats: { rec: 78, recYds: 1088, recTD: 13, ypr: '14.0', targets: 102 } },
        { name: 'Kewlan Fobbs', position: 'LB', number: 48, year: 'Sr.', stats: { tackles: 95, sacks: 7, INT: 3, TFL: 16, FF: 2 } },
      ],
      'Bowie State Bulldogs': [
        { name: 'Amir Hall', position: 'QB', number: 4, year: 'Sr.', stats: { passYds: 3890, passTD: 40, INT: 8, compPct: '70.1', rushYds: 320, rating: 168 } },
        { name: 'Latrell Scott', position: 'WR', number: 1, year: 'Jr.', stats: { rec: 90, recYds: 1285, recTD: 14, ypr: '14.3', targets: 118 } },
        { name: 'Marcus Randall', position: 'RB', number: 22, year: 'So.', stats: { rushYds: 988, rushTD: 12, ypc: '5.9', rec: 25, recYds: 195 } },
        { name: 'Damian Jacobs', position: 'LB', number: 44, year: 'Sr.', stats: { tackles: 112, sacks: 10, INT: 4, TFL: 18, FF: 3 } },
      ],
    },
    baseball: {
      'West Texas A&M Buffaloes': [
        { name: 'Isaiah Ortega', position: 'OF', number: 7, year: 'Jr.', stats: { AVG: '.362', HR: 15, RBI: 62, OBP: '.448', SLG: '.622', SB: 14 } },
        { name: 'Cody Freeman', position: 'P', number: 20, year: 'Jr.', stats: { ERA: '2.68', W: 12, L: 2, SO: 118, IP: 95, WHIP: '1.02' } },
        { name: 'Dylan Ray', position: '3B', number: 35, year: 'Sr.', stats: { AVG: '.335', HR: 12, RBI: 55, OBP: '.418', SLG: '.578', SB: 6 } },
        { name: 'Caleb Reyes', position: 'SS', number: 11, year: 'Jr.', stats: { AVG: '.318', HR: 8, RBI: 44, OBP: '.400', SLG: '.525', SB: 22 } },
      ],
    },
  },
  D3: {
    football: {
      'Wisconsin-Whitewater Warhawks': [
        { name: 'Evan Lewandowski', position: 'QB', number: 8, year: 'Jr.', stats: { passYds: 2845, passTD: 28, INT: 4, compPct: '66.8', rushYds: 288, rating: 160 } },
        { name: 'Bryce Thompson', position: 'RB', number: 32, year: 'Sr.', stats: { rushYds: 1388, rushTD: 18, ypc: '6.5', rec: 28, recYds: 215 } },
        { name: 'Carter Henning', position: 'WR', number: 14, year: 'Jr.', stats: { rec: 62, recYds: 892, recTD: 12, ypr: '14.4', targets: 82 } },
        { name: 'Brett Kasper', position: 'LB', number: 42, year: 'Sr.', stats: { tackles: 108, sacks: 9, INT: 2, TFL: 18, FF: 4 } },
      ],
      'Mount Union Raiders': [
        { name: 'Braxton Plunk', position: 'QB', number: 2, year: 'Jr.', stats: { passYds: 3112, passTD: 32, INT: 5, compPct: '68.5', rushYds: 245, rating: 162 } },
        { name: 'Lamar Thompkins', position: 'RB', number: 21, year: 'Sr.', stats: { rushYds: 1558, rushTD: 22, ypc: '7.0', rec: 22, recYds: 185 } },
        { name: 'Caden Wahl', position: 'WR', number: 6, year: 'Jr.', stats: { rec: 72, recYds: 1002, recTD: 14, ypr: '13.9', targets: 98 } },
        { name: 'James Huff', position: 'DL', number: 92, year: 'Sr.', stats: { tackles: 62, sacks: 14, INT: 0, TFL: 22, FF: 5 } },
      ],
      'St. John\'s (MN) Johnnies': [
        { name: 'Jack Gerzin', position: 'QB', number: 12, year: 'Sr.', stats: { passYds: 2688, passTD: 25, INT: 5, compPct: '65.2', rushYds: 322, rating: 154 } },
        { name: 'Joe Rossi', position: 'RB', number: 33, year: 'Jr.', stats: { rushYds: 1122, rushTD: 14, ypc: '5.9', rec: 26, recYds: 210 } },
        { name: 'Wyatt Haas', position: 'WR', number: 8, year: 'Sr.', stats: { rec: 55, recYds: 762, recTD: 10, ypr: '13.9', targets: 75 } },
        { name: 'Tommy Bahr', position: 'LB', number: 44, year: 'Sr.', stats: { tackles: 98, sacks: 6, INT: 3, TFL: 14, FF: 2 } },
      ],
      'Amherst Mammoths': [
        { name: 'Tanner Koziol', position: 'QB', number: 10, year: 'Jr.', stats: { passYds: 2415, passTD: 22, INT: 4, compPct: '64.8', rushYds: 285, rating: 150 } },
        { name: 'Dawit Teclezion', position: 'RB', number: 28, year: 'Sr.', stats: { rushYds: 1088, rushTD: 13, ypc: '5.7', rec: 22, recYds: 178 } },
        { name: 'Jack Mahoney', position: 'WR', number: 4, year: 'Jr.', stats: { rec: 52, recYds: 715, recTD: 9, ypr: '13.8', targets: 72 } },
        { name: 'James Tynan', position: 'LB', number: 55, year: 'Sr.', stats: { tackles: 92, sacks: 5, INT: 2, TFL: 12, FF: 2 } },
      ],
    },
    baseball: {
      'Mount Union Raiders': [
        { name: 'Josh Ahearne', position: 'OF', number: 4, year: 'Jr.', stats: { AVG: '.388', HR: 14, RBI: 58, OBP: '.475', SLG: '.648', SB: 18 } },
        { name: 'Nick Heitkamp', position: 'P', number: 24, year: 'Jr.', stats: { ERA: '1.98', W: 11, L: 1, SO: 108, IP: 86, WHIP: '0.88' } },
        { name: 'Jake Walker', position: 'C', number: 12, year: 'Sr.', stats: { AVG: '.342', HR: 8, RBI: 48, OBP: '.430', SLG: '.548', SB: 4 } },
        { name: 'Garrett Brown', position: 'SS', number: 6, year: 'Jr.', stats: { AVG: '.358', HR: 6, RBI: 40, OBP: '.448', SLG: '.525', SB: 12 } },
      ],
    },
    hockey: {
      'Middlebury Panthers': [
        { name: 'Ben Brar', position: 'C', number: 12, year: 'Sr.', stats: { goals: 22, assists: 28, points: 50, plusMinus: 22, PIM: 18, shots: 142 } },
        { name: 'Sam Tucker', position: 'G', number: 30, year: 'Sr.', stats: { GAA: '1.72', svPct: '.932', W: 20, L: 4, SO: 4 } },
        { name: 'Will Crain', position: 'D', number: 4, year: 'Jr.', stats: { goals: 6, assists: 20, points: 26, plusMinus: 16, PIM: 22, shots: 62 } },
        { name: 'Alex Faust', position: 'LW', number: 8, year: 'Jr.', stats: { goals: 18, assists: 20, points: 38, plusMinus: 14, PIM: 24, shots: 118 } },
      ],
    },
    volleyball: {
      'Wisconsin-Stevens Point Pointers': [
        { name: 'Katelyn Bauer', position: 'OH', number: 14, year: 'Sr.', stats: { kills: 365, aces: 32, digs: 248, blocks: 38, assists: 14, hitPct: '.278' } },
        { name: 'Megan Kaminski', position: 'MB', number: 2, year: 'Jr.', stats: { kills: 252, aces: 10, digs: 58, blocks: 132, assists: 6, hitPct: '.368' } },
        { name: 'Sarah Dietz', position: 'S', number: 3, year: 'Sr.', stats: { kills: 18, aces: 28, digs: 265, blocks: 16, assists: 1042, hitPct: '.095' } },
        { name: 'Lexi Grabow', position: 'L', number: 1, year: 'So.', stats: { kills: 8, aces: 22, digs: 388, blocks: 2, assists: 25, hitPct: '.042' } },
      ],
    },
  },
  NAIA: {
    football: {
      'Marian Knights': [
        { name: 'Rodney Jones', position: 'QB', number: 1, year: 'Sr.', stats: { passYds: 3655, passTD: 38, INT: 6, compPct: '68.5', rushYds: 285, rating: 164 } },
        { name: 'Antron Keyes', position: 'RB', number: 24, year: 'Jr.', stats: { rushYds: 1488, rushTD: 20, ypc: '6.8', rec: 28, recYds: 228 } },
        { name: 'James Adams', position: 'WR', number: 5, year: 'Sr.', stats: { rec: 82, recYds: 1198, recTD: 14, ypr: '14.6', targets: 108 } },
        { name: 'Devon Washington', position: 'LB', number: 44, year: 'Sr.', stats: { tackles: 118, sacks: 12, INT: 4, TFL: 20, FF: 5 } },
      ],
      'Northwestern (IA) Red Raiders': [
        { name: 'Cade Moser', position: 'QB', number: 10, year: 'Jr.', stats: { passYds: 3288, passTD: 32, INT: 7, compPct: '66.8', rushYds: 358, rating: 158 } },
        { name: 'Isaac Copeland', position: 'RB', number: 22, year: 'Sr.', stats: { rushYds: 1625, rushTD: 22, ypc: '7.2', rec: 24, recYds: 195 } },
        { name: 'Josh Lozano', position: 'WR', number: 8, year: 'Jr.', stats: { rec: 70, recYds: 985, recTD: 12, ypr: '14.1', targets: 95 } },
        { name: 'Drew Hess', position: 'DL', number: 92, year: 'Sr.', stats: { tackles: 72, sacks: 15, INT: 0, TFL: 24, FF: 6 } },
      ],
      'Missouri Valley Vikings': [
        { name: 'Ean Balhon', position: 'QB', number: 14, year: 'Sr.', stats: { passYds: 3122, passTD: 30, INT: 5, compPct: '67.2', rushYds: 425, rating: 162 } },
        { name: 'Latravis Cole', position: 'RB', number: 5, year: 'Jr.', stats: { rushYds: 1555, rushTD: 21, ypc: '7.0', rec: 30, recYds: 245 } },
        { name: 'Malik McDowell', position: 'WR', number: 2, year: 'Sr.', stats: { rec: 65, recYds: 922, recTD: 11, ypr: '14.2', targets: 88 } },
        { name: 'Chase Hailey', position: 'LB', number: 35, year: 'Sr.', stats: { tackles: 105, sacks: 9, INT: 3, TFL: 18, FF: 4 } },
      ],
    },
    baseball: {
      'Indiana Wesleyan Wildcats': [
        { name: 'Cole Stauffer', position: 'P', number: 18, year: 'Jr.', stats: { ERA: '1.88', W: 12, L: 1, SO: 122, IP: 96, WHIP: '0.85' } },
        { name: 'Evan Rohleder', position: 'OF', number: 4, year: 'Sr.', stats: { AVG: '.395', HR: 16, RBI: 68, OBP: '.488', SLG: '.672', SB: 22 } },
        { name: 'Blake Headings', position: 'SS', number: 12, year: 'Jr.', stats: { AVG: '.358', HR: 8, RBI: 52, OBP: '.442', SLG: '.545', SB: 15 } },
        { name: 'Austin Colber', position: '1B', number: 25, year: 'Sr.', stats: { AVG: '.342', HR: 14, RBI: 62, OBP: '.428', SLG: '.598', SB: 5 } },
      ],
      'Morningside Mustangs': [
        { name: 'Jake Hauge', position: 'P', number: 20, year: 'Sr.', stats: { ERA: '2.25', W: 11, L: 2, SO: 108, IP: 88, WHIP: '0.98' } },
        { name: 'Anthony Bates', position: 'OF', number: 7, year: 'Jr.', stats: { AVG: '.378', HR: 14, RBI: 60, OBP: '.468', SLG: '.642', SB: 18 } },
        { name: 'Tyler Bruhn', position: '3B', number: 32, year: 'Sr.', stats: { AVG: '.345', HR: 10, RBI: 55, OBP: '.428', SLG: '.565', SB: 8 } },
        { name: 'Wil Ryman', position: 'C', number: 11, year: 'Jr.', stats: { AVG: '.325', HR: 9, RBI: 48, OBP: '.412', SLG: '.535', SB: 3 } },
      ],
    },
    volleyball: {
      'Dordt Defenders': [
        { name: 'Emma Renes', position: 'OH', number: 4, year: 'Sr.', stats: { kills: 388, aces: 42, digs: 265, blocks: 38, assists: 18, hitPct: '.295' } },
        { name: 'Sarah Grotenhuis', position: 'MB', number: 12, year: 'Jr.', stats: { kills: 265, aces: 12, digs: 58, blocks: 148, assists: 5, hitPct: '.392' } },
        { name: 'Kayla Vande Berg', position: 'S', number: 1, year: 'Sr.', stats: { kills: 18, aces: 30, digs: 280, blocks: 15, assists: 1148, hitPct: '.088' } },
        { name: 'Whitney Brower', position: 'L', number: 22, year: 'Jr.', stats: { kills: 6, aces: 25, digs: 402, blocks: 2, assists: 18, hitPct: '.038' } },
      ],
    },
    tennis: {
      'Morningside Mustangs': [
        { name: 'Anna Bauer', position: 'Singles #1', number: 1, year: 'Sr.', stats: { wins: 17, losses: 3, setsWon: 38, aces: 65, winPct: '85.0' } },
        { name: 'Leah Stendel', position: 'Singles #2', number: 2, year: 'Jr.', stats: { wins: 15, losses: 5, setsWon: 34, aces: 55, winPct: '75.0' } },
        { name: 'Madison Slater', position: 'Doubles #1', number: 1, year: 'Sr.', stats: { wins: 16, losses: 4, setsWon: 36, aces: 48, winPct: '80.0' } },
        { name: 'Kally Jipp', position: 'Singles #3', number: 3, year: 'So.', stats: { wins: 13, losses: 7, setsWon: 30, aces: 42, winPct: '65.0' } },
      ],
    },
  },
  JUCO: {
    football: {
      'Hutchinson Blue Dragons': [
        { name: 'Katin Houser', position: 'QB', number: 2, year: 'Fr.', stats: { passYds: 2988, passTD: 32, INT: 4, compPct: '70.2', rushYds: 245, rating: 168 } },
        { name: 'D\'Mar Johnson', position: 'RB', number: 20, year: 'Fr.', stats: { rushYds: 1485, rushTD: 20, ypc: '7.2', rec: 25, recYds: 205 } },
        { name: 'Kevin Coleman', position: 'WR', number: 4, year: 'So.', stats: { rec: 78, recYds: 1088, recTD: 13, ypr: '14.0', targets: 102 } },
        { name: 'Devin Richardson', position: 'LB', number: 44, year: 'So.', stats: { tackles: 88, sacks: 8, INT: 3, TFL: 15, FF: 3 } },
      ],
      'East Mississippi Lions': [
        { name: 'Shadeurion Kelly', position: 'QB', number: 2, year: 'So.', stats: { passYds: 3122, passTD: 35, INT: 5, compPct: '68.8', rushYds: 285, rating: 164 } },
        { name: 'Lamont Latimer', position: 'RB', number: 22, year: 'Fr.', stats: { rushYds: 1622, rushTD: 24, ypc: '7.8', rec: 20, recYds: 165 } },
        { name: 'Terry Smith Jr.', position: 'WR', number: 5, year: 'So.', stats: { rec: 85, recYds: 1188, recTD: 15, ypr: '14.0', targets: 110 } },
        { name: 'Darius Robinson', position: 'DL', number: 91, year: 'So.', stats: { tackles: 58, sacks: 12, INT: 0, TFL: 20, FF: 5 } },
      ],
      'Iowa Western Reivers': [
        { name: 'Marcus Crowley', position: 'RB', number: 1, year: 'Fr.', stats: { rushYds: 1388, rushTD: 18, ypc: '6.5', rec: 28, recYds: 225 } },
        { name: 'Chase Williams', position: 'QB', number: 14, year: 'So.', stats: { passYds: 2845, passTD: 28, INT: 7, compPct: '66.2', rushYds: 312, rating: 152 } },
        { name: 'Donovan Cook', position: 'WR', number: 3, year: 'Fr.', stats: { rec: 65, recYds: 912, recTD: 12, ypr: '14.0', targets: 88 } },
        { name: 'Jaylen Green', position: 'CB', number: 25, year: 'So.', stats: { tackles: 62, sacks: 2, INT: 8, TFL: 6, FF: 2 } },
      ],
      'Blinn Buccaneers': [
        { name: 'Lan Larison', position: 'QB', number: 4, year: 'So.', stats: { passYds: 3288, passTD: 34, INT: 6, compPct: '69.5', rushYds: 265, rating: 160 } },
        { name: 'Tramon Martin', position: 'WR', number: 2, year: 'So.', stats: { rec: 90, recYds: 1258, recTD: 14, ypr: '14.0', targets: 118 } },
        { name: 'DeJuan Strickland', position: 'RB', number: 21, year: 'Fr.', stats: { rushYds: 1285, rushTD: 16, ypc: '6.5', rec: 30, recYds: 245 } },
        { name: 'Jevyon Ducker', position: 'LB', number: 52, year: 'So.', stats: { tackles: 95, sacks: 10, INT: 2, TFL: 18, FF: 4 } },
      ],
    },
    baseball: {
      'Weatherford Coyotes': [
        { name: 'Chad Minchey', position: 'P', number: 18, year: 'So.', stats: { ERA: '1.65', W: 14, L: 1, SO: 138, IP: 108, WHIP: '0.78' } },
        { name: 'Marcus Lee', position: 'OF', number: 7, year: 'Fr.', stats: { AVG: '.412', HR: 18, RBI: 72, OBP: '.508', SLG: '.725', SB: 24 } },
        { name: 'Ryan Kutt', position: '3B', number: 22, year: 'So.', stats: { AVG: '.368', HR: 12, RBI: 60, OBP: '.455', SLG: '.612', SB: 8 } },
        { name: 'Austin Sexton', position: 'SS', number: 5, year: 'Fr.', stats: { AVG: '.342', HR: 8, RBI: 48, OBP: '.425', SLG: '.545', SB: 18 } },
      ],
      'Fresno City Rams': [
        { name: 'Alex Garza', position: 'P', number: 32, year: 'So.', stats: { ERA: '1.92', W: 12, L: 2, SO: 118, IP: 94, WHIP: '0.88' } },
        { name: 'Daniel Herrera', position: 'OF', number: 12, year: 'Fr.', stats: { AVG: '.385', HR: 15, RBI: 64, OBP: '.475', SLG: '.662', SB: 20 } },
        { name: 'Miguel Santos', position: '1B', number: 25, year: 'So.', stats: { AVG: '.352', HR: 11, RBI: 55, OBP: '.438', SLG: '.585', SB: 5 } },
        { name: 'Carlos Mendoza', position: '2B', number: 4, year: 'Fr.', stats: { AVG: '.328', HR: 6, RBI: 42, OBP: '.412', SLG: '.502', SB: 28 } },
      ],
    },
    volleyball: {
      'Tyler Apaches': [
        { name: 'Amara Johnson', position: 'OH', number: 4, year: 'Fr.', stats: { kills: 342, aces: 38, digs: 238, blocks: 35, assists: 15, hitPct: '.282' } },
        { name: 'Destiny Williams', position: 'MB', number: 12, year: 'So.', stats: { kills: 245, aces: 12, digs: 52, blocks: 128, assists: 5, hitPct: '.365' } },
        { name: 'Kayla Reed', position: 'S', number: 2, year: 'So.', stats: { kills: 15, aces: 25, digs: 248, blocks: 12, assists: 988, hitPct: '.082' } },
        { name: 'Tia Thomas', position: 'L', number: 22, year: 'Fr.', stats: { kills: 5, aces: 18, digs: 365, blocks: 1, assists: 12, hitPct: '.035' } },
      ],
    },
  },
};

export function getPlayersForTeam(tier, sport, teamName) {
  const tierData = REAL_PLAYERS[tier];
  if (!tierData) return null;
  const sportData = tierData[sport];
  if (!sportData) return null;
  return sportData[teamName] || null;
}
