"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personnel_module_js_1 = require("./personnel module.js");
var VehicleStorage = personnel_module_js_1.Personnel.VehicleStorage;
const owner1 = new personnel_module_js_1.Personnel.Owner("Иванов", "Иван", "Иванович", new Date(2000, 1, 1), personnel_module_js_1.Personnel.Doc.DriverLicense, 111, 111);
console.log(owner.ownerInfo());
const car1 = new personnel_module_js_1.Personnel.Car("BMW", "X4", 2014, 11, 22, "Иванов Иван Иванович", personnel_module_js_1.Personnel.CarBody.car4, personnel_module_js_1.Personnel.CarClass.car4);
console.log(car1.vehicleInfo());
const owner2 = new personnel_module_js_1.Personnel.Owner("Аннова", "Анна", "Анновна", new Date(2001, 2, 2), personnel_module_js_1.Personnel.Doc.DriverLicense, 222, 222);
console.log(owner2.ownerInfo());
const car2 = new personnel_module_js_1.Personnel.Car("Москвич", "6", 2023, 33, 44, "Аннова Анна Анновна", personnel_module_js_1.Personnel.CarBody.car2, personnel_module_js_1.Personnel.CarClass.car2);
console.log(car2.vehicleInfo());
const moto = new personnel_module_js_1.Personnel.Motorbike("YAMAHA", "MT-03", 2024, 55, 66, "Аннова Анна Анновна", "алмаз", false);
console.log(moto.vehicleInfo());
const carStorage = new VehicleStorage(new Date(2024, 2, 15), [car1, car2]);
const motoStorage = new VehicleStorage(new Date(2024, 2, 15), [moto]);
console.log(carStorage.getT());
console.log(motoStorage.getT());
