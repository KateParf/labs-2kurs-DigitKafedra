var Town;
(function (Town) {
    Town["MOSCOW"] = "\u041C\u043E\u0441\u043A\u0432\u0430";
    Town["SAMARA"] = "\u0421\u0430\u043C\u0430\u0440\u0430";
    Town["KEMEROVO"] = "\u041A\u0435\u043C\u0435\u0440\u043E\u0432\u043E";
    Town["RIGA"] = "\u0420\u0438\u0433\u0430";
    Town["NEW_YORK"] = "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A";
})(Town || (Town = {}));
var AnimalType;
(function (AnimalType) {
    AnimalType["DOG"] = "\u0421\u043E\u0431\u0430\u043A\u0430";
    AnimalType["CAT"] = "\u041A\u043E\u0448\u043A\u0430";
    AnimalType["MOUSE"] = "\u041C\u044B\u0448\u044C";
    AnimalType["FISH"] = "\u0420\u044B\u0431\u0430";
    AnimalType["PARROT"] = "\u041F\u043E\u043F\u0443\u0433\u0430\u0439";
    AnimalType["MONKEY"] = "\u041E\u0431\u0435\u0437\u044C\u044F\u043D\u0430";
    AnimalType["RAT"] = "\u041A\u0440\u044B\u0441\u0430";
    AnimalType["HAMSTER"] = "\u0425\u043E\u043C\u044F\u043A";
})(AnimalType || (AnimalType = {}));
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
        return 'name: ' + this._name + '\n surname: ' + this._surname + '\n type: ' + this.birthDate.toString();
    }
}
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
    set type(value) {
        this._type = value;
    }
    constructor(description, name, town, type) {
        this._description = description;
        this._name = name;
        this._town = town;
        this._type = type;
    }
    animalInfo() {
        return 'description: ' + this._description + '\n name: ' + this._name + '\n type: ' + this._type + '\n town: ' + this._town;
    }
}
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
const dog = new Dog('Собака-кусака', 'Укусь', Town.KEMEROVO);
const dog1 = new Dog('Собака-кусака-2', 'Укусь-2', Town.MOSCOW);
const owner = new Owner(new Date(), 'Дмитрий', 'Дмитриев');
dog.owner = owner;
const cat = new Cat('Мяука-кусюка', 'Мяу-тяу', Town.RIGA);
const cat1 = new Cat('Мяука-кусюка-2', 'Мяу-тяу-2', Town.SAMARA);
cat1.owner = owner;
const fish = new Animal('Жабродышаший рыб', 'Барабулик', Town.KEMEROVO, AnimalType.FISH);
const hamster = new Animal('Крутящий генератор', 'Хомячилла', Town.MOSCOW, AnimalType.HAMSTER);
const parrot = new Animal('Пукни в пакетик', 'Приветик', Town.SAMARA, AnimalType.PARROT);
const mouse = new Animal('Настало время захватить мир', 'Брэйн', Town.RIGA, AnimalType.MOUSE);
const rat = new Animal('Для лидера нет никаких оправданий', 'Сплинтер', Town.NEW_YORK, AnimalType.RAT);
const monkey = new Animal('Продавала кирпичи', 'Чичичи', Town.NEW_YORK, AnimalType.MONKEY);
const catStorage = new AnimalStorage();
catStorage.save(cat);
catStorage.save(cat1);
const dogStorage = new AnimalStorage();
dogStorage.save(dog);
dogStorage.save(dog1);
const animalStorage = new AnimalStorage();
animalStorage.save(dog);
animalStorage.save(cat);
animalStorage.save(fish);
animalStorage.save(hamster);
animalStorage.save(parrot);
animalStorage.save(mouse);
animalStorage.save(rat);
animalStorage.save(monkey);
console.log(catStorage.getAll());
console.log(dogStorage.getAll());
console.log(animalStorage.getAll());
