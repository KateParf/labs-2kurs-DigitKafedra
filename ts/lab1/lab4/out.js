var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("lab4", [], function (exports_1, context_1) {
    "use strict";
    var Animals;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Animals) {
                var Town;
                (function (Town) {
                    Town["MOSCOW"] = "\u041C\u043E\u0441\u043A\u0432\u0430";
                    Town["SAMARA"] = "\u0421\u0430\u043C\u0430\u0440\u0430";
                    Town["KEMEROVO"] = "\u041A\u0435\u043C\u0435\u0440\u043E\u0432\u043E";
                    Town["RIGA"] = "\u0420\u0438\u0433\u0430";
                    Town["NEW_YORK"] = "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A";
                })(Town = Animals.Town || (Animals.Town = {}));
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
                })(AnimalType = Animals.AnimalType || (Animals.AnimalType = {}));
                var Owner = /** @class */ (function () {
                    function Owner(birthDate, name, surname) {
                        this._birthDate = birthDate;
                        this._name = name;
                        this._surname = surname;
                    }
                    Object.defineProperty(Owner.prototype, "birthDate", {
                        get: function () {
                            return this._birthDate;
                        },
                        set: function (value) {
                            this._birthDate = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Owner.prototype, "name", {
                        get: function () {
                            return this._name;
                        },
                        set: function (value) {
                            this._name = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Owner.prototype, "surname", {
                        get: function () {
                            return this._surname;
                        },
                        set: function (value) {
                            this._surname = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Owner.prototype.ownerInfo = function () {
                        return 'name: ' + this._name + '\n surname: ' + this._surname + '\n birthDate: ' + this.birthDate.toString();
                    };
                    return Owner;
                }());
                Animals.Owner = Owner;
                var Animal = /** @class */ (function () {
                    function Animal(description, name, town, type) {
                        this.description = description;
                        this.name = name;
                        this.town = town;
                        this._type = type;
                    }
                    Object.defineProperty(Animal.prototype, "owner", {
                        get: function () {
                            return this._owner;
                        },
                        set: function (value) {
                            this._owner = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animal.prototype, "description", {
                        get: function () {
                            return this._description;
                        },
                        set: function (value) {
                            this._description = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animal.prototype, "name", {
                        get: function () {
                            return this._name;
                        },
                        set: function (value) {
                            this._name = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animal.prototype, "town", {
                        get: function () {
                            return this._town;
                        },
                        set: function (value) {
                            this._town = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animal.prototype, "type", {
                        get: function () {
                            return this._type;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Animal.prototype.animalInfo = function () {
                        return 'description: ' + this._description + '\n name: ' + this._name + '\n type: ' + this._type + '\n town: ' + this._town;
                    };
                    return Animal;
                }());
                Animals.Animal = Animal;
                var Dog = /** @class */ (function (_super) {
                    __extends(Dog, _super);
                    function Dog(description, name, town) {
                        return _super.call(this, description, name, town, AnimalType.DOG) || this;
                    }
                    Object.defineProperty(Dog.prototype, "carriesSlippers", {
                        get: function () {
                            return this._carriesSlippers;
                        },
                        set: function (value) {
                            this._carriesSlippers = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Dog.prototype.voice = function () {
                        return "gau-gaw-gav";
                    };
                    return Dog;
                }(Animal));
                Animals.Dog = Dog;
                var Cat = /** @class */ (function (_super) {
                    __extends(Cat, _super);
                    function Cat(description, name, town) {
                        return _super.call(this, description, name, town, AnimalType.CAT) || this;
                    }
                    Object.defineProperty(Cat.prototype, "clawStatus", {
                        get: function () {
                            return this._clawStatus;
                        },
                        set: function (value) {
                            this._clawStatus = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Cat.prototype.voice = function () {
                        return "miyau";
                    };
                    return Cat;
                }(Animal));
                Animals.Cat = Cat;
                var AnimalStorage = /** @class */ (function () {
                    function AnimalStorage() {
                        this._created = new Date();
                        this._data = [];
                    }
                    Object.defineProperty(AnimalStorage.prototype, "created", {
                        get: function () {
                            return this._created;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(AnimalStorage.prototype, "data", {
                        get: function () {
                            return this._data;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    AnimalStorage.prototype.getAll = function () {
                        return this.data;
                    };
                    AnimalStorage.prototype.remove = function (index) {
                        this._data = this.data.splice(index, 1);
                    };
                    AnimalStorage.prototype.save = function (data) {
                        this._data.push(data);
                    };
                    return AnimalStorage;
                }());
                Animals.AnimalStorage = AnimalStorage;
            })(Animals || (exports_1("Animals", Animals = {})));
            console.log("Я не исполняемый. Напиши к lab4_exec");
        }
    };
});
System.register("lab4_exec", ["lab4"], function (exports_2, context_2) {
    "use strict";
    var lab4_1, Dog, Cat, Animal, Town, AnimalType, Owner, AnimalStorage, dog, dog1, owner, cat, cat1, fish, hamster, parrot, mouse, rat, monkey, catStorage, dogStorage, animalStorage;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (lab4_1_1) {
                lab4_1 = lab4_1_1;
            }
        ],
        execute: function () {
            Dog = lab4_1.Animals.Dog;
            Cat = lab4_1.Animals.Cat;
            Animal = lab4_1.Animals.Animal;
            Town = lab4_1.Animals.Town;
            AnimalType = lab4_1.Animals.AnimalType;
            Owner = lab4_1.Animals.Owner;
            AnimalStorage = lab4_1.Animals.AnimalStorage;
            dog = new Dog('Собака-кусака', 'Укусь', Town.KEMEROVO);
            dog1 = new Dog('Собака-кусака-2', 'Укусь-2', Town.MOSCOW);
            owner = new Owner(new Date(), 'Дмитрий', 'Дмитриев');
            dog.owner = owner;
            cat = new Cat('Мяука-кусюка', 'Мяу-тяу', Town.KEMEROVO);
            cat1 = new Cat('Мяука-кусюка-2', 'Мяу-тяу-2', Town.SAMARA);
            cat1.owner = owner;
            fish = new Animal('Жабродышаший рыб', 'Барабулик', Town.KEMEROVO, AnimalType.FISH);
            hamster = new Animal('Крутящий генератор', 'Хомячилла', Town.MOSCOW, AnimalType.HAMSTER);
            parrot = new Animal('Пукни в пакетик', 'Приветик', Town.SAMARA, AnimalType.PARROT);
            mouse = new Animal('Настало время захватить мир', 'Брэйн', Town.RIGA, AnimalType.MOUSE);
            rat = new Animal('Для лидера нет никаких оправданий', 'Сплинтер', Town.NEW_YORK, AnimalType.RAT);
            monkey = new Animal('Продавала кирпичи', 'Чичичи', Town.NEW_YORK, AnimalType.MONKEY);
            catStorage = new AnimalStorage();
            catStorage.save(cat);
            catStorage.save(cat1);
            dogStorage = new AnimalStorage();
            dogStorage.save(dog);
            dogStorage.save(dog1);
            animalStorage = new AnimalStorage();
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
        }
    };
});
