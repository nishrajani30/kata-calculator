# Kata Calculator

A simple string calculator that can handle various delimiters and supports multiple numbers, including custom delimiter definitions. This project is a coding kata that follows specific rules for input strings and outputs the sum of the numbers.

## Features

- Supports addition of comma-separated numbers.
- Handles empty strings and returns 0.
- Allows newline characters between numbers.
- Custom delimiters can be defined using the syntax `//[delimiter]\n[numbers...]`.
- Throws an error if negative numbers are included, listing all negative numbers in the message.

## Installation

To get started with the Kata calculator, you need to have [Node.js](https://nodejs.org/).
For this demo, we have used [pnpm](https://pnpm.io/) but you can also run the application using npm or yarn or bun.

1. Clone the repository:
   ```bash
   git clone git@github.com:nishrajani30/kata-calculator.git
   cd kata-calculator
    ```

2. Install dependencies using pnpm (or npm, or yarn or bun):

    ```
    pnpm install
    
    # npm install
    # yarn install
    # bun install
    ```


## Usage:

To use the Kata calculator, you can call the add function with a string of numbers as input.

```javascript
import { add } from './src/add'; // Adjust the import according to your file structure

console.log(add("1,2,3")); // Output: 6
console.log(add("")); // Output: 0
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
```

## Running Tests

To run tests for this project, you can use the following command:

```shell
pnpm test
```
