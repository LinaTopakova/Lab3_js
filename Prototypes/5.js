function Rabbit() {}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
console.log(rabbit.eats);
Rabbit.prototype = {};
Rabbit.prototype.eats = false;
delete rabbit.eats;
delete Rabbit.prototype.eats;
console.log(rabbit.eats);//true, так как rabbit все еще ссылается на старый прототип, который содержит свойство eats: true
