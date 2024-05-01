var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { upperInfo, notchangable } from "./decorators.js";
//---------1
export var Transport;
(function (Transport) {
    let Doc;
    (function (Doc) {
        Doc["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        Doc["InternationalPassport"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
        Doc["BirthCertificate"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
        Doc["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430";
    })(Doc = Transport.Doc || (Transport.Doc = {}));
    class Owner {
        get birthDate() {
            return this._birthDate;
        }
        set birthDate(value) {
            this._birthDate = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get surname() {
            return this._surname;
        }
        set surname(value) {
            this._surname = value;
        }
        get patronymic() {
            return this._patronymic;
        }
        set patronymic(value) {
            this._patronymic = value;
        }
        get documentSerie() {
            return this._documentSerie;
        }
        set documentSerie(value) {
            this._documentSerie = value;
        }
        get documentNumber() {
            return this._documentNumber;
        }
        set documentNumber(value) {
            this._documentNumber = value;
        }
        get documentType() {
            return this._documentType;
        }
        set documentType(value) {
            this._documentType = value;
        }
        constructor(name, surname, patronymic, birthDate, documentType, documentSerie, documentNumber) {
            this._name = name;
            this._surname = surname;
            this._patronymic = patronymic;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this._documentSerie = documentSerie;
            this._documentNumber = documentNumber;
        }
        ownerInfo() {
            return 'Имя: ' + this._name + '\n Фамилия: ' + this._surname + '\n Отчество: ' + this._patronymic
                + '\n Дата рождения: ' + this._birthDate.toString() + '\n Документ: ' + this._documentType.toString() + ' ' + this._documentSerie + ' ' + this._documentNumber;
        }
    }
    Transport.Owner = Owner;
    class Vehicle {
        get Brand() {
            return this._Brand;
        }
        set Brand(value) {
            this._Brand = value;
        }
        get Model() {
            return this._Model;
        }
        set Model(value) {
            this._Model = value;
        }
        get YearOfIssue() {
            return this._YearOfIssue;
        }
        set YearOfIssue(value) {
            this._YearOfIssue = value;
        }
        get VINnumber() {
            return this._VINnumber;
        }
        set VINnumber(value) {
            this._VINnumber = value;
        }
        get RegistrationNumber() {
            return this._RegistrationNumber;
        }
        set RegistrationNumber(value) {
            this._RegistrationNumber = value;
        }
        get OwnerInformation() {
            return this._OwnerInformation;
        }
        set OwnerInformation(value) {
            this._OwnerInformation = value;
        }
        constructor(brand, model, year, vin, reg, owner) {
            this._Brand = brand;
            this._Model = model;
            this._YearOfIssue = year;
            this._VINnumber = vin;
            this._RegistrationNumber = reg;
            this._OwnerInformation = owner;
        }
        vehicleInfo() {
            return 'Бренд: ' + this._Brand + '\n Модель: ' + this._Model + '\n Год выпуска: ' + this._YearOfIssue
                + '\n VIN-номер: ' + this._VINnumber + '\n Регистрационный номер: ' + this._RegistrationNumber;
        }
        VINRegInfo() {
            return 'VIN-номер: ' + this._VINnumber
                + ' ФИО владельца: ' + this.OwnerInformation.surname + ' ' + this.OwnerInformation.name + ' ' + this.OwnerInformation.patronymic
                + ' Регистрационный номер: ' + this._RegistrationNumber;
        }
    }
    Transport.Vehicle = Vehicle;
    //-------2
    let CarBody;
    (function (CarBody) {
        CarBody["car1"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBody["car2"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
        CarBody["car3"] = "\u041C\u0438\u043D\u0438\u0432\u044D\u043D";
        CarBody["car4"] = "\u041F\u0438\u043A\u0430\u043F";
    })(CarBody = Transport.CarBody || (Transport.CarBody = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["car1"] = "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438";
        CarClass["car2"] = "\u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438";
        CarClass["car3"] = "\u041C\u0438\u043D\u0438\u0432\u044D\u043D\u044B \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438";
        CarClass["car4"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440\u044B \u0438 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A\u0438";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    let Car = class Car extends Vehicle {
        get carBody() {
            return this._carBody;
        }
        set carBody(value) {
            this._carBody = value;
        }
        get carClass() {
            return this._carClass;
        }
        set carClass(value) {
            this._carClass = value;
        }
        constructor(brand, model, year, vin, reg, owner, carbody, carclass) {
            super(brand, model, year, vin, reg, owner);
            this._carBody = carbody;
            this._carClass = carclass;
        }
        vehicleInfo() {
            return super.vehicleInfo() + '\n Тип кузова: ' + this._carBody + '\n Класс автомобиля: ' + this._carClass;
        }
    };
    __decorate([
        upperInfo
    ], Car.prototype, "vehicleInfo", null);
    Car = __decorate([
        notchangable
    ], Car);
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        get frameType() {
            return this._frameType;
        }
        set frameType(value) {
            this._frameType = value;
        }
        get forSport() {
            return this._forSport;
        }
        set forSport(value) {
            this._forSport = value;
        }
        constructor(brand, model, year, vin, reg, owner, frameType, forSport) {
            super(brand, model, year, vin, reg, owner);
            this._frameType = frameType;
            this._forSport = forSport;
        }
        vehicleInfo() {
            let res = super.vehicleInfo() + '\n Тип рамы: ' + this._frameType + '\n Для спорта: ' + this._forSport;
            if (this.forSport)
                res += 'да';
            else
                res += 'нет';
            return res;
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        get createDate() {
            return this._createDate;
        }
        set createDate(value) {
            this._createDate = value;
        }
        get vehicleArr() {
            return this._vehicleArr;
        }
        set vehicleArr(value) {
            this._vehicleArr = value;
        }
        constructor(date, vehicleArr) {
            this._createDate = date;
            this._vehicleArr = vehicleArr;
        }
        getT() {
            return this._vehicleArr;
        }
        // ---- 1
        brandSort() {
            const arr = this.getT();
            const res = arr.slice().sort((a, b) => a.Brand.localeCompare(b.Brand));
            return res;
        }
        // ---- 2
        surnameSort(surn) {
            const arr = this.getT();
            const res = [];
            for (let i = 0; i < arr.length; i++) {
                let element = arr[i];
                if (element.OwnerInformation.surname.toLowerCase() === surn.toLowerCase()) {
                    res.push(element);
                }
            }
            return res;
        }
        ;
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (Transport = {}));
