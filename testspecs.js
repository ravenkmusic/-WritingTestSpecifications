//Unit Tests

//A function called "multiplication" expected to return the product of two integers

// Expect multiplication(5, 10) to return product;
// Expect multiplication(x, y) to be numbers (integer or float);
// Expect multiplication("x", y) to give error for invalid arguments (no strings);
// Expect multiplication(x, "y") to give error for invalid arguments (no strings);
// Expect multiplication(Nan, Nan) to give error for invalid arguments (not integers);
// Expect multiplication() to give error for invalid arguments (no arguments);
// Expect multiplication(x) to give error for invalid arguments (not enough arguments);

//A function called "concatOdds" takes two arrays of integers as arguments
//and return a single array that only contains the odd numbers in ascending order, from both of the arrays

//Expect concatOdds([array1], [array2]) to have two arguments as arrays;
//Expect concatOdds([array1], [array2]) to have numbers as elements in arrays;
// Expect concatOdds([], []) to give error for empty array;
// Expect concatOdds() to give error for empty arrays
// Expect concatOdds([], [array2]) to give error for empty array for single argument;
// Expect concatOdds([array1], []) to give error for empty array for single argument;
// Expect concatOdds([1, 8, 2, 4, 3], [7, 9, 12, 11, 6]) to return [1, 3, 7, 9, 11];
// Expect concatOdds([5, 1, 3, 2], [10, 13]) to return [1, 3, 5, 13];
// Expect concatOdds(["5", 7, 11, 12], ["2", "4"]) to return error for invalid elements in argument (no strings);
// Expect concatOdds([1, 1, 7, 8, 2, 4, 3], [7, 9, 12, 11, 6]) to return [1, 3, 7, 9, 11] and omit duplicate elements;