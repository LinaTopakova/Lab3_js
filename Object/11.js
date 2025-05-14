function Accumulator(startingValue) {
    this.value = startingValue;
}

Accumulator.prototype.read = function(a) {
    this.value += a;
};

let accumulator = new Accumulator(1);
accumulator.read(10);
accumulator.read(5);
console.log(accumulator.value); // выведет 16
