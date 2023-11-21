

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
