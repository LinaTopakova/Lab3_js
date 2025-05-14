let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
console.log(rabbit.full);// full будет добавлено к объекту rabbit, а не к animal
console.log(animal.full);