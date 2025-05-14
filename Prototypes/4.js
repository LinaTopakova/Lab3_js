String.prototype.color = "black";
String.prototype.size = "16px";

String.prototype.write = function() {
    console.log("Цвет текста: " + this.color);
    console.log("Размер шрифта: " + this.size);
    console.log("Текст: " + this.toString());
};

let s  = new String("Это строка");
s.color = "red";
s.size = "20px";
s.write();

let s2 = new String("Вторая строка");
s2.write();
