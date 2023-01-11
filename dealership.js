const Car = require('./car');


const Dealership = function(name, maxNumCars){
    this.name = name;
    this.maxNumCars = maxNumCars;
    this.carsInStock = [];
    this.car = new Car;
}

// Count the number of cars in stock
Dealership.prototype.countNumCars = function(){
    return this.carsInStock.length;
}

// Add car to stock
Dealership.prototype.addCars = function(newCar){
    this.car = newCar;
    this.carsInStock.push(car);
}

// Return an array containing each car manufacturer
// Map
const eachCarManu = carsInStock.map((car) => {
    return `${car.manufacturer}`;
})


// Find all the cars from a given manufacturer
// Filter
const carManufacturer = carsInStock.filter((manufacturer) => {
    return this.manufacturer;
})


// Find the total value of all the cars in stock
// Reduced
const totalValue = carsInStock.reduce((accumulator, price) => {
    return accumulator + car.price;
}, 0)


module.exports = {Dealership};