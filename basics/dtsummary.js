// WE KNOW primitive dts and they are call by value ---->  they are -- string, number, boolean, null , undefined, symbol(to make any value as unique), bigInt  

// and non--primitive call by reference---> they are --- arrays, objects, functions


const score = 200

const scorval = 101.2

const isLOgIn = false

const outTEmp = null
let userEmail;

const id = Symbol('123') //return type is also symbol
const id1 = Symbol('123')

console.log(id == id1) //false output-- as the return is not same

const BiGint = 123542346235n

console.log(typeof BiGint)



/**************************NON PRIMITIVE
 * 
 * ******** array, objects and functions
 ***************************************/


const members = ["sajid", "hussain","hussian2"];


let obj1 = {

    name:"sajid",
    age : 23
}

const myFUNC = function(){
    console.log("IN THE FUNCTIONS")
}


myFUNC()// --->calling the funcion