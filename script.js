// LESSON 1

/*
let js = "amazing";

if (js === "amazing") {
  console.log("JS is FUN!");
}

console.log(40 + 8 + 23 - 10);
*/

// LESSON 2
/*
let firstName = "Newton";
console.log(firstName);

// Coventions to name variables
// 1. Camel case - start with a lower case alphabet for first word of the variable and all first alphabets of subsequent words are capitalised
// 2. If we have more than one word for naming a vairable, we can seperate the two words by underscore. It is called KEBAB CASE
// 3. We can not use first letter of the variable as a numerical value. It will be a syntax error.
// 4. Variables in JS can only contain letters, numbers, underscore and dollar sign.
// 5. We can not name a vriable with the name which is a reserved JS keyword such as new, function etc.
// 6. underscore and dollar sign are the two letters that can be used as the first letter of variables
// 7. We should not name the variable with the uppercase letter as this is a convention in JS. More about it latter.
// 8. VARIABLES NAMES SHOULD BE TOTALLY DESCRIPTIVE

let myFirstJob = "Auditor";
let myCurrentJob = "Developer";


// Assignement
let country = "Pakistan";
let continent = "Asia";
let population = "200 million";

console.log(country, continent, population);
*/

// LESSON 3 (DATA TYPES)
/*
// Every value is either an object or a primitive valeu
// 1. Primitive Data types
// a. numebr (these are floating point numbers)
// b. strings (these are the sequence of characters used for text)
// c. boolean (logical type true or false)
// d. undefined (value of a vairable that is only declared but value is not assigend i.e. variable is not defined)
// e. null (when we explicitly set the variable's value to null)
// symbol (value that is unique and cannot be changed)
// f. BigInt (lareger intergers)

console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun, typeof javascriptIsFun);
// JS programs are read by the browser from top to bottom
// The typeof operator simply tells us the about the type of value the variable contains. It is demostrated in above and below example.

javascriptIsFun = "Yes!";
console.log(javascriptIsFun, typeof javascriptIsFun);

let year;
console.log(year, typeof year);
year = 1991;
console.log(year, typeof year);

// Assignement
let country = "Pakistan";
let continent = "Asia";
let population = "200 million";
let isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

// LESSON 4 (LET, CONST and VAR)
/*
// let and const were introduced in ES6 and var is the way of declaring variables in the old days before ES6

let age = 30;
age = 31;
// We can reassign value to a vriable using let keyword

// const keyword is used to declare a variable whose value can not be changed. These variables can not be just declares. A value has to be assigend to these variables. Otherwise we will get TypeError ot syntax error

const birthYear = 1990;

// var is old way of defining variables but this convention of declaring variables should be completely avoided.
*/

