/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

First and second examples run correct. it gives us the expected outputs.

last example doesn't run correct. the output is Total Age: 255 which is wrong. "25" is a string not a number. therefore
we must declare "25" as number.

let age = "25";
let totalAge = Number(age) + 5;
console.log( "Total Age:" + totalAge);

This way we will get expected output. 

Part 2 
Implicit Example 

let result = "6" * 2;
console.log(result); // Output is 12

Explicit Example

let number = 25;
let stringNum = String (number);
console.log(stringNum + " apples"); // output is: "25 apples"