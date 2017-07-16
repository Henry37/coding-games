/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var currentX = initialTX;
var currentY = initialTY;

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    var dx = lightX - currentX;
    var dy = lightY - currentY;
    var direction = 'E';
       
    if(dy === 0){
        if(dx > 0){
            direction = 'E';
            currentX ++;
        }else{
            direction = 'W';
            currentX --;
        }
    }else if(dy > 0){
        if(dx === 0){
            direction = 'S';
            currentY ++;
        }else if(dx > 0){
            direction = 'SE';
            currentY ++;
            currentX ++;
        }else if(dx < 0){
            direction = 'SW';
            currentY ++;
            currentX --;
        }
    }else if(dy < 0){
        if(dx === 0){
            direction = 'N';
            currentY --;
        }else if(dx > 0){
            direction = 'NE';
            currentX ++;
            currentY --;
        }else if(dx < 0){
            direction = 'NW';
            currentY --;
            currentX --;
        }
    }
    
    


    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction);
}