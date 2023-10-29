function catSolve(arr) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let catInfo of arr) {
    let [name, age] = catInfo.split(" ");
    cats.push(new Cat(name, age));
  }

  for (let cat of cats) {
    cat.meow();
  }
}
catSolve(["Mellow 2", "Tom 5"]);
