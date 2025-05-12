/**This is my 1st attempt at the power-of-thor-episode-1 Puzzle. It is only the 3rd puzzle I have ever done. First Try 12 May 2025
 * Address of the puzzle: https://www.codingame.com/ide/puzzle/power-of-thor-episode-1
 *  Current Progress: 2/4 Tests solved
 *  Problem discovered so far: 
 *    -The Terrain is not a rectangle but a losange. =Character goes out of bounds even within the "limit".
 *      -> Possible solution: write out all the edges of the map =excessive
 *        -> Perhaps there is a function that i don't know yet that can help this problem. SEEK MORE INFORMATION.
 *        -> Perhaps calculate the angle to aim more directly at the target? Triangle? But how to implement in a loop?
 *    -Character goes in a diagonal but doesn't seem to change from first direction?
 *  Problems solved: Following the Progress of the character, wasn't updating with each cycle.
 *     =Analysis :   The variables ThorX ThorY were being reinitated on each loop instead of being updated.
 *     -> Solution : Moved the declaration of the Variable ThorX ThorY outside of the loop.
**/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position
let thorY = parseInt(inputs[2]);
let thorX = parseInt(inputs[3]);
let ThorX=parseInt(inputs[2]);    let ThorY=parseInt(inputs[3]);  //Let's Show Where Thor is in real time
/**const testE = (lightX > initialTx); const testW = ((lightX < initialTx)); const testS = ((lightY > initialTy)); const testN = ((lightY < initialTy))**/

/* 2do code that keeps track of the position of Thor, We will call it ThorX ThorY
*inside the fonction convert initialTx=ThorX initialTy=ThorY
*Limits x0 y0  && x  "X=39,Y=17"
E = +1 X 
W = -1 X
S = -1 Y
N = +1 Y
const testEe = (ThorX< lightX)
**/

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line. =Energy

    let MoveX="";    let MoveY="";  //Our answer goes here, so we can combine it.
    const testE = ((lightX > ThorX) && ThorX <= 39)
    const testW = ((lightX < ThorX) && ThorX >0)
    const testS = ((lightY > ThorY) && ThorY <= 17)
    const testN = ((lightY < ThorY) && ThorY >= 0)
     if (remainingTurns > 0) {
        if  (testE)                        {ThorX++; MoveX="E";  console.error(`Thor b4 E: (ThorX: ${ThorX}, ThorY: ${ThorY})` );}
            else if  (testW)               {ThorX--; MoveX="W";  console.error(`Thor b4 W: (ThorX: ${ThorX}, ThorY: ${ThorY})` );}
     
        if (testS)                         {ThorY -= 1; MoveY="S";  console.error(`Thor b4 S : (ThorX: ${ThorX}, ThorY: ${ThorY})` );}
            else if (testN)                {ThorY += 1; MoveY="N";  console.error(`Thor b4 N : (ThorX: ${ThorX}, ThorY: ${ThorY})` );}
     }
     console.log(MoveY+MoveX)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.error(`Thor: (initialTx: ${initialTx}, initialTy: ${initialTy}), Light: (lightX ${lightX}, lightY ${lightY})`);
    console.error( "X: " + ThorX + "Y "+ ThorY + "Energy: " + remainingTurns);
    console.error(`input: ${inputs}`);
    console.error(("go E: " + testE)+(" go Wz: "+ testW));
    console.error(("go S: " + testS)+ (" go Nn: " + testN));
}
