// javascript classes as objects 

// same concepts as studied before

//oop
//object
//collection of properties and methods
//toLowerCase

//best practice to use

// object literal

// Abstraction--hide details like fetch()
//ENcansulation--like wrapping
//INheritence--using data of one in another
//polymorphism---different ways

const user = {
    username: "sajid",
    logincount: 5,
    signin: true,

    getUserdata: function(){
        // console.log("inside the function");
        // console.log(`Usernameeeeee: isss ${this.signin}`);

        
    }
}

// console.log(user.username);
// console.log(user.getUserdata());

//constructor function


function USER1(username, logincount, signin){
    this.username = username;
    this.logincount = logincount;
    this.signin = signin;
    
    
    return this
}

const user11 = USER1("sajid",10,false)

console.log(user11);
