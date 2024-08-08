export function add(numbers: string): number {
    // Handle empty string
    if (numbers === "") {
        return 0;
    }

    // Handle single number
    if (numbers.indexOf(",") === -1 && numbers.indexOf("\n") === -1) {
        return parseInt(numbers, 10);
    }

    let delimiter = /[,\n]/; // Default delimiters
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const customDelimiter = numbers.substring(2, delimiterEndIndex).trim(); // Extract custom delimiter
        // Create a regular expression for the custom delimiter
        delimiter = new RegExp(customDelimiter.replace(/[\[\]]/g, '') + '|[,\n]', 'g');
        numbers = numbers.substring(delimiterEndIndex + 1); // Get the numbers part
    }

    // Split the input string by commas and new lines
    const numberStrings = numbers.split(delimiter)

    // Convert the split strings to numbers and calculate the sum
    return numberStrings.reduce((acc, num) => {
        // if num is empty, return the accumulator
        return num ? acc + parseInt(num, 10) : acc;
    }, 0);
}
