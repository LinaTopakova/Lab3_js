function multiplyNumeric(obj) {

    for (let element in obj) {
        if (typeof obj[element] === 'number') {
            obj[element] *= 2;
        }
    }
}

const student = {
    name: "Polina",
    age: 20,
    height: 166,
    course: 2
};

multiplyNumeric(student);
console.log(student);
