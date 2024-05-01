//---------1
enum Doc {
    Passport = "Паспорт",
    InternationalPassport = "Загранпаспорт",
    BirthCertificate = "Свидетельство о рождении",
    DriverLicense = "Водительские права"
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


class Owner implements OwnerI {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: Doc;
    private _documentSerie: number;
    private _documentNumber: number;


    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get patronymic(): string {
        return this._patronymic;
    }

    set patronymic(value: string) {
        this._patronymic = value;
    }

    get documentSerie(): number {
        return this._documentSerie;
    }

    set documentSerie(value: number) {
        this._documentSerie = value;
    }

    get documentNumber(): number {
        return this._documentNumber;
    }

    set documentNumber(value: number) {
        this._documentNumber = value;
    }

    get documentType(): Doc {
        return this._documentType;
    }

    set documentType(value: Doc) {
        this._documentType = value;
    }

    constructor(name: string, surname: string, patronymic: string, birthDate: Date, documentType: Doc, documentSerie: number, documentNumber: number) {
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSerie = documentSerie;
        this._documentNumber = documentNumber;
    }

    ownerInfo(): string {
        return 'Имя: ' + this._name + '\n Фамилия: ' + this._surname + '\n Отчество: ' + this._patronymic
            + '\n Дата рождения: ' + this._birthDate.toString() + '\n Документ: ' + this._documentType.toString() + ' ' + this._documentSerie + ' ' + this._documentNumber;
    }
}

class Vehicle implements VehicleI {
    private _Brand: string;
    private _Model: string;
    private _YearOfIssue: number;
    private _VINnumber: number;
    private _RegistrationNumber: number;
    private _OwnerInformation: string;

    get Brand(): string {
        return this._Brand;
    }

    set Brand(value: string) {
        this._Brand = value;
    }

    get Model(): string {
        return this._Model;
    }

    set Model(value: string) {
        this._Model = value;
    }

    get YearOfIssue(): number {
        return this._YearOfIssue;
    }

    set YearOfIssue(value: number) {
        this._YearOfIssue = value;
    }

    get VINnumber(): number {
        return this._VINnumber;
    }

    set VINnumber(value: number) {
        this._VINnumber = value;
    }

    get RegistrationNumber(): number {
        return this._RegistrationNumber;
    }

    set RegistrationNumber(value: number) {
        this._RegistrationNumber = value;
    }

    get OwnerInformation(): string {
        return this._OwnerInformation;
    }

    set OwnerInformation(value: Owner) {
        this._OwnerInformation = value.ownerInfo();
    }

    constructor(brand: string, model: string, year: number, vin: number, reg: number, owner: string) {
        this._Brand = brand;
        this._Model = model;
        this._YearOfIssue = year;
        this._VINnumber = vin;
        this._RegistrationNumber = reg;
        this._OwnerInformation = owner;
    }

    vehicleInfo(): string {
        return 'Бренд: ' + this._Brand + '\n Модель: ' + this._Model + '\n Год выпуска: ' + this._YearOfIssue
            + '\n VIN-номер: ' + this._VINnumber + '\n Регистрационный номер: ' + this._RegistrationNumber;
    }
}

//-------2
enum CarBody {
    car1 = "Седан",
    car2 = "Универсал",
    car3 = "Минивэн",
    car4 = "Пикап"
}

enum CarClass {
    car1 = "Маленькие автомобили",
    car2 = "Среднеразмерные автомобили",
    car3 = "Минивэны и коммерческие автомобили",
    car4 = "Кроссоверы и внедорожники"
}

interface CarI extends VehicleI {
    carBody: CarBody;
    carClass: CarClass;
}

class Car extends Vehicle implements CarI {
    private _carBody: CarBody;
    private _carClass: CarClass;


    get carBody(): CarBody {
        return this._carBody;
    }

    set carBody(value: CarBody) {
        this._carBody = value;
    }

    get carClass(): CarClass {
        return this._carClass;
    }

    set carClass(value: CarClass) {
        this._carClass = value;
    }

    constructor(brand: string, model: string, year: number, vin: number, reg: number, owner: string, carbody: CarBody, carclass: CarClass) {
        super(brand, model, year, vin, reg, owner);
        this._carBody = carbody;
        this._carClass = carclass;
    }

    vehicleInfo(): string {
        return this.vehicleInfo() + '\n Тип кузова: ' + this._carBody + '\n Класс автомобиля: ' + this._carClass;
    }
}

interface MotorbikeI extends VehicleI {
    frameType: string;
    forSport: boolean;
}

class Motorbike extends Vehicle implements MotorbikeI {
    private _frameType: string;
    private _forSport: boolean;

    get frameType(): string {
        return this._frameType;
    }

    set frameType(value: string) {
        this._frameType = value;
    }

    get forSport(): boolean {
        return this._forSport;
    }

    set forSport(value: boolean) {
        this._forSport = value;
    }

    constructor(brand: string, model: string, year: number, vin: number, reg: number, owner: string, frameType: string, forSport: boolean) {
        super(brand, model, year, vin, reg, owner);
        this._frameType = frameType;
        this._forSport = forSport;
    }

    vehicleInfo(): string {
        let res: string = this.vehicleInfo() + '\n Тип рамы: ' + this._frameType + '\n Для спорта: ' + this._forSport;
        if (this.forSport) res += 'да';
        else res += 'нет';
        return res;
    }
}

interface VehicleStorageI<T> {
    createDate: Date;
    vehicleArr: T[];
    getT: () => T[];
}

class VehicleStorage<T> implements VehicleStorageI<T> {
 
    private _createDate: Date;
    private _vehicleArr: T[];

    get createDate(): Date {
        return this._createDate;
    }

    set createDate(value: Date) {
        this._createDate = value;
    }

    get vehicleArr(): T[] {
        return this._vehicleArr;
    }

    set vehicleArr(value: T[]) {
        this._vehicleArr = value;
    }

    constructor(date: Date, vehicleArr: T[]) {
        this._createDate = date;
        this._vehicleArr = vehicleArr;
    }
    
    getT(): T[] {
        return this._vehicleArr;
    }
}