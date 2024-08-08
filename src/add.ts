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


    // Split the numbers using the delimiter
    const numberStrings = numbers.split(delimiter);
    const numberArr: number[] = numberStrings.map(num => {
        const parsedNum = parseInt(num, 10);
        if (isNaN(parsedNum)) {
            throw new Error(`invalid input: ${num}`);
        }
        return parsedNum;
    });

    // Check for negative numbers
    const negativeNumbers = numberArr.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    // Convert the split strings to numbers and calculate the sum
    return numberStrings.reduce((acc, num) => {
        // if num is empty, return the accumulator
        return num ? acc + parseInt(num, 10) : acc;
    }, 0);
}
