const fizzBuzz = require('./fizzbuzz.js');

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toEqual('function');
    });

    it('should return the number if not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toEqual(7);
    });

    it('should return Fizz if divisible only by 3', () => {
        expect(fizzBuzz(6)).toEqual('Fizz');
    });

    it('should return Buzz if divisible only by 5', () => {
        expect(fizzBuzz(10)).toEqual('Buzz');
    });

    it('should return FizzBuzz if divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });
});