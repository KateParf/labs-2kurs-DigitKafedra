/** задание 1 вариант 1 */
declare function getMax(arr: number[]): number;
declare function isNeg(matrix: number[][], m: number, n: number): boolean;
declare const arr: number[];
declare let matrix: number[][];
/** задание 2 вариант 1 */
declare const sumTupleVal: (tuple: [number, number, number]) => number;
declare const threeTuple: [firstVal: number, secondVal: number, thirdVal: number];
/** задание 3 вариант 1 */
declare enum ballsEnum {
    ball1 = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439",
    ball2 = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439",
    ball3 = "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439",
    ball4 = "\u0422\u0435\u043D\u043D\u0438\u0441\u043D\u044B\u0439"
}
/** задание 4 вариант 1 */
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const printPetType: (somePet: Pet) => void;
declare function identity<T extends Pet>(somePet: T): void;
declare const somePet: Pet;
declare const someCat: Pet;
declare const someDog: Pet;
interface Game {
    gameName: string;
    cntOfPlayers: number;
    gameBall: ballsEnum;
}
declare const someGame: Game;
