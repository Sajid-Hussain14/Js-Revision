/************MATH STUFFFF************ */
// console.log(Math)  //yes it is an object 
// console.log(Math.abs(-6))  //- to +
// console.log(Math.round(4.4))  //get round off
// console.log(Math.ceil(3.3)) //get top number
// console.log(Math.floor(3.3))  // get lower one
// console.log(Math.min(2,3,4,56,6))  
// console.log(Math.max(34,5,6,7,7,6,4,3)) 
// console.log(Math.random())  // values between 0 to 1
// console.log((Math.random()*20) +1)  
// // to shift the values but there could be problem like math.floor could give 0 incase of 0.1 to avoid that i added +1 means value should be +1::: so will get  1 to 9 



// const min = 20
// const max = 30

// console.log(Math.floor(Math.random() * (max - min +1)) + min)








/*******************NUMBERS STUFF */
const num = 300
console.log(num)

const balance = new Number(200)
console.log(balance)

console.log(balance.toString()) //it is actually string now
console.log(balance.toFixed(2))

const num2 = 22.4454

console.log(num2.toPrecision(3))


const num3 = 7000000

console.log(num3.toLocaleString('en-IN'))
