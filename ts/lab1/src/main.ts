let hello = "Hello World!";
console.log(hello);

function firstSimpleFunc(p1: string, p2: string) {
    return p1 + p2;
}

let firstArrowFunc = (p1: string, p2: string) => p1 + p2;

const res1: string = firstSimpleFunc('Hello, ', 'функция firstSimpleFunc - обычная');
const res2 = firstArrowFunc('Hello, ', 'функция firstArrowFunc - стрелочная');

console.log(res1);
console.log(res2);

//--- задание 2 вариант 1
let numStr = (p1: number, p2: number) => 'Это конкатенация 2х чисел: ' + p1 + p2;
const resStr = numStr(1, 2);
console.log(resStr);

//--- задание 3n
//-Простые типы
let num: number = 1;
const str: string = 'строка';
let bool: boolean = true;
//-Массивы
const booleans: boolean[] = [true, false];
//-Специальные типы
//any совместим с любыми типами в системе типов: что угодно может быть присвоено ему и он может быть присвоен чему угодно
let anyType: any = '2';
anyType = booleans[1];
//undefined обозначает значение, присваиваемое неинициализированной переменной
let undef: undefined = undefined;
let nul: null = null; 

//--- задание 4 вариант 1
interface Entity {
    id: number;
}
interface ToJsonStringify extends
    Entity {
    name: string;
    surname?: string;
}
const datas: ToJsonStringify = {
    id: 1,
    name: "Василий",
}
const jsonStr: string = JSON.stringify(datas);
console.log(jsonStr);

const obj = JSON.parse(jsonStr);
console.log(obj);
