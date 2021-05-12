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

// LESSON 8 (Arrays)
/* 
// Arrays in JS are one form of data structure. These are used to store multiple data points with multiple types at a single location i.e. in variables
// Arrays are zero based meaning they start from index of zero '0'

const friends = ["Joey", "Chandler", "Monica"];
console.log(friends);

// We can also define arrays in following way
const years = new Array(1990, 1991, 1992);
console.log(years);

// logging specific elements of array
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // to idendify number of elements in an array

friends[2] = "Pheobe";
console.log(friends);

const test = [1, 2, , 3];
console.log(test.length); // Empty sections are also cosidered an element of array.

const newton = ["Newton", "Flips", 2037 - 1994, "auditor", friends];
console.log(newton);

// Exercise

const clacAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = [1990, 1967, 2002, 2010, 2018];

const ages = [
  clacAge(years2[0]),
  clacAge(years2[1]),
  clacAge(years2[2]),
  clacAge(years2[3]),
  clacAge(years2[4]),
];

console.log(ages);
 */

// LESSON 9 (Basic Array methods)
/* 
const friends = ["Joey", "Chandler", "Monica"];

friends.push("Pheobe"); //I is a destructive method. It adds an element at the end of an array. Returns the new length of an array

friends.unshift("Rachel"); //I is a destructive method. It adds an element at the start of an array. Returns the new length of an array

friends.pop(); //I is a destructive method. It removes an element from the end of an array. Returns the removed element.

friends.shift(); //I is a destructive method. It removes an element from the start of an array. Returns the removed element.

console.log(friends);

console.log(friends.indexOf("Monica")); // Tells the position of the given element in an array. It is case sensitive.
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Monica")); // Returns true ot false. It is also case sensitive.
 */

// LESSON 10

// CODING CHALLENGE

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/* 
const tip = function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15;
  } else {
    return 0.2;
  }
};

const bills = [125, 555, 44];

const tips = [
  bills[0] * tip(bills[0]),
  bills[1] * tip(bills[1]),
  bills[2] * tip(bills[2]),
];

const total = [
  bills[0] * (1 + tip(bills[0])),
  bills[1] * (1 + tip(bills[1])),
  bills[2] * (1 + tip(bills[2])),
];

console.log(tips);
console.log(total);
 */

// LESSON 11 (Objects)

// Objects are also a form of data structure in JS. In objects, we store data in the form key value pairs
/* 
const newton = {
  firstName: "Newton",
  lastName: "Flips",
  age: 2037 - 1994,
  job: "auditor",
  friends: ["Joey", "Chandler", "Monica"],
};

console.log(newton);

console.log(newton.lastName);
console.log(newton["lastName"]); // We can put expression here

newton.location = "Dubai";
newton["twitter"] = "@NewtonFlips";

console.log(newton);

newton.bestFriend = `${newton.firstName} has ${newton.friends.length} friends, and his best friend is called ${newton.friends[0]}.`;
console.log(newton);
 */
/*
const newton = {
  firstName: "Newton",
  lastName: "Flips",
  birthYear: 1994,
  job: "auditor",
  friends: ["Joey", "Chandler", "Monica"],
  hasDriverLicense: true,

  calcAge: function () {
    return 2037 - this.birthYear;
  },

  // calcAge: function () {
  //   this.age = 2037 - this.birthYear;
  //   return this.age;
  // }, 
};
newton.calcAge();
console.log(newton);
console.log(newton.calcAge());
*/

// LESSON 12

// CODING CHALLENGE

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/* 
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
 */
