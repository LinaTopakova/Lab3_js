const calculator = {
    num1: 0,
    num2: 0,
    read(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read(2, 13);
console.log(calculator.sum());
console.log(calculator.mul());
