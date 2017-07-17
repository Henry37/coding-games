/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


function findLetter(letter){
	var lstr = letter;
	var ascii = parseInt(lstr.charCodeAt()) - 65;
	var index = (ascii > 25 || ascii < 0) ? 26 : ascii;	
	return index;
}

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline().toUpperCase();

for (var i = 0; i < H; i++) {
    var ROW = readline();
    var answer = "";
    for(var j = 0; j < T.length; j++){
		var index = findLetter(T[j]);
		answer += ROW.slice(index*L,(index + 1)*L);
	}
	print (answer);
}
   