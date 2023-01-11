const Car = require('./car');
const Dealership = require('./dealership');

let car;
let dealership;

beforeEach(() => {
    car = new Car("Hyundai", 64405, "V-6");
    dealership = new Dealership("McQueen", 34);
})

describe('testing properties', () => {
    test('can get name', () => {
        const expected = "McQueen";
        const actual = dealership.name();
        expect(actual).toBe(expected);
    })

    // Test the rest of the getters & setters
})

describe('test prototype functions', () => {
    test('counting car', () => {
        const expected = 1;
        const actual = dealership.countNumCars();
        expect(actual).toBe(expected);
    })

    // Test the rest of the functions
})