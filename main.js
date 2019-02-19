"use strict";
let gameOn = prompt("Would you like to play a game? Yes or no.");

if (gameOn === "yes" || gameOn === "Yes" || gameOn === "YES") {
    let userName = prompt("Please enter your name.");
    console.log(`Let's begin, ${userName}.`);
    let grantHp = 10;
    let userHp = 40;
    let userWins = 0;

    console.log(`You start with ${userHp}HP and only 1 life.`);
    console.log(`Grant starts with ${grantHp}HP and 3 lives.`);
    
    while (userHp >= 0 && userWins < 3) {
        // console.log(`DEBUGGING (start of loop): User HP: ${userHp} Grant HP: ${grantHp} userWins: ${userWins}`);
        if (grantHp <= 0) { // You beat Grant this round
            grantHp = 10;
            userWins += 1;
            console.log(`Grant has been defeated. He revives with ${grantHp}HP. The user now has ${userWins} wins.`);
        } else {
            // let hpToRemove = ;
            // console.log(`${userName} and Grant lose ${hpToRemove}HP.`);
            grantHp = grantHp - Math.floor(Math.random() * 2 + 1);
            userHp = userHp - Math.floor(Math.random() * 2 + 1); 
            console.log(`${userName} has ${userHp}HP remaining.`);
            console.log(`Grant has ${grantHp}HP remaining.`);
        }
        // console.log(`DEBUGGING (end of loop): User HP: ${userHp} Grant HP: ${grantHp} userWins: ${userWins}`);
    }

    if (userWins === 3) {
        console.log(`${userName} has beaten the almighty Grant!`); 
    }

    if (userHp <= 0) {
        console.log(`${userName} has lost the game.`);
    }
    // console.log(`DEBUGGING (out of loop): User HP: ${userHp} Grant HP: ${grantHp} userWins: ${userWins}`);
} else {
    console.log(`You said: ${gameOn}. That was not the right way to start a game.`);
}