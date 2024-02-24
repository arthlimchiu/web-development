const palindrome = require('./palindrome.js');

describe('Palindrome', () => {
    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function');
    });

    it('should return a boolean', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
    });
    
    it('should return true if is a palindrome', () => {
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('rotator')).toBeTruthy();
        expect(palindrome('wow')).toBeTruthy();
    });

    it('should return false if is not a palindrome', () => {
        expect(palindrome('hello')).toBeFalsy();
        expect(palindrome('world')).toBeFalsy();
        expect(palindrome('bye')).toBeFalsy();
    });

    it('should return false if spaces', () => {
        expect(palindrome(' wow')).toBeFalsy();
        expect(palindrome(' world')).toBeFalsy();
        expect(palindrome(' bye')).toBeFalsy();
    });
});