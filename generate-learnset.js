const fs = require('fs');
const ps = require('process');

var targetGen = ps.argv[2]; //index 2 contains the first argument

if (targetGen >= 1) {
	var moveList = require('./data/learnsets.js');
	var newMoveList = new Object();

	for (var mon in moveList) {//goes through each Pokémon
		newMoveList[mon] = new Object();
		newMoveList[mon].level = new Object();
		newMoveList[mon].tm = new Array();
		newMoveList[mon].egg = new Array();
		newMoveList[mon].tutor = new Array();
		newMoveList[mon].event = new Array();
		
		for (var move in moveList[mon]) {//goes through each move
			for (var valKey in moveList[mon][move]) {//goes through each method of obtaining
				var moveVal = moveList[mon][move][valKey];
				
				if (moveVal.substr(0,1) == targetGen) {
					//puts move in array based on method of obtaining
					if (moveVal.substr(1,1) == 'L') {
						var level = parseInt(moveVal.substr(2,3));
						newMoveList[mon].level[level] = move;
					} else if (moveVal.substr(1,1) == 'M') {
						newMoveList[mon].tm.push(move);
					} else if (moveVal.substr(1,1) == 'E') {
						newMoveList[mon].egg.push(move);
					} else if (moveVal.substr(1,1) == 'T') {
						newMoveList[mon].tutor.push(move);
					} else if (moveVal.substr(1,1) == 'S') {
						newMoveList[mon].event.push(move);
					} else {
						console.log('error checking for move types not accounted for:', moveVal.substr(1,1), 'data:', mon, move, valKey, moveVal);
					}
				}
			}
		}
	}
	
	fs.writeFileSync('./output/gen' + targetGen + '.json', JSON.stringify(newMoveList));

} else {
	console.error('first argument must be a generation number');
	if (targetGen) console.error(targetGen, 'was given');
}