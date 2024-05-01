export namespace Animals {

    export enum Town {
        MOSCOW = "Москва",
        SAMARA = "Самара",
        KEMEROVO = "Кемерово",
        RIGA = "Рига",
        NEW_YORK = "Нью-Йорк"
    }

    export enum AnimalType {
        DOG = 'Собака',
        CAT = 'Кошка',
        MOUSE = 'Мышь',
        FISH = 'Рыба',
        PARROT = 'Попугай',
        MONKEY = 'Обезьяна',
        RAT = 'Крыса',
        HAMSTER = 'Хомяк'
    }

    export interface IOwner {
        name: string;
        surname: string;
        birthDate: Date;
        ownerInfo: () => string;
    }

    export interface IAnimal {
        type: AnimalType,
        name: string;
        description: string;
        town: Town;
        animalInfo: () => string
        owner: IOwner;
    }

    export interface ICat extends IAnimal {
        clawStatus: boolean;
        voice: () => 'miyau';
    }

    export interface IDog extends IAnimal {
        carriesSlippers: boolean;
        voice: () => 'gau-gaw-gav';
    }

    export class Owner implements IOwner {
        private _birthDate: Date;
        private _name: string;
        private _surname: string;

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

        constructor(birthDate: Date, name: string, surname: string) {
            this._birthDate = birthDate;
            this._name = name;
            this._surname = surname;
        }

        ownerInfo(): string {
            return 'name: ' + this._name + '\n surname: ' + this._surname + '\n birthDate: ' + this.birthDate.toString();
        }
    }

    export class Animal implements IAnimal {
        private _description: string;
        private _name: string;
        private _town: Town;
        private readonly _type: AnimalType;
        private _owner: IOwner;

        get owner(): IOwner {
            return this._owner;
        }

        set owner(value: IOwner) {
            this._owner = value;
        }

        get description(): string {
            return this._description;
        }

        set description(value: string) {
            this._description = value;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get town(): Town {
            return this._town;
        }

        set town(value: Town) {
            this._town = value;
        }

        get type(): AnimalType {
            return this._type;
        }

        constructor(description: string, name: string, town: Town, type: AnimalType) {
            this.description = description;
            this.name = name;
            this.town = town;
            this._type = type;
        }

        animalInfo(): string {
            return 'description: ' + this._description + '\n name: ' + this._name + '\n type: ' + this._type + '\n town: ' + this._town;
        }
    }

    export class Dog extends Animal implements IDog {

        private _carriesSlippers: boolean;

        get carriesSlippers(): boolean {
            return this._carriesSlippers;
        }

        set carriesSlippers(value: boolean) {
            this._carriesSlippers = value;
        }

        constructor(description: string, name: string, town: Town) {
            super(description, name, town, AnimalType.DOG);
        }

        voice(): "gau-gaw-gav" {
            return "gau-gaw-gav";
        }
    }

    export class Cat extends Animal implements ICat {
        private _clawStatus: boolean;

        get clawStatus(): boolean {
            return this._clawStatus;
        }

        set clawStatus(value: boolean) {
            this._clawStatus = value;
        }

        constructor(description: string, name: string, town: Town) {
            super(description, name, town, AnimalType.CAT);
        }

        voice(): "miyau" {
            return "miyau";
        }

    }

    export interface IAnimalStorage<T extends IAnimal> {
        created: Date;
        data: T[];
        getAll: () => T[];

        save(data: T): void;

        remove(index: number): void;
    }

    export class AnimalStorage<T extends IAnimal> implements IAnimalStorage<T> {
        private readonly _created: Date;
        private _data: T[];

        get created(): Date {
            return this._created;
        }

        get data(): T[] {
            return this._data;
        }

        constructor() {
            this._created = new Date();
            this._data = [];
        }

        getAll(): T[] {
            return this.data;
        }

        remove(index: number): void {
            this._data = this.data.splice(index, 1);
        }

        save(data: T): void {
            this._data.push(data);
        }
    }
}

console.log("Я не исполняемый. Напиши к lab4_exec");