declare enum Doc {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    InternationalPassport = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442",
    BirthCertificate = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",
    DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430"
}
interface OwnerI {
    surname: string;
    name: string;
    patronymic: string;
    birthDate: Date;
    documentType: Doc;
    documentSerie: number;
    documentNumber: number;
    ownerInfo: () => string;
}
interface VehicleI {
    Brand: string;
    Model: string;
    YearOfIssue: number;
    VINnumber: number;
    RegistrationNumber: number;
    OwnerInformation: string;
    vehicleInfo: () => string;
}
declare class Owner implements OwnerI {
    private _surname;
    private _name;
    private _patronymic;
    private _birthDate;
    private _documentType;
    private _documentSerie;
    private _documentNumber;
    get birthDate(): Date;
    set birthDate(value: Date);
    get name(): string;
    set name(value: string);
    get surname(): string;
    set surname(value: string);
    get patronymic(): string;
    set patronymic(value: string);
    get documentSerie(): number;
    set documentSerie(value: number);
    get documentNumber(): number;
    set documentNumber(value: number);
    get documentType(): Doc;
    set documentType(value: Doc);
    constructor(name: string, surname: string, patronymic: string, birthDate: Date, documentType: Doc, documentSerie: number, documentNumber: number);
    ownerInfo(): string;
}
declare class Vehicle implements VehicleI {
    private _Brand;
    private _Model;
    private _YearOfIssue;
    private _VINnumber;
    private _RegistrationNumber;
    private _OwnerInformation;
    get Brand(): string;
    set Brand(value: string);
    get Model(): string;
    set Model(value: string);
    get YearOfIssue(): number;
    set YearOfIssue(value: number);
    get VINnumber(): number;
    set VINnumber(value: number);
    get RegistrationNumber(): number;
    set RegistrationNumber(value: number);
    get OwnerInformation(): string;
    set OwnerInformation(value: Owner);
    constructor(brand: string, model: string, year: number, vin: number, reg: number, owner: string);
    vehicleInfo(): string;
}
declare enum CarBody {
    car1 = "\u0421\u0435\u0434\u0430\u043D",
    car2 = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B",
    car3 = "\u041C\u0438\u043D\u0438\u0432\u044D\u043D",
    car4 = "\u041F\u0438\u043A\u0430\u043F"
}
declare enum CarClass {
    car1 = "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438",
    car2 = "\u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438",
    car3 = "\u041C\u0438\u043D\u0438\u0432\u044D\u043D\u044B \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438",
    car4 = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440\u044B \u0438 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A\u0438"
}
interface CarI extends VehicleI {
    carBody: CarBody;
    carClass: CarClass;
}
declare class Car extends Vehicle implements CarI {
    private _carBody;
    private _carClass;
    get carBody(): CarBody;
    set carBody(value: CarBody);
    get carClass(): CarClass;
    set carClass(value: CarClass);
    constructor(brand: string, model: string, year: number, vin: number, reg: number, owner: string, carbody: CarBody, carclass: CarClass);
    vehicleInfo(): string;
}
interface MotorbikeI extends VehicleI {
    frameType: string;
    forSport: boolean;
}
declare class Motorbike extends Vehicle implements MotorbikeI {
    private _frameType;
    private _forSport;
    get frameType(): string;
    set frameType(value: string);
    get forSport(): boolean;
    set forSport(value: boolean);
    constructor(brand: string, model: string, year: number, vin: number, reg: number, owner: string, frameType: string, forSport: boolean);
    vehicleInfo(): string;
}
interface VehicleStorageI<T> {
    createDate: Date;
    vehicleArr: T[];
    getT: () => T[];
}
declare class VehicleStorage<T> implements VehicleStorageI<T> {
    private _createDate;
    private _vehicleArr;
    get createDate(): Date;
    set createDate(value: Date);
    get vehicleArr(): T[];
    set vehicleArr(value: T[]);
    constructor(date: Date, vehicleArr: T[]);
    getT(): T[];
}
