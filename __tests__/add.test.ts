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

    test('adds numbers separated by new lines', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('adds multiple numbers with new lines and comma', () => {
        expect(add(",1\n2\n3")).toBe(6);
    });

    test('adds multiple numbers with new lines and multiple commas/new line in between or end', () => {
        expect(add(",1\n\n\n2\n3,,,,")).toBe(6);
    });

    test('adds numbers with a custom delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('adds numbers with long custom delimiter', () => {
        expect(add("//;;&\n3;;&4")).toBe(7);
    });

    test('throws an exception for a single negative number', () => {
        expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
    });

    // test('adds numbers with multiple custom delimiters', () => {
    //     expect(add("//;\n1;2")).toBe(3);
    // });



});
