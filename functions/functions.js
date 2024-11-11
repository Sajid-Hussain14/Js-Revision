function fName(){
console.log("hi")
console.log("sdfg")

console.log("sdfgsdfg")

console.log("dfgsdfg")

console.log("dfgsdfg")

console.log("hisdfgsd")

};

// fName()

function addnums (num1, num2) {
    // console.log(num1+num2)
    // let result = num1 + num2
    // return result
    return num1 + num2
};
const result = addnums(4, 5)
// console.log("Result : ", result)


function loginUserMessage(username = "sajid") {
    if(!username){
        // console.log("Please enter a username")
        return
    }
    return  `${username} just logged in`
}

// console.log(loginUserMessage("hussain"))

function  calcartPrice(val1, val2, ...num1){  //rest/spread operator
    return num1
}
// console.log(calcartPrice(2,4,5,6,878))

const user1 = {
    usname: "sajid",
    price: 111
}

function handleObject (anyOBJ){
        // console.log(`username is ${anyOBJ.usname} and price  is ${anyOBJ.price}`)
}

handleObject(user1)

const arrr1 = [233,4454,566,45665]

function returnarrval(getarry){
    return getarry[2]


}

// console.log(returnarrval(arrr1))

/****************CLOSURE*************************/
// let a = 300

// if(true){
//     let a = 40;
//     const b = 30;
//     console.log("INNER: ", a)
// }

//closure implementation 
function one(){
    const user1 = "sam"

    function two(){
        const website = "google"
        console.log(user1)
    }
    // console.log(website)
    // two()

}

// one()

//SAME CASE APPLIES FOR IF ELSE

/*********INTERESTING**************** */
console.log(add111(5)) // calling the function this one will work
function add111(num){
    return num + 5
}
///HOSITING 
add222(6)   //error coz a vairable holds the function as before initialization
const add222 = function (num) {
    return num + 6
}