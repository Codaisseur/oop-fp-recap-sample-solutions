class Crop {
    constructor(price) {
        this.price = price
    }
    getYieldInEuros() {
        return this.getYieldInKg() * this.price
    }  
}

class Wheat extends Crop {
  constructor(acres) {
    super(1.5)
    this.acres = acres
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3)
  }

}

class Sugarcane extends Crop {
  constructor(acres) {
    super(2)
    this.acres = acres
  }

  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1)
  }
}

module.exports = { Wheat, Sugarcane }
