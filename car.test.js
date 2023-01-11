const Car = require('./car');

let car;

beforeEach(() => {
    car = new Car("Hyundai", 64405, "V-6");
})

describe('testing properties', () => {
    test('can get manufacturer', () => {
        const expected = "Hyundai";
        const actual = car.manufacturer();
        expect(actual).toBe(expected);
    })
    test('can set manufacturer', () => {
        const expected = "Yamaha";
        const actual = car.manufacturer("Yamaha");
        expect(actual).toBe(expected);
    })

    test('can get price', () => {
        const expected = 64405;
        const actual = car.price();
        expect(actual).toBe(expected);
    })
    test('can set price', () => {
        const expected = 30000;
        const actual = car.price(30000);
        expect(actual).toBe(expected);
    })

    test('can get engine type', () => {
        const expected = "V-6";
        const actual = car.engine_type();
        expect(actual).toBe(expected);
    })
    test('can set engine type', () => {
        const expected = "V-8";
        const actual = car.engine_type("V-8");
        expect(actual).toBe(expected);
    })
})
