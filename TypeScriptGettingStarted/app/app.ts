/*
import {HighScorer, Player} from "./classes/player";
import {add, getInputValue, logMessage1, logMessage2, logPlayer, postScore, squareIt} from "./utility";

function startGame() {
    // Initialize the function
    let playerName: string | undefined = getInputValue('playername');
    console.log(logPlayer(playerName));

    // let messageElement = document.getElementById('messages');
    // messageElement!.innerText = 'Welcome to MultiMath! Starting new game....';
    postScore(100, playerName);  // this will console normal message
    postScore(-5, playerName);  // this will console error

    // Demonstrate te call to arrow function
    logMessage1('YO!');
    logMessage2('YO! YO!');
    console.log(squareIt(2));
    console.log(add(2, 4));
    // End demonstration of arrow function

    // Demo interfaces
    /!*let myResult: Result = {
        playerName: 'Sagar',
        score: 5,
        problemCount: 5,
        factor: 7
    };

    let player: Person = {
        name: 'Sagar',
        formatName: () => 'Saga'
    };
    console.log(myResult);
    console.log(player);
    console.log(player.formatName());*!/
    // End demo of interfaces

    // Demo Class
    const firstPlayer: Player = new Player('Lanier', 230);
    console.log(firstPlayer.playerInfo());

    const highScorer: HighScorer = new HighScorer('Sagar', 230, 300);
    console.log(highScorer.highScorerInfo())
    // End demo class
}


document!.getElementById('startGame')!.addEventListener('click', startGame);
*/

import {Game} from "./game";
import {Player} from "./classes/player";
import {getInputValue} from "./utility";

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player("fuck", 2,2 );
    player.name = getInputValue('playername');

    const problemCount: number = Number(getInputValue('problemCount'));
    const factor: number = Number(getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});