export function add(numbers: string): number {
    // Handle empty string
    if (numbers === "") {
        return 0;
    }

    // Handle single number
    if (numbers.indexOf(",") === -1 && numbers.indexOf("\n") === -1) {
        return parseInt(numbers, 10);
    }

    throw new Error("Not implemented");
}
