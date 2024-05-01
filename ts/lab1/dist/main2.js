/** задание 1 вариант 1 */
function getMax(arr) {
    let maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        maxVal = Math.max(arr[i], maxVal);
    }
    return maxVal;
}
function isNeg(matrix, m, n) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] < 0)
                return true;
        }
    }
    return false;
}
const arr = [-64, 0, 32.2, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 0];
console.log(getMax(arr));
let matrix = [
    [1, -2, 3],
    [4, 5, -6],
    [7, 8, 9],
    [2, 3, 4]
];
console.log(isNeg(matrix, matrix.length, matrix[0].length));
/** задание 2 вариант 1 */
const sumTupleVal = (tuple) => {
    return tuple[0] + tuple[1] + tuple[2];
};
const threeTuple = [4, 6, 1];
console.log(sumTupleVal(threeTuple));
/** задание 3 вариант 1 */
var ballsEnum;
(function (ballsEnum) {
    ballsEnum["ball1"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439";
    ballsEnum["ball2"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439";
    ballsEnum["ball3"] = "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439";
    ballsEnum["ball4"] = "\u0422\u0435\u043D\u043D\u0438\u0441\u043D\u044B\u0439";
})(ballsEnum || (ballsEnum = {}));
console.log(ballsEnum.ball2 + " мяч");
/** задание 4 вариант 1 */
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.name = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const printPetType = (somePet) => {
    const info = somePet.constructor.name;
    console.log(info);
};
function identity(somePet) {
    const info = somePet.constructor.name;
    console.log(info + " " + somePet.name + " speaks: " + somePet.speak());
}
const somePet = new Pet();
//printPetType(somePet);
identity(somePet);
const someCat = new Cat();
//printPetType(someCat);
identity(someCat);
const someDog = new Dog();
//printPetType(someDog);
identity(someDog);
const someGame = {
    gameName: 'Баскетбол',
    cntOfPlayers: 12,
    gameBall: ballsEnum.ball2
};
console.log(JSON.stringify(someGame));
