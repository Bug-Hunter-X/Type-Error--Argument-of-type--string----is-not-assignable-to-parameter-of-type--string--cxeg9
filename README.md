# Type Error in TypeScript

This repository demonstrates a common type error in TypeScript: passing an array to a function expecting a string.

The `bug.ts` file contains the erroneous code.  The `bugSolution.ts` file provides a corrected version.

The error occurs because the `greeter` function expects a single string argument but receives an array of strings. TypeScript's type system prevents this at compile time, producing an error message.