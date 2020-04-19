import {Person} from "../interface/person";

export class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    constructor(name: string, highScore: number, age: number) {
        this.name = name;
        this.age = age;
        this.highScore = highScore;
    }

    formatName(): string {
        return this.name.toUpperCase()
    }

    playerInfo(): string {
        return `PLAYER: Name=${this.formatName()}, age=${this.age?this.age:"Not available"}, highscore=${this.highScore}`
    }
}

// export class HighScorer extends Player {
//     static playerTitle: string = 'HIGH SCORERS';
//     numPlayed: number;
//     constructor(name: string, highScore: number, numPlayed: number,  age?: number) {
//         super(name, highScore, age);
//         this.numPlayed = numPlayed;
//     }
//     logPlayerTitle(): string {
//         return HighScorer.playerTitle;
//     }
//
//     highScorerInfo(): string {
//         return `HIGHSCORER: ${this.playerInfo()}, numPlayed=${this.numPlayed}, title=${this.logPlayerTitle()}`
//     }
// }
