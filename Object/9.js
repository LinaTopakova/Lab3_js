function Worker(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
}

Worker.prototype.show = function() {
    console.log(`Имя: ${this.name}, отдел: ${this.department}, телефон: ${this.phone}, зарплата: ${this.salary}`);
};

let employee = new Worker("Иван Попов", "Отдел продаж", "1234567890", 50000);
employee.show();
