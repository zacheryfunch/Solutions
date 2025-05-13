/**This is my 1st attempt at the power-of-thor-episode-1 Puzzle. It is only the 3rd puzzle I have ever done. First Try 12 May 2025
 * Address of the puzzle: https://www.codingame.com/ide/puzzle/power-of-thor-episode-1
 *  Current Progress: 2/4 Tests solved
 *  Problem discovered so far: 
 *    -Case3 Failure out of bounds -> Perhaps The Terrain is not a rectangle but a losange. =it seems the Character goes out of bounds even within the "limit".
 *      -> Possible solution: write out all the edges of the map =excessive
 *        -> Perhaps there is a function that i don't know yet that can help this problem. SEEK MORE INFORMATION.
 *    -Character goes in a diagonal but doesn't seem to change from first direction? (Character's X Y Coordinates not updating)
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
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position 
let ThorX=parseInt(inputs[2]);    let ThorY=parseInt(inputs[3]);  //X Y Coordinates for Thor updatable value

/**Limits x0 y0  && x  "X=39,Y=17"
E = +1 X 
W = -1 X
S = -1 Y
N = +1 Y

**/

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line. =Energy

    let MoveX="";    let MoveY="";  //Our answer goes here, so we can combine it.
    const testE = ((lightX > ThorX) && ThorX <= 37);
    const testW = ((lightX < ThorX) && ThorX >0);
    const testS = ((lightY > ThorY) && ThorY <= 10);
    const testSs = (ThorY <= 10);
    const testN = ((lightY < ThorY) && ThorY >= 0);
     if (remainingTurns > 0) {
        if  (testE)                        {ThorX++; MoveX="E";}
            else if  (testW)               {ThorX--; MoveX="W";}
     
        if (testS)                         {ThorY -= 1; MoveY="S";}
            else if (testN)                {ThorY += 1; MoveY="N";}
     }
     console.log(MoveY+MoveX);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.error( `Thor's Position: (X:${ThorX}, Y:${ThorY})` +" Direction: " + MoveY+MoveX+ " Energy:" + remainingTurns)
    console.error("Conditionals: E/+X?:" + testE +" W/-X?:"+ testW + " S/-Y?:" + testS+ "SLimit:" + testSs + " N/+Y?:" + testN);
    console.error(`Inputs: (initialTx: ${initialTx}, initialTy: ${initialTy}), Light: (lightX ${lightX}, lightY ${lightY})`);
    console.error(`Raw input: ${inputs}`);
}
