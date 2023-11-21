
//Known Data
// car speed in mph; car distance in mpg
let totalDistance = 1500
let carSpeed1 = 55
let rate1 = 30
let carSpeed2 = 60 
let rate2 = 28
let carSpeed3 = 75
let rate3 = 23
let budget = 175
let averageFuelCost = 3

//Calculated Data
// totalDistance = averageSpeed * totalTime

// let time = totalDistance / speed
let time1 = Math.round(totalDistance / carSpeed1)
let time2 = Math.round(totalDistance / carSpeed2)
let time3 = Math.round(totalDistance / carSpeed3)
let totalTime = time1 + time2 + time3


//Find the gallons
let gallons1 = totalDistance / rate1
let gallons2 = totalDistance / rate2
let gallons3 = totalDistance / rate3


let totalGallons = gallons1 + gallons2 + gallons3
console.log("The total number of gallons for the trip is: ", Math.round(totalGallons) + " gallons.")

let totalCost = Math.round(averageFuelCost * totalGallons)

if(totalCost <= budget){
    console.log(`The total cost of fuel is $${totalCost}. Your budget of $${budget} is enough to cover the fuel expense.`)
}else{
    console.log(`The total cost of fuel is $${totalCost}. Your budget of $${budget} is not enough.  Sorry, you need $${totalCost - budget} more.`)
}

console.log("The total time of the trip is: ", Math.round(totalTime) + " hours.")

console.log("Comparing The Results")
console.log("The gallons used at" + " " + carSpeed1 +  " miles per hour is: ", Math.round(gallons1), " and the time it took is ", (time1)  + " hours.")

console.log("The gallons used at" +  " " + carSpeed2 +  " miles per hour is: ", Math.round(gallons2), " and the time it took is ", (time2) + " hours.")

console.log("The gallons used at" +  " " + carSpeed3 +  " miles per hour is: ", Math.round(gallons3), " and the time it took is ", (time3) + " hours.")



console.log("The best rate of travel would have to be determined by the user.  It should be based on what is more valuable to the user - time or fuel.  If the user wants to save time above everything else, then she should travel at 75 miles per hour.  If she wants to save fuel instead, then she should travel at 55 miles per hour.")