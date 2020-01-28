// 1. Set the variable `givenName` to the string "Addison".

let givenName = "Addison";

// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.

let candies = 20;
let people = 6;
let leftover = 20 % 6;


// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.

function greeting(name) {
    return "Hello, " + name + "!";
}
greeting('Chase');

// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.

function isOdd(number) {
    if (number % 2 === 1 || number % 2 === -1)
        return true;
    else
        return false;
}


// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.

function isEven(number) {
    if (number % 2 == 0)
        return true;
    else
        return false;
}

// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.

function fahrenheitToCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9
}
fahrenheitToCelsius();

// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.

function fahrenheitToKelvin(farenheit) {
    return (farenheit - 32) * 5 / 9 + 273.15
}

// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.

function lesser(x, y) {
    if (x < y)
        return x
    else
        return y
}

// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.

function multigreeting(name, code) {
    if (code == "en")
        return "Hello, " + name + "!";
    if (code == "es")
        return "¡Hola, " + name + "!";
    if (code == "fr")
        return "Bonjour, " + name + "!";
    if (code == "eo")
        return "Saluton, " + name + "!";
}

// 10. The greatest common divisor (https://en.wikipedia.org/wiki/Greatest_common_divisor)
// is the largest integer that, given two other integers, can be divided into them. For
// example, the greatest common divisor of 24 and 81 is 3. The greatest common divisor of
// 10 and 25 is 5.
//
// One method of calculating the greatest common divisor is the "binary GCD algorithm."
// (https://en.wikipedia.org/wiki/Greatest_common_divisor#Binary_GCD_algorithm)
// It can be written out like the following:
//
// Input: a, b positive integers
// Output: The greatest common divisor, which is g * 2**d
// d = 0
// while a and b are both even
//     a = a/2
//     b = b/2
//     d = d + 1
// while a != b
//     if a is even then a = a/2
//     else if b is even then b = b/2
//     else if a > b then a = (a – b)/2
//     else b = (b – a)/2
// g = a
// output g * 2**d

// Write a function called gcd that takes two arguments and returns the greatest common
// divisor using the instructions above.


// function gcd(a, b) {
//     var R;
//     while ((a % b) > 0) {
//         R = a % b;        //a mod b = R
//         a = b;           // Let a = b and b = R
//         b = R;
//     }
//     return b;

// }


// function gcd(a, b) {
//     if (b == 0)
//         return a;
//     else
//         return gcd(b, (a % b));
// }


var gcd = function (a, b) {
    if (b == 0) { // check if b is 0, if it is return a.
        return a;
    }
    return gcd(b, a % b); // if b is  not 0, it will run the recursive function until it finds the GCD
};