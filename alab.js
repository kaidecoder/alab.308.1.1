


let totalDistance = 1500
let carSpeed1 = 55
let carDistance1 = 30
let carSpeed2 = 60
let carDistance2 = 28
let carSpeed3 = 75
let carDistance3 = 23
let budget = 175
let averageFuelCost = 3

const time1 = carDistance1 / carSpeed1
const time2 = carDistance2 / carSpeed2
const time3 = carDistance3 / carSpeed3
let totalTime = time1 + time2 + time2

let gallons1 = carSpeed1 / carDistance1
let gallons2 = carSpeed2 / carDistance2
let gallons3 = carSpeed3 / carDistance3

let averageSpeed  = (carSpeed1 + carSpeed2 + carSpeed3)/3

totalTime = totalDistance / averageSpeed

let gals1 = gallons1 * totalTime
let gals2 = gallons2 * totalTime
let gals3 = gallons3 * totalTime

let totalGallons = gals1 + gals2 + gals3
console.log("The total number of gallons is: ", totalGallons)
let totalCost = averageFuelCost * totalGallons

if(totalCost >= budget){
    console.log("Your budget is enough to cover the fuel expense")
}else{
    console.log("Sorry, you need more funds")
}

console.log("The total time of the trip is: ", totalTime)

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures

console.log(isSum50)
console.log(isTwoOdd)
console.log(isOver25)
