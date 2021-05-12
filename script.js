"use strict";

// LESSON 1 (Strict Mode)
/* 
// Stict mode helps identify certain errors which JS does identify

let hasDriversLicense = false;
let passedTest = true;

if (passedTest) hasDriverLicense = true; // this line contains an error which strict mode points out
if (hasDriversLicense) console.log("I can drive.");

const interface = "Audio"; // It is a reserved word which JS might implement in future. Hence strict mode helps us identify that
 */

// LESSON 2 (Functions)
/* 
function logger() {
  console.log("My name is Newton.");
}
logger();

// parameters
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

// LESSON 3 (Function declarations vs expressions)
/* 
// Function declaration
function calculateAge(birthYear) {
  return 2037 - birthYear;
}
// It can be called before defining the code
const newtonAge = calculateAge(1994);
console.log(newtonAge);

// Function expression
const calculateAge2 = function (birthYear) {
  return 2037 - birthYear;
};
// These can not be called before being defined
console.log(calculateAge2(1994));
 */

// LESSON 4 (Arow Functions)
/* 
const calculateAge2 = (birthYear) => {
  return 2037 - birthYear;
};

console.log(calculateAge2(1994));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} has ${retirement} years left until retirement.`;
};

console.log(yearsUntilRetirement(1994, "Newton"));
console.log(yearsUntilRetirement(1990, "Rooney"));
 */

//  LESSON 5(Functions calling other functions)
/* 
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 */

// LESSON 6 (Reviewing functions)
/* 
const clacAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const retirement = 65 - clacAge(birthYear);
  if (retirement > 0) {
    return `${firstName} has ${retirement} years left until retirement.`;
  } else {
    return `${firstName} has already retired.`;
  }
};

console.log(yearsUntilRetirement(1994, "Newton"));
console.log(yearsUntilRetirement(1970, "Rooney"));
 */

// LESSON 7

// CODING CHALLENGE
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/* 
// DATA 1
const scoresDolphins = 44 + 23 + 71;
const scoresKoalas = 65 + 54 + 49;
const calcAverage = (score) => score / 3;

const avgDolphins = calcAverage(scoresDolphins);
const avgKoalas = calcAverage(scoresKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas > avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No team won.";
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));

// DATA 2
const scoresDolphins2 = 85 + 54 + 41;
const scoresKoalas2 = 23 + 34 + 27;
const calcAverage2 = (score) => score / 3;

const avgDolphins2 = calcAverage(scoresDolphins2);
const avgKoalas2 = calcAverage(scoresKoalas2);

const checkWinner2 = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas > avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No team won.";
  }
};

console.log(checkWinner(avgDolphins2, avgKoalas2));
 */
