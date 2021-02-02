import {definePrime} from '../index.js';

describe("Check prime number", () => {
    it("Prime number", () => {expect(definePrime(17)).toBe('Число 17 простое')});
    it("Complex number", () => {expect(definePrime(18)).toBe('Число 18 сложное')})
    it("Invalid number", () => {expect(definePrime(1008)).toBe('Неверные данные')})
})