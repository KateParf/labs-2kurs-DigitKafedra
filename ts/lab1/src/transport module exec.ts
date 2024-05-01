import { Transport } from "./transport module.js";

import Doc = Transport.Doc;
import OwnerI = Transport.OwnerI;
import VehicleI = Transport.VehicleI;
import Owner = Transport.Owner;
import Vehicle = Transport.Vehicle;
import CarBody = Transport.CarBody;
import CarClass = Transport.CarClass;
import CarI = Transport.CarI;
import Car = Transport.Car;
import MotorbikeI = Transport.MotorbikeI;
import Motorbike = Transport.Motorbike;
import VehicleStorageI = Transport.VehicleStorageI;
import VehicleStorage = Transport.VehicleStorage;



const owner1 = new Transport.Owner("Иван", "Иванов", "Иванович", new Date(2000, 1, 1), Transport.Doc.DriverLicense, 111, 111)
//console.log(owner1.ownerInfo());
const car1 = new Transport.Car("Тойота", "X4", 2014, 11, 22, owner1, Transport.CarBody.car4, Transport.CarClass.car4);

// -- лаба 6
console.log("===== декоратор заглавных букв");
console.log(car1.vehicleInfo());
car1.Model = "X5"; // менять значений своств можем
Object.defineProperty(car1, "MyProp", { value: "O many many"}); // добавлять поля в объект можем
console.log("===== добавили поле в объект");
console.log(car1);

try {
    Object.defineProperty(Car.prototype, 'MyProp', { value: "O many many"}); // добавлть поля в класс не можем
    console.log("===== добавили поле в класс");
    console.log(car1);
} catch (error) {
    console.log("===== добавлть поля в класс не можем");
}


const owner2 = new Transport.Owner("Анна", "Аннова", "Анновна", new Date(2001, 2, 2), Transport.Doc.DriverLicense, 222, 222)
//console.log(owner2.ownerInfo());
const car2 = new Transport.Car("Москвич", "6", 2023, 33, 44, owner2, Transport.CarBody.car2, Transport.CarClass.car2);
//console.log(car2.vehicleInfo());
const moto = new Transport.Motorbike("YAMAHA", "MT-03", 2024, 55, 66, owner2, "алмаз", false);
console.log(moto.vehicleInfo());


const carStorage: VehicleStorageI<CarI> = new VehicleStorage(new Date(2024, 2, 15), [car1, car2]);


const motoStorage: VehicleStorageI<MotorbikeI> = new VehicleStorage(new Date(2024, 2, 15), [moto]);

// -- лаба 7
console.log(carStorage.getT());
console.log("===отсортировали по марке авто");
console.log(carStorage.brandSort());
console.log("===только с фамилией Иванов");
console.log(carStorage.surnameSort("Иванов"));
console.log("=== vin и рег номер машины 1");
console.log(carStorage.getT()[0].VINRegInfo());

