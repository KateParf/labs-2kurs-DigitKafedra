//---------1

/*
  декоратор для МЕТОДА для больших букв
  @target
  @method
  @descriptor - указатель на метод - свойство value содержит определение функции
*/
export function upperInfo(target: Object, method: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
        let returnValue = originalMethod.apply(this, args);
        return returnValue.toUpperCase();
    }
}

/*
  декоратор для класса
  Декоратор класса представляет функцию, которая принимает один параметр:
  function classDecoratorFn(constructor: Function) { }
  Декоратор с помощью функции Object.seal запрещает расширение прототипа класса User.
*/
export function notchangable(constructor: Function) {
    console.log("sealed decorator");
    console.log(constructor);
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
