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
});
