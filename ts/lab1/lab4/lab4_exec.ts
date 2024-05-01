import {Animals} from "./lab4";
import IDog = Animals.IDog;
import Dog = Animals.Dog;
import ICat = Animals.ICat;
import Cat = Animals.Cat;
import Animal = Animals.Animal;
import IAnimal = Animals.IAnimal;
import Town = Animals.Town;
import AnimalType = Animals.AnimalType;
import Owner = Animals.Owner;
import IOwner = Animals.IOwner;
import IAnimalStorage = Animals.IAnimalStorage;
import AnimalStorage = Animals.AnimalStorage;


const dog: IDog = new Dog('Собака-кусака', 'Укусь', Town.KEMEROVO);
const dog1: IDog = new Dog('Собака-кусака-2', 'Укусь-2', Town.MOSCOW);

const owner: IOwner = new Owner(new Date(), 'Дмитрий', 'Дмитриев');

dog.owner = owner;

const cat: Cat = new Cat('Мяука-кусюка', 'Мяу-тяу', Town.KEMEROVO);
const cat1: ICat = new Cat('Мяука-кусюка-2', 'Мяу-тяу-2', Town.SAMARA);

cat1.owner = owner;

const fish: IAnimal = new Animal('Жабродышаший рыб', 'Барабулик', Town.KEMEROVO, AnimalType.FISH);
const hamster: IAnimal = new Animal('Крутящий генератор', 'Хомячилла', Town.MOSCOW, AnimalType.HAMSTER);
const parrot: IAnimal = new Animal('Пукни в пакетик', 'Приветик', Town.SAMARA, AnimalType.PARROT);
const mouse: IAnimal = new Animal('Настало время захватить мир', 'Брэйн', Town.RIGA, AnimalType.MOUSE);
const rat: IAnimal = new Animal('Для лидера нет никаких оправданий', 'Сплинтер', Town.NEW_YORK, AnimalType.RAT);
const monkey: IAnimal = new Animal('Продавала кирпичи', 'Чичичи', Town.NEW_YORK, AnimalType.MONKEY);

const catStorage: IAnimalStorage<ICat> = new AnimalStorage();
catStorage.save(cat);
catStorage.save(cat1);

const dogStorage: IAnimalStorage<IDog> = new AnimalStorage();
dogStorage.save(dog);
dogStorage.save(dog1);

const animalStorage: IAnimalStorage<IAnimal> = new AnimalStorage();
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