/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var first_flag = true;
var boost_flag = true;
var lastPointX = 0;
var lastPointY = 0;
var currentNextPointX = 0;
var currentNextPointY = 0;

// function fo r distance

function distance(x1, y1, x2, y2){
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    var x = parseInt(inputs[0]);
    var y = parseInt(inputs[1]);
    var nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    var nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    var nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    var opponentX = parseInt(inputs[0]);
    var opponentY = parseInt(inputs[1]);
    var thrust = 100;
    var distanceToNextPoint = distance(x, y, nextCheckpointX, nextCheckpointY);
    var distanceToOpponent = distance(x, y, opponentX, opponentY);
    var distanceOpponentToNextPoint = distance(opponentX, opponentY, nextCheckpointX, nextCheckpointY);
    var change_flag = false;
  
    if(first_flag){
        first_flag = false;
        currentNextPointX = nextCheckpointX;
        currentNextPointY = nextCheckpointY;
        lastPointX = x;
        lastPointY = y;
    }else if((currentNextPointX != nextCheckpointX) && (currentNextPointY != nextCheckpointY)){
        change_flag = true;
        lastPointX = currentNextPointX;
        lastPointY = currentNextPointY;    
        currentNextPointX = nextCheckpointX;
        currentNextPointY = nextCheckpointY;
    }else{
        change_flag = false;
    }
    

    if(distanceToOpponent < 300 && distanceOpponentToNextPoint < distanceToNextPoint){
        thrust = 100;
        nextCheckpointX = opponentX;
        nextCheckpointY = opponentY;
    }else if(nextCheckpointAngle > 90 || nextCheckpointAngle <-90){
        printErr("big angle");
        thrust = 0;
    }else if(distanceToNextPoint > 3000){
        if(boost_flag){
            thrust = "BOOST";
            boost_flag = false; 
        }else{
            thrust = 100;
        }
    }else if(distanceToNextPoint > 2000 && Math.abs(nextCheckpointAngle) < 15){
        if(boost_flag){
            thrust = "BOOST";
            boost_flag = false; 
        }else{
            thrust = 100;
        }
    }else if(Math.abs(nextCheckpointAngle) < 10 && distanceToNextPoint > 1000){
        if(boost_flag){
            thrust = "BOOST";
            boost_flag = false; 
        }else{
            thrust = 100;
        }
    }else if(nextCheckpointDist <= 1000 || Math.abs(nextCheckpointAngle) > 30){
        printErr("near checkpoint");
        var thrust1 = (nextCheckpointDist / 10 - 12) > 0 ? parseInt(nextCheckpointDist / 10 - 12) : 0;
        var thrust2 = 90 - Math.abs(nextCheckpointAngle);
        thrust = thrust1 < thrust2 ? thrust1 : thrust2;
    }



    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    print(nextCheckpointX + ' ' + nextCheckpointY + ' '+ thrust);
}

//not pass
