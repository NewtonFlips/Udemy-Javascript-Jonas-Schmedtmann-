"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* 
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});
 */

// Destructuring is a process of breaking large down to small small data elements

// Basic syntax of array destructuring an array
/* 
const [a, b, c] = [2, 3, 4];
console.log(a, b, c);
 */
/* 
const [first, second] = restaurant.categories;
console.log(first, second);
 */

// If we want to skip a particular element while performing destructuring, we simple leave a blank space.
/* 
const [first, , third] = restaurant.categories;
console.log(first, third);
*/

// switching elemnts
/* 
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // this statement will switch elements.
console.log(main, secondary);
 */
/* 
console.log(restaurant.order(2, 0));

let [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
[main, starter] = restaurant.order(2, 0);
console.log(starter, main);
 */
/* 
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(1, j);
 */
/* 
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(1, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

// DESTRUCTURING OBJECTS
/* 
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);
 */

// Nested objects
/* 
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
 */

// SPREAD OPERATOR (unpacking all the elements all at once.)
/* 
const arr = [2, 8, 9];

// take all the values out of the array. When we want to merge arrays. It does not create new elements. That is the main difference with destructuring.
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join arryas
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
 */
// Spread operator works on all iterables.
// Iterables: arrays, maps, strings, sets NOT OBJECTS
// We can make shallow copies of objects with spread operator.

// REST PATTERN
/* 
// it basicallt packs elements into an array.

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// It also works on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// REST ARGUMENTS

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 54, 66, 868, 78);
const x = [50, 50, 50];
add(...x);
 */

// they can use any data type
// the can return any data type
// they can do short circuiting / short circuit evaluation. [if the first value is the truthy value, it will immediately return that value]
/* 
console.log(3 || "Newton");
console.log(0 || "Newton");

console.log(7 && "Newton");
console.log(0 && "Newton");
 */
/* 
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guests2 = restaurant.numGuests ?? 10;
console.log(guests2);
 */

// CODING CHALLENGE 1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/* 
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = [...players1];
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// Rest parameters
const printGoals = function (...players) {
  let playersScored = players;
  console.log(playersScored);
  console.log(playersScored.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// THE BELOW STATEMENT IS IMPORTANT
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");
 */

// The new type of looping (The For-OF loop)
/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
 */
