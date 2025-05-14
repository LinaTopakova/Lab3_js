class Box {
    constructor(weight, volume, id) {
        this.weight = weight;
        this.volume = volume;
        this.id = id;
    }
}

class Stock {
    constructor() {
        this.boxes = [];
        this.nextId = 0;
    }

    add(weight, volume) {
        const box = new Box(weight, volume, this.nextId);
        this.boxes.push(box);
        this.nextId++;
    }

    getByW(min_w) {
        let selectedBox = null;

        for (const box of this.boxes) {
            if (box.weight >= min_w) {
                if (selectedBox === null || box.id < selectedBox.id) {
                    selectedBox = box;
                }
            }
        }

        return selectedBox ? selectedBox.id : -1;
    }

    getByV(min_v) {
        let selectedBox = null;

        for (const box of this.boxes) {
            if (box.volume >= min_v) {
                if (selectedBox === null || box.id < selectedBox.id) {
                    selectedBox = box;
                }
            }
        }

        return selectedBox ? selectedBox.id : -1;
    }
}

const stock = new Stock();
stock.add(10, 20);
stock.add(15, 30);
stock.add(5, 25);

console.log(stock.getByW(10));
console.log(stock.getByW(15));
console.log(stock.getByW(20));

console.log(stock.getByV(25));
console.log(stock.getByV(30));
console.log(stock.getByV(35));
