
function Browser(name, version) {
    this.name = name;
    this.version = version;
}

Browser.prototype.aboutBrowser = function() {
    console.log(`Браузер: ${this.name}, Версия: ${this.version}`);
};

let myBrowser = new Browser("Microsoft Internet Explorer", "9.0");
console.log("Имя:", myBrowser.name);
console.log("Версия:", myBrowser.version);
myBrowser.aboutBrowser();