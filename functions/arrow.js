const user = {
    uname : "sajid",
    age : 22,
    price : 6888,

    welcome: function (){
        // console.log(`${this.uname}, welcome to website`)
// console.log(this)

    }
}

user.welcome()
user.uname= "HELLO"
user.welcome()

// console.log(this)
//ARROW FUNCTION SIMPLE DEMO
const hello = () => {
    let usname = "hitesh"
    console.log(this)
    
}
// hello()
//ARROW FUNCTION SIMPLE DEMO
// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(5,5))

//ARROW FUNCTION AS IMPLICIT RETURN JUST REMOVING {} BRACES AND INCASE OF OBJECT WE MUST USE CURLY BRACES AS ({OBJECT})
const add = (num1, num2) => (num1 + num2)

console.log(add(5,5))


/***immediately invoked function expressions (IIFE) */
//ITSLIKE GETTING SOMETHING DONE RIGHT AFTER IT IS OPENED OR FIRST ACTION NEEDS TO BE DONE--
//SAMPLE FUCNTION
function code() {
    console.log(`DB CONNECTED`);
}

//iife FUNCTION --To get rid of global scope pollution
(function code(name) {
    console.log(`DB CONNECTED ${name}`);
}
) ('sajidhussain');  //need to add semicolon as it is required

/// as in arrow function

( (name) => {
    console.log(`DB CONNECTED ${name}`);

}) ('hussain')