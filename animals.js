class Animal {
    getValueInEuros() {
        return this.getWeightInKg()
    }
}

module.exports.Pig = class extends Animal {
    constructor(price) {
        super()
        this.price = price
    }

    getWeightInKg() {
        return this.price * 2.3
    }
}
module.exports.Horse = class extends Animal {
    constructor(price) {
        super()
        this.price = price
    }

    getWeightInKg() {
        return this.price * 1.7
    }
}
module.exports.Cow = class extends Animal {
    constructor(price) {
        super()
        this.price = price
    }

    getWeightInKg() {
        return this.price * 1.5
    }
}