const getElementsByTag = require('./getelementsbytag.js');

describe('Get Elements By Tag', () => {
    it('should be a function', () => {
        expect(typeof getElementsByTag).toEqual('function');
    });

    it('should return an Array', () => {
        expect(Array.isArray(getElementsByTag())).toEqual(true);
    });

    it('should return an empty Array if no root is passed', () => {
        expect(getElementsByTag()).toEqual([]);
    });

    it('should return only the root element if no tagName is passed', () => {
        const root = document.createElement('div');
        expect(getElementsByTag(root)).toEqual([root]);
    });

    it('should return the correct elements', () => {
        const root = document.createElement('div');
        const child1 = document.createElement('p');
        const child2 = document.createElement('span');
        const child3 = document.createElement('p');
        root.appendChild(child1);
        root.appendChild(child2);
        child2.appendChild(child3);

        const result = getElementsByTag(root, 'p');

        expect(result).toEqual([child1, child3]);
    });
});