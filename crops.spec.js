const { Wheat, Sugarcane } = require("./crops")

test("The Wheat class can calulate a yield", () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeDefined()
})

test("The Wheat class calulates the proper yield", () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})

test("The Sugarcane class calulates the proper yield", () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldInKg()).toBeCloseTo(453.4, 1)
  })
  