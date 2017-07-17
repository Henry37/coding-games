/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
var result = 0;
// Write an action using print()
// To debug: printErr('Debug messages...');
if(0 === n){
    result = 0;
}else{
    var tempStr = temps.split(" ");
    result = parseInt(tempStr[0]);
    for(var i = 1; i < tempStr.length; i++){
    	var newNumber = parseInt(tempStr[i]);
    	var newAbs = Math.abs(newNumber);
    	var resultAbs = Math.abs(result);
    	if(resultAbs > newAbs){
    		result = newNumber;
    	}else if(resultAbs === newAbs && newNumber > 0){
    		result = newNumber;
    	}
    }
}



print(result);