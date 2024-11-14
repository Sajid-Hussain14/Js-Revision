// <!-- //The promise means whatever task has been given to it has not been loaded it in the queue and is not completed yet--but that will be completed,-- it represents the eventual completion or failure of an asyn operation and its resulting value -->
// PROMISE IN SHORT -- MEANS SOMEHTING GOING TO HAPPEN IN FUTURE
//  <!-- it has e states
//   1. pending:initial state means neither fulfilled nor rejected
//   2. fulfilled--means op completed sucessfully
//   3. rejected -- means op failed   -->

//IN MOST OF THE CASES PROMISES ARE CONSUMED OFCOURSE THEY ARE CREATED AS WELL
//consume and create
//lets learn to make promises
// new is used to get an instance and ofcourse promise is an object.

//CREATION OF A PROMISE
const promise1 = new Promise(function (resolve,reject) {
    //Do an async task
    //DB calls
    //crypto tasks
    //networkcalls
    setTimeout( function(){
    console.log("ASYNC TAKS IS DONE");
    resolve()
    
    },1000)
})

//CONSUME IT NOW -- can be done by using .then as *then* is directly related to resolve

promise1.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ASYNC 222222");
        resolve()
    }, 1000)
}).then(function() {
    console.log("async 2222222222 done");
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        //suppose this fucntion take some data etc to do that we need to pass results to *then* so to resolve it could be object and arrays as well.--follow
        resolve({
            username: "SAJID IS HERE", email:"sajid.com"
            }
        )
    },1000)
}).then(function (getdata){ //using any parameter name you can access the data which is in the resolve, and we can use async wait etc not just .then or .catch check below
   console.log(getdata)
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Hussain"})
        } else { //here is reject in action
            reject("something is wrong")
        }
    }, 1000)
})
.then((user) => {
        console.log(user);
        return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){  // because there is an error so will use this to continue the execution
    console.log(error);
    
}).finally(() => console.log("Promise is either resolved or rejected"))// this is like defualt it should be here 

const promise5 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"java", pw:"111"})
        } else {
            reject("ERROR: something happened")
        }
    }, 1000)
} );

async function consumepromise5(){
    try { //as it will throw an error incase of error = true so we need to use try and cath
        const response = await promise5 
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
} 

consumepromise5()

//same like .then .catch but it waits for sometime after work is completed then okay otherwise there will be an error-- better for db connections etc --it depends which one you like simple


//working with actual stuff as in APIs

// async function getAllusers () {
//     try {
//         const repsonse1 = await fetch('https://api.github.com/users/Sajid-Hussain14')
//         const data = await repsonse1.json()
//         console.log(data);
//     }
//     catch(error) {
//         console.log("ERRORRRRRRRRRRR");
//     }
    
// }


// getAllusers()

//IMPLEMENT PREVIOUS ONE USING .THEN AND .CATCH
//THERE IS SPECIAL TASK QUEUE: NAMELY MICRO/priorty/fetch TASK QUEUE FOR fetch() so when used it will get prority to be processed and executed:  Actually : this is how it works:  eg: response = fetch("anything")-----------> it work is divided in two parts : A== web browser or native node, B== DATA-- FOR store variables etc into the space/memory::::: first DATA will start process like to reserve space in memory it has two methods: Onfulfilled[takes array]--this is the resolution of promise that is resolve and OnRejection[same]--this is simply rejection names can be differe for these two and also we cannnot push values into these as they are private including DATA or what ever you call it:                              Now talking about WEB BROWSER OR NODE---> IT COuld acces you web based or node based API-from here a network request will generate and we cannot sent that directly so we need some resoure to do that either that is provided by web browser or node js env- once there is request --- then data could go to network or not--- yes or no case only---if there is yes response it will go to in ONfulfullid/resolve if not  then it will go to onRejection. including 404 it will be counted as onfulfilled....... Datawill reserve in memory but it is empty we can say it is undefined---in this case onfulfilled and onrejection will get functions based on what they got from network request and these two are responsible to fullfill data from the memory created once it is fullfilled as per our example above our variable is in Global Memory so its DATAs responsibility to fullfill thatresponse. 
fetch('https://api.github.com/users/Sajid-Hussain14')
.then((responseanything) => {
    return responseanything.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))

