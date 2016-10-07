const fs = require('fs');
const ps = require('process');

var targetGen = ps.argv[2]; //index 2 contains the first argument

if (targetGen >= 1) {
    var moveList = require('./data/learnsets.js');
    var newMoveList = {};

    for (var mon in moveList) {//goes through each Pokémon
        newMoveList[mon] = {
            level: {},
            tm: [],
            egg: [],
            tutor: [],
            dreamWorld: [],
            event: []
        };
        
        var move, valKey, moveVal, moveType, moveCount;
        moveCount = 0;
        for (move in moveList[mon]) {//goes through each move
            for (valKey in moveList[mon][move]) {//goes through each method of obtaining
                moveVal = moveList[mon][move][valKey];
                
                if (moveVal.substr(0,1) == targetGen) {//puts move in array based on method of obtaining
                    moveCount++;
                    moveType = moveVal.substr(1,1);
                    
                    if      (moveType === 'L') newMoveList[mon].level[parseInt(moveVal.substr(2,3))] = move;
                    else if (moveType === 'M') newMoveList[mon].tm.push(move);
                    else if (moveType === 'E') newMoveList[mon].egg.push(move);
                    else if (moveType === 'T') newMoveList[mon].tutor.push(move);
                    else if (moveType === 'D') newMoveList[mon].dreamWorld.push(move);
                    else if (moveType === 'S') newMoveList[mon].event.push(move);
                    else {
                        console.error('error checking for move types not accounted for:', moveType, 'data:', mon, move, valKey, moveVal);
                    }
                    //the switch case version looked too ugly
                }
            }
        }

        if (moveCount === 0) delete newMoveList[mon]; //remove Pokémon that don't learn any moves in targetGen
    }
    
    fs.writeFileSync('./output/gen' + targetGen + '.json', JSON.stringify(newMoveList));

} else {
    console.error('first argument must be a generation number');
    if (targetGen) console.error(targetGen, 'was given');
}