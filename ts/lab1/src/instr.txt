/** Part 1 - START **/

/** 1. Перейдите на сайт: https://nodejs.org */
/** 2. Установите программу без дополнительных телодвижений (просто тыкайте далее) */
/** 3. После установки откройте консоль и введите "npm --help".
 * Если всё хорошо, то сработает консольная программа пакетного менеджера от Node.JS.
 * */
/** 4. Создайте пустой проект в вашей IDE (Желательно Visual Studio Code или JetBrains WebStorm). */
/** 5. Откройте командную строку в папке с проектом, наберите команду: "npm init" */
/** 6. Установите следующие пакеты с помощью данных команд:
 * "npm install -g typescript"
 * "npm install @types/node --save-dev"
 * */
/** 7. Наберите команду в командную строку: "tsc --init" */
/** 8. В появившимся файле tsconfig.json замените содержимое на ниже написанное:
 * {
 *   "compilerOptions": {
 *     "composite": true,
 *     "outDir": "./dist",
 *     "rootDir": "src",
 *     "declaration": true,
 *     "noImplicitAny": true,
 *     "esModuleInterop": true,
 *     "module": "commonjs",
 *     "target": "es6",
 *     "types": [
 *       "node"
 *     ],
 *     "lib": [
 *       "es6",
 *       "dom"
 *     ]
 *   },
 *   "exclude": [
 *     "node_modules",
 *     "dist"
 *   ]
 * }
 * */
/** 9. Создайте файл с расширением .ts и напишите простой скрипт, выводящий алерт с Hello, world. */
/** 10. В консоли наберите команду tsc --build для сборки файлов проекта.
 * После успешной компиляции вы сможете найти и запустить файл .js из папки dist */


/** Part 1 - END **/

/** Part 2 - START **/
function someSimpleFunc(p1: string) {
    return 'Hello, ' + p1;
}

let someArrowFunc = (p1: string) => {
    return 'Hello, ' + p1;
};

const resSimpleFunc: string = someSimpleFunc('Ваше имя - обычная');
const resArrowFunc: string = someArrowFunc('Ваше имя - стрелочная');

console.log(resSimpleFunc);
console.log(resArrowFunc);

/** Part 2 - END **/

/** Part 3 - START **/
function makeId(len: number) {
    let result: string = '';
    const characters: string = '0123456789';
    const charactersLength: number = characters.length;
    let counter: number = 0;
    while (counter < len) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


const firstName: string = 'Ваше Имя';
let lastName: string = 'Ваша Фамилия';
const middleName: string = 'Ваше Отчество';
const passport: any = ['1234', '123456', 'ГУ МВД РОССИИ ПО Г. МОСКВА И МОСКОВСКОЙ ОБЛАСТИ', '770-030'];
let age: number = 41;

const allData: unknown = [firstName, lastName, middleName, passport, age];
console.log(allData);

setInterval(() => {
    passport[3] = makeId(3) + '-' + makeId(3);
}, 1000);

console.log(allData);

setInterval(() => {
    age = Math.random() * (100 - 1) + 1;
}, 1000);

console.log(allData);

/** Part 3 - END **/

/** Part 4 - START **/
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 444,
    name: 'Василий',
    surname: "Васильев",
}

const jsonStringify: string = JSON.stringify(data);

console.log(jsonStringify);

const someObject = JSON.parse(jsonStringify);

console.log(someObject);
/** Part 4 - END **/

/**
 * Дана квадратная матрица (двумерный массив) размера MxM, заполненная нулями.
 * Необходимо заменить элементы матрицы единицами в шахматном порядке.
 * Причём, если M нечётное, то левый верхний элемент начинается с 1, иначе с 0.
 * Примеры:
 *
 * 5х5
 * 0  0  0  0  0    1  0  1  0  1
 * 0  0  0  0  0    0  1  0  1  0
 * 0  0  0  0  0 -> 1  0  1  0  1
 * 0  0  0  0  0    0  1  0  1  0
 * 0  0  0  0  0    1  0  1  0  1
 *
 * 6х6
 * 0  0  0  0  0  0    0  1  0  1  0  1
 * 0  0  0  0  0  0    1  0  1  0  1  0
 * 0  0  0  0  0  0 -> 0  1  0  1  0  1
 * 0  0  0  0  0  0 -> 1  0  1  0  1  0
 * 0  0  0  0  0  0    0  1  0  1  0  1
 * 0  0  0  0  0  0    1  0  1  0  1  0
 **/

function getChessDesk(m: number): number[][] {
    const desk: number[][] = [];
    const odd: boolean = !(m % 2 === 0);
    let row = Array(m).fill(null).flatMap((_, i) => i % 2 === 0 ? 1 : 0);
    let rowInv: number[] = row.flatMap((_, i) => i % 2 === 0 ? 0 : 1);
    for(let i = 0; i < m; i++) {
        /*
            row = row.map(m => m);
            rowInv = row.map(m => m);
        */
        i % 2 === 0 ? desk.push(odd ? row : rowInv) : desk.push(odd ? rowInv : row);
    }
    //desk[0][0] = 3;
    return desk;
}

const desk5 = getChessDesk(5);
const desk6 = getChessDesk(6);

console.log(desk5, desk6);