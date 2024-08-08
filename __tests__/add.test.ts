import { add } from '../src/add';

describe('add', () => {
    test('returns 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns the number for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('adds two numbers separated by a comma', () => {
        expect(add("1,5")).toBe(6);
    });

    test('adds a large number of inputs', () => {
        expect(add("101,202,303,404,505,606,707,808,909,1010")).toBe(5555);
    });
});
