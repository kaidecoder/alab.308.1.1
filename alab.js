
//Known Data
let totalDistance = 1500
let carSpeed1 = 55
let carDistance1 = 30
let carSpeed2 = 60
let carDistance2 = 28
let carSpeed3 = 75
let carDistance3 = 23
let budget = 175
let averageFuelCost = 3

//Calculated Data
let gallons1PerHour = carSpeed1 / carDistance1
let gallons2PerHour = carSpeed2 / carDistance2
let gallons3PerHour = carSpeed3 / carDistance3

let averageSpeed  = (carSpeed1 + carSpeed2 + carSpeed3)/3

//Formula: Distance = Speed * Time
let totalTime = totalDistance / averageSpeed

//Find the gallons by speed travelled
let gals1 = gallons1PerHour * totalTime
let gals2 = gallons2PerHour * totalTime
let gals3 = gallons3PerHour * totalTime

let totalGallons = gals1 + gals2 + gals3
console.log("The total number of gallons is: ", Math.round(totalGallons) + " gallons.")

let totalCost = averageFuelCost * totalGallons

if(totalCost >= budget){
    console.log("Your budget is enough to cover the fuel expense.")
}else{
    console.log("Sorry, you need more funds.")
}

console.log("The total time of the trip is: ", Math.round(totalTime) + " hours.")

console.log("Comparing The Results")
console.log("The gallons used at 55 miles per hour is: ", Math.round(gals1))
console.log("The gallons used at 60 miles per hour is: ", Math.round(gals2))
console.log("The gallons used at 75 miles per hour is: ", Math.round(gals3))
console.log("It appears that the best rate of travel would be at 55 miles per hour.  However, the user would have to decide which is more important: saving on gas, or spending more time on the road.")