// LESSON 5 (Operators)
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas);
console.log(ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

// The plus operator can also be used with two strings to join them (concatenations)
const firstName = "Newton";
const lastName = "Flips";
console.log(firstName + " " + lastName);
// There is a better way to concatenate stings i.e. to use the template strings. It will be covered a bit latter

// Assignment operators
let x = 10 + 5;
console.log(x);
// The equals sign above is an assignment operator.
x += 10;
console.log(x);
// The above means x = x + 15
x *= 4;
console.log(x);

x++;
console.log(x);
// The above operator will simply add 1 to the value of x
x--;
console.log(x);

// Comparison operators
// These are used to deliver a boolean value
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
*/

// CODING CHALLENGE - 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// DATA 1
/* 
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBmi = bmiMark > bmiJohn;

console.log(markHigherBmi, bmiMark, bmiJohn);

// DATA 2
const massMark2 = 95;
const massJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / (heightMark2 * heightMark2);
const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

const markHigherBmi2 = bmiMark2 > bmiJohn2;

console.log(markHigherBmi2, bmiMark2, bmiJohn2);
 */

// LESSON 6 (Strings)
/* 
const firstName = "Newton";
const job = "auditor";
const birthYear = 1994;
const year = 2021;

const newton =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(newton);

const newtonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(newtonNew);
 */

// LESSON 7 (Taking Decisions - if else statements)
/* 
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Eligible for diriving!");
} else {
  console.log("Not eligible for driving!");
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20; // Has to be declared outside of the block. More on it later!
} else {
  century = 21;
}

console.log(century);
 */

// CODING CHALLENGE - 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// DATA 1
/* 
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBmi = bmiMark > bmiJohn;

if (markHigherBmi) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// DATA 2
const massMark2 = 95;
const massJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / (heightMark2 * heightMark2);
const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

const markHigherBmi2 = bmiMark2 > bmiJohn2;

if (markHigherBmi2) {
  console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})!`);
} else {
  console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})!`);
}
 */

// LESSON 8 (Type conversion and type coersion)

// conversion is amnnual (when we explicitly change the type) while coersion is done automatically
/* 
const inputYear = "1991";
console.log(inputYear * 1); //shorthand to convert numerical strings into a number
console.log(Number(inputYear)); //standard method
 */

// LESSON 9 (Truthy and Falsy values)
/* 
// 5 falsy values: 0, '', undefined, null, NaN
// Every value other than above will be truthy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Newton"));
console.log(Boolean({}));
console.log(Boolean(""));
 */

// LESSON 10 (Equality Operators)
/* 
// The double equality operator enforces type coersion while triple equal sign does not. The triple equal sign is also known as strict equality operator

const age = 18;
if (age === 18) console.log("Over 18 [1]");

const age2 = 18;
if (age2 === "18") console.log("Over 18 [2]");

const age3 = 18;
if (age3 == "18") console.log("Over 18 [3]");
 */

// CODING CHELLENG - 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// NORMAL
// DATA 1
/* 
const scoresDolphins = 96 + 108 + 89;
const scoresKoalas = 88 + 91 + 110;
const averageDolphinsScore = scoresDolphins / 3;
const averageKoalasScore = scoresKoalas / 3;

if (averageDolphinsScore > averageKoalasScore) {
  console.log("Dolphins wins", averageDolphinsScore);
} else if (averageDolphinsScore < averageKoalasScore) {
  console.log("Koalas wins", averageKoalasScore);
} else {
  console.log("It was a draw", averageDolphinsScore, averageKoalasScore);
}

// DATA 2
const scoresDolphins2 = 97 + 112 + 101;
const scoresKoalas2 = 109 + 95 + 123;
const averageDolphinsScore2 = scoresDolphins2 / 3;
const averageKoalasScore2 = scoresKoalas2 / 3;

if (
  averageDolphinsScore2 > averageKoalasScore2 &&
  averageDolphinsScore2 >= 100
) {
  console.log("Dolphins wins", averageDolphinsScore2);
} else if (
  averageDolphinsScore2 < averageKoalasScore2 &&
  averageKoalasScore2 >= 100
) {
  console.log("Koalas wins", averageKoalasScore2);
} else {
  console.log("It was a draw", averageDolphinsScore2, averageKoalasScore2);
}

// DATA 3
const scoresDolphins3 = 97 + 112 + 101;
const scoresKoalas3 = 109 + 95 + 106;
const averageDolphinsScore3 = scoresDolphins3 / 3;
const averageKoalasScore3 = scoresKoalas3 / 3;

if (
  averageDolphinsScore3 > averageKoalasScore3 &&
  averageDolphinsScore3 >= 100
) {
  console.log("Dolphins wins", averageDolphinsScore3);
} else if (
  averageDolphinsScore3 < averageKoalasScore3 &&
  averageKoalasScore3 >= 100
) {
  console.log("Koalas wins", averageKoalasScore3);
} else if (
  averageDolphinsScore3 === averageKoalasScore3 &&
  averageDolphinsScore3 >= 100 &&
  averageKoalasScore3 >= 100
) {
  console.log("It was a draw", averageDolphinsScore3, averageKoalasScore3);
} else {
  console.log("No team won. So trophy will not be shared");
}
 */

// LESSON 11 (Switch Statement)
/* 
const day = "thursday";

// when you have to use multiple if else statement, the easier optiom is to use switch statement.

// each case will be compared in strict equality way.

switch (day) {
  case "monday":
    console.log("Plan course structure.");
    console.log("Go to coding meetup.");
    break; // this break statement will ensure the exit from the statement once any one of the case is matched and that block is executed.
  case "tuesday":
    console.log("Prepare theory video.");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples.");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend.");
    break;
  default:
    console.log("Not a valid day");
}
 */

// LESSON 12 (Statements and expressions)

// An expression is some something that produce a value
// A statement is something that does not produce a value such as decalration

// LESSON 13 (Ternary Operator / Conditional Operator)

// Else block is mandatory in case of ternary operator
/* 
const age = 23;
age >= 18
  ? console.log("Eligible for driving")
  : console.log("Below the minimum age for driving.");
 */

//CODING CHALLENGE 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// DATA 1
/* 
const billValue = 275;
billValue >= 50 && billValue <= 300
  ? console.log(
      `The bill was ${billValue}, the tip was ${
        billValue * 0.15
      }, and the total value was ${billValue * 1.15}.`
    )
  : console.log(
      `The bill was ${billValue}, the tip was ${
        billValue * 0.2
      }, and the total value was ${billValue * 1.2}.`
    );

// DATA 2
const billValue2 = 40;
billValue2 >= 50 && billValue2 <= 300
  ? console.log(
      `The bill was ${billValue2}, the tip was ${
        billValue2 * 0.15
      }, and the total value was ${billValue2 * 1.15}.`
    )
  : console.log(
      `The bill was ${billValue2}, the tip was ${
        billValue2 * 0.2
      }, and the total value was ${billValue2 * 1.2}.`
    );

// DATA 3
const billValue3 = 430;
billValue3 >= 50 && billValue3 <= 300
  ? console.log(
      `The bill was ${billValue3}, the tip was ${
        billValue3 * 0.15
      }, and the total value was ${billValue3 * 1.15}.`
    )
  : console.log(
      `The bill was ${billValue3}, the tip was ${
        billValue3 * 0.2
      }, and the total value was ${billValue3 * 1.2}.`
    );
 */
