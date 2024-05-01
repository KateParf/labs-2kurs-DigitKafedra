let hello = "Hello World!";
console.log(hello);
function firstSimpleFunc(p1, p2) {
    return p1 + p2;
}
let firstArrowFunc = (p1, p2) => p1 + p2;
const res1 = firstSimpleFunc('Hello, ', 'функция firstSimpleFunc - обычная');
const res2 = firstArrowFunc('Hello, ', 'функция firstArrowFunc - стрелочная');
console.log(res1);
console.log(res2);
//--- задание 2 вариант 1
let numStr = (p1, p2) => 'Это конкатенация 2х чисел: ' + p1 + p2;
const resStr = numStr(1, 2);
console.log(resStr);
//--- задание 3n
//-Простые типы
let num = 1;
const str = 'строка';
let bool = true;
//-Массивы
const booleans = [true, false];
//-Специальные типы
//any совместим с любыми типами в системе типов: что угодно может быть присвоено ему и он может быть присвоен чему угодно
let anyType = '2';
anyType = booleans[1];
//undefined обозначает значение, присваиваемое неинициализированной переменной
let undef = undefined;
let nul = null;
const datas = {
    id: 1,
    name: "Василий",
};
const jsonStr = JSON.stringify(datas);
console.log(jsonStr);
const obj = JSON.parse(jsonStr);
console.log(obj);
