<!DOCTYPE HTML>
<script src="data/modified.js"></script>
<script>
var targetGen = '6';//choose which gen's data to go by
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
					document.write('###### '+mon+' '+move+' '+valKey+' '+moveVal+' ######<br>');//error checking for move types not accounted for
				}
			}
		}
	}
}

document.write(JSON.stringify(newMoveList));

/*
 * This function used to be used instead of JSON.stringify() because I didn't know that existed at the time.
 * I commented it out rather than deleted because I like the fact I actually made this.
 * The only benefit really is that my function doesn't put double quotes everywhere.
 * However that does mean that my JSON output only works with JavaScript, so it's better now.
 * It now also takes up only 1 line and doesn't have all my neat blankspace, saving storage.

function objectToString(input) {//recursive function for creating javascript of an object/array structure
	if (Object.prototype.toString.call(input) === '[object Array]' ) {
		var output = '';
		for (var key in input) {
			output += objectToString(input[key]) + ', ';
		}
		output = output.substr(0,output.length-2);
		output = '[' + output + ']';
		
		return output;
		
	} else if (typeof input === 'object') {
		var output = '';
		for (var key in input) {
			output += key + ': ' + objectToString(input[key]) + ', ';
		}
		output = output.substr(0,output.length-2);
		output = '{' + output + '}<br>';
		
		return output;
		
	} else if (typeof input === 'string') {
		return "'" + input + "'";
		
	} else {
		return input;
	}
}
*/
</script>
