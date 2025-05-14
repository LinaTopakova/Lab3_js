let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // ? (1) // true - у rabbit есть собственное свойство jumps, равное true
delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2) // null - у rabbit больше нет собственного свойства jumps, теперь ищем в прототипе animal, где jumps равно null
delete animal.jumps;
console.log(rabbit.jumps); // ? (3) // undefined - у rabbit нет собственного свойства jumps и в прототипе animal jumps удалено, поэтому возвращается undefined
