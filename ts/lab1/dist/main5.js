/* 1---
Дополните код таким образом, чтобы время в
консоли отображалось каждые 5 секунд до 1 минуты
после полной загрузки страницы (необходимо
применить метод, который вызывается после полной
загрузки страницы) */
document.addEventListener('DOMContentLoaded', () => { onReady(); });
function onReady() {
    console.log("page loaded");
    const timerId = setInterval(getCurrentDate, 5000);
    // остановить вывод через 60 секунд
    setTimeout(() => {
        clearInterval(timerId);
        console.log('stop interval');
    }, 60000);
}
function getCurrentDate() {
    console.log(Date().toString());
}
//2----
function externalFunction() {
    console.log("Это внешняя функция");
    let u;
    function internalFunction() {
        console.log("А это внутренняя функция");
        u = 0;
    }
    internalFunction();
}
externalFunction();
