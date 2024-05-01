export var Animals;
(function (Animals) {
    let Town;
    (function (Town) {
        Town["MOSCOW"] = "\u041C\u043E\u0441\u043A\u0432\u0430";
        Town["SAMARA"] = "\u0421\u0430\u043C\u0430\u0440\u0430";
        Town["KEMEROVO"] = "\u041A\u0435\u043C\u0435\u0440\u043E\u0432\u043E";
        Town["RIGA"] = "\u0420\u0438\u0433\u0430";
        Town["NEW_YORK"] = "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A";
    })(Town = Animals.Town || (Animals.Town = {}));
    let AnimalType;
    (function (AnimalType) {
        AnimalType["DOG"] = "\u0421\u043E\u0431\u0430\u043A\u0430";
        AnimalType["CAT"] = "\u041A\u043E\u0448\u043A\u0430";
        AnimalType["MOUSE"] = "\u041C\u044B\u0448\u044C";
        AnimalType["FISH"] = "\u0420\u044B\u0431\u0430";
        AnimalType["PARROT"] = "\u041F\u043E\u043F\u0443\u0433\u0430\u0439";
        AnimalType["MONKEY"] = "\u041E\u0431\u0435\u0437\u044C\u044F\u043D\u0430";
        AnimalType["RAT"] = "\u041A\u0440\u044B\u0441\u0430";
        AnimalType["HAMSTER"] = "\u0425\u043E\u043C\u044F\u043A";
    })(AnimalType = Animals.AnimalType || (Animals.AnimalType = {}));
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
        constructor(birthDate, name, surname) {
            this._birthDate = birthDate;
            this._name = name;
            this._surname = surname;
        }
        ownerInfo() {
            return 'name: ' + this._name + '\n surname: ' + this._surname + '\n birthDate: ' + this.birthDate.toString();
        }
    }
    Animals.Owner = Owner;
    class Animal {
        get owner() {
            return this._owner;
        }
        set owner(value) {
            this._owner = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            this._description = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get town() {
            return this._town;
        }
        set town(value) {
            this._town = value;
        }
        get type() {
            return this._type;
        }
        constructor(description, name, town, type) {
            this.description = description;
            this.name = name;
            this.town = town;
            this._type = type;
        }
        animalInfo() {
            return 'description: ' + this._description + '\n name: ' + this._name + '\n type: ' + this._type + '\n town: ' + this._town;
        }
    }
    Animals.Animal = Animal;
    class Dog extends Animal {
        get carriesSlippers() {
            return this._carriesSlippers;
        }
        set carriesSlippers(value) {
            this._carriesSlippers = value;
        }
        constructor(description, name, town) {
            super(description, name, town, AnimalType.DOG);
        }
        voice() {
            return "gau-gaw-gav";
        }
    }
    Animals.Dog = Dog;
    class Cat extends Animal {
        get clawStatus() {
            return this._clawStatus;
        }
        set clawStatus(value) {
            this._clawStatus = value;
        }
        constructor(description, name, town) {
            super(description, name, town, AnimalType.CAT);
        }
        voice() {
            return "miyau";
        }
    }
    Animals.Cat = Cat;
    class AnimalStorage {
        get created() {
            return this._created;
        }
        get data() {
            return this._data;
        }
        constructor() {
            this._created = new Date();
            this._data = [];
        }
        getAll() {
            return this.data;
        }
        remove(index) {
            this._data = this.data.splice(index, 1);
        }
        save(data) {
            this._data.push(data);
        }
    }
    Animals.AnimalStorage = AnimalStorage;
})(Animals || (Animals = {}));
console.log("Я не исполняемый. Напиши к lab4_exec");
