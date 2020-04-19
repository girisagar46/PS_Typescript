export function getInputValue(elementId: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputElement.value;
}

export function logError(err: string): void {
    console.error(err);
}

// Arrow functions declaration
export function logMessage1(message: string): void {
    console.log(message)
}

export const logMessage2 = (message: string): void => console.log(message);
export const squareIt = (x: number): number => x * x;
export const add = (x: number, y: number): number => x + y;

// End Arrow functions declaration


export function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;
    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage2;
    }
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`score: ${score}`)
}

export function logPlayer(name: string = 'MultiMath Player'): string {
    return `New game starting for player: ${name}`;
}