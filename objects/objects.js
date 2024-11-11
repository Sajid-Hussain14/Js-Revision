// //signleton
// // object literal

// // Object.create  can be used --through constructor like as in signleton
// const mysymb = Symbol("key12")
// const user = {
//     name: "SJid",
//     "mname":"HUssain",
//     [mysymb]: "mykey13", //way to use it 
//     age: 23,
//     loc: "kmr",
//     email: "sajid@gc.com",
//     islogin: true,
//     lastlogin: ["friday", "tuesday"]
// }

// // console.log(user.email)
// // console.log(user["email"])
// // console.log(user["mname"])
// // console.log(user[mysymb])

// user.email = "sajid123@gcpp.com"
// // Object.freeze(user)
// user.email = "saj11111111@gcpp.com"
// console.log(user)

// user.greeting = function(){ //make sure to unfreeze above
//     console.log("hello sajid")
// }

// // console.log(user.greeting())

// user.greeting2 = function(){
//     console.log(`hello userrr, ${this.age}`)
// }
// // console.log(user.greeting())
// console.log(user.greeting2())



/*******doingggg sngleton */

// const fbusr = new Object()
const fbusr = {}
fbusr.id ="32135"
fbusr.name = "adam"
fbusr.islogin = true
fbusr.age = 23

// console.log(fbusr)

const newusr = {
    email: "newww@gm.com",
    Newname : {
        fname: "jhon",
        age: 22,
    }
}

// console.log(fbusr.name)
// console.log(newusr.Newname)


const obj1 = {
    a:"all",
    b:"new",
    c:"do"
}
const obj2 = {
    1:"on",
    2:"good",
    3:"elt"
}

const obj3 = {
    obj1,obj2
}
// console.log(obj3)

// const obj4 = Object.assign({}, obj1,obj2)
const obj5 = {...obj1, ...obj2} //using spread operator
// console.log("new results is here", obj5)
const usrdata = [
    {
        id: 1,
        email: "kasjfd@gm.com"
    },
    {
        id: 2,
        email: "abc@gm.com"
    },
    {
        id: 3,
        email: "ffff@gm.com"
    },
    {
        id: 4,
        email: "llllll@gm.com"
    }
]

usrdata[1].email
// console.log(fbusr)

// console.log(Object.keys(fbusr)) //important get keys as arry
// console.log(Object.values(fbusr)) //important get values as arry
/**************8DESTRUCTURING OF OBJECTS IN JS */
const course = {
    coursename : "JS",
    PRICE : "1000",
    CourseInstructor : "sajid"
}

//better way to print the details

// const {CourseInstructor} = course  //and we can change the keynames as well here eg:
const {CourseInstructor: instructor} = course

console.log(instructor)

//API RELATED THINGS
// {
//     "name":"sajid",
//     "course" : "jss",
//     "price": "400"

// }

[
    {

    },
    {

    }
]
