function Calculator() {
    this.a = 0;
    this.b = 0;
}

Calculator.prototype.read = function(a, b) {
    this.a = a;
    this.b = b;
};

Calculator.prototype.sum = function() {
    return this.a + this.b;
};

Calculator.prototype.mul = function() {
    return this.a * this.b;
};

let calculator = new Calculator();
calculator.read(1, 5);
console.log(calculator.sum());
console.log(calculator.mul());