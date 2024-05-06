class Animal {
  name: string = "";

  constructor(name: string) {
    this.name = name;    
  }

  makeSound(): void {
    console.log("SOme noise")
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log("wuff wuff\n");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log("meow meow\n");
  }
}

const pocky: Cat = new Cat("Pocky");
pocky.makeSound(); // -> meow meow

const toshii: Dog = new Dog("Pocky");
toshii.makeSound(); // -> wuff wuff

const animal: Animal = new Animal("Animal name");
animal.makeSound();
