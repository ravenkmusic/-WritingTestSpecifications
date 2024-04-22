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


//Functional Tests

//A shopping count checkout feature lets user checkout as a guest or authenticated user, but she be prompted to create an account if they'd like

//If the user's cart is empty, they should be alerted that their cart is empty and the checkout button should be disabled.
//If the user's cart has items in it, the checkout button should be enabled.
//If the user presses the enabled checkout button, they should be prompted to confirm they are ready to check out.
//If the user confirms they are ready to check out, the user should be prompted to be authenticated if they aren't already.
//If the user chooses to remain unauthenticated, they can click the "Check out as guest" button.
//The unauthenticated user will met with a screen to enter in their e-mail address that will be used to be the point of contact for their order.
//If the user chooses to log-in or create an account to be come authenticated, upon pressing "Login/Signup" button, they should be directed to the log-in screen to either log-in or sign up.
//Upon authenticating themselves upon account creation or logging in, the "Next" button will be enabled. 
//If the user's login credentials are invalid, they will recieve an error and the "Next" button will be disabled.
//Upon entry of valid credentials, the "Next" button will be enabled and both users checking out as guests and users with accounts will be redirected back to their cart and the "Next" button will be enabled to take them to coupon code screen.
//Upon reaching the coupon code screen and entering all desired coupon codes, the user should be able to click the "Next" button to advance to the shipping address screen to confirm the address to send the items in their cart.
//Upon confirming address is correct, user should be able to click "Next" button to advance to the payment method screen.
//Upon reaching the payment screen, user should be able to enter payment credentials and confirm billing address and click "Next" and advance to final screen.
//If user has not entered payment credentials, they will recieve an error.
//If user fails to enter information in the proper format on any of the foregoing screens, the "Next" button will be disabled and they cannot advance to the next.
//After reaching final screen, user can choose shipping speed (expedited shipping, regular speed shipping, etc.) and "place order" screen will become enabled after selection.
//Upon clicking "Place Order" button, user is shown a confirmation screen that their order was placed, with confirmation number and receipt to be sent to the email of their choice.