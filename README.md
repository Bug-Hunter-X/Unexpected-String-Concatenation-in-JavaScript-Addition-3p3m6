# Unexpected String Concatenation in JavaScript Addition

This repository demonstrates a common JavaScript bug caused by implicit type coercion during addition.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.  The `bug.js` file showcases this unexpected behavior, while `bugSolution.js` presents a solution using explicit type checking.

## Bug Description

JavaScript's loose typing can lead to subtle errors. In the provided example, adding a number to a string results in string concatenation.

## Solution

The solution introduces type checking to ensure both operands are numbers before performing addition.  If either is not a number, an error is thrown, preventing unexpected results.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to see the unexpected behavior.
4. Run `node bugSolution.js` to see the corrected behavior. 

This demonstrates the importance of explicit type checking in JavaScript to avoid unexpected behavior and potential bugs.