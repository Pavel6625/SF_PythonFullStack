import {definePrime} from '../index.js';
import {revertString} from '../index.js';

describe("Check prime number", () => {
    it("Prime, complex and invalid numbers", () => {
        expect(definePrime(17)).toBe('Число 17 простое');
        expect(definePrime(18)).toBe('Число 18 сложное');
        expect(definePrime(1008)).toBe('Неверные данные')
    })
});

describe("Check revert string function", () => {
    it("Latin, Cyrillic and digit strings", () => {
        expect(revertString('Latin letters')).toBe('srettel nitaL');
        expect(revertString('Кириллический набор')).toBe('робан йиксечиллириК');
        expect(revertString('1234567890')).toBe('0987654321')
    })
});