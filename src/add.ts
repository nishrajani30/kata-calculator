export function add(numbers: string): number {
    // Handle empty string
    if (numbers === "") {
        return 0;
    }

    // Handle single number
    if (numbers.indexOf(",") === -1 && numbers.indexOf("\n") === -1) {
        return parseInt(numbers, 10);
    }

    // Split the input string by commas and new lines
    const numberStrings = numbers.split(/[\n,]/); // Split by both new lines and commas

    // Convert the split strings to numbers and calculate the sum
    return numberStrings.reduce((acc, num) => acc + parseInt(num, 10), 0);
}
