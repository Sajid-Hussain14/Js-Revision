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
        console.log("Please enter a username")
        return
    }
    return  `${username} just logged in`
}

console.log(loginUserMessage("hussain"))