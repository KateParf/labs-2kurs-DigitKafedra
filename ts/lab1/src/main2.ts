/** задание 1 вариант 1 */
function getMax(arr: number[]): number {
    let maxVal: number = 0;
    for (let i = 0; i < arr.length; i++) {
        maxVal = Math.max(arr[i], maxVal);
    }
    return maxVal;
}

function isNeg(matrix: number[][], m: number, n: number): boolean {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] < 0) return true;
        }
    }
    return false;
}

const arr: number[] = [-64, 0, 32.2, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 0];
console.log(getMax(arr));

let matrix = [
    [1, -2, 3],
    [4, 5, -6],
    [7, 8, 9],
    [2, 3, 4]
];
console.log(isNeg(matrix, matrix.length, matrix[0].length));

/** задание 2 вариант 1 */
const sumTupleVal = (tuple: [number, number, number]) => {
    return tuple[0] + tuple[1] + tuple[2];
}
const threeTuple: [firstVal: number, secondVal: number, thirdVal: number] = [4, 6, 1];
console.log(sumTupleVal(threeTuple));

/** задание 3 вариант 1 */
enum ballsEnum {
    ball1 = "Футбольный",
    ball2 = "Баскетбольный",
    ball3 = "Волейбольный",
    ball4 = "Теннисный"
}
console.log(ballsEnum.ball2 + " мяч");


/** задание 4 вариант 1 */
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    name = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

const printPetType = (somePet: Pet) => {
    const info = somePet.constructor.name;
    console.log(info);
}

function identity<T extends Pet> (somePet: T) {
    const info = somePet.constructor.name;
    console.log(info + " " + somePet.name + " speaks: " + somePet.speak());
}
    
const somePet: Pet = new Pet();
//printPetType(somePet);
identity<Pet>(somePet);

const someCat: Pet = new Cat();
//printPetType(someCat);
identity<Cat>(someCat);

const someDog: Pet = new Dog();
//printPetType(someDog);
identity<Dog>(someDog);

//-------------
interface Game {
    gameName: string;
    cntOfPlayers: number;
    gameBall:  ballsEnum;
}

const someGame: Game = {
    gameName: 'Баскетбол',
    cntOfPlayers: 12,
    gameBall:  ballsEnum.ball2
}
console.log(JSON.stringify(someGame));