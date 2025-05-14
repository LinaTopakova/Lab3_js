function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
};

const emptyObject = {
};

console.log(isEmpty(emptyObject));
console.log(isEmpty(myBrowser));

