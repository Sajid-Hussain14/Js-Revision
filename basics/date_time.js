//represents ms since the midnight at the begining of january 1,1970 UTC 


let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024,0,11) //months in js starts from 0

console.log(myCreatedDate.toDateString());


console.log(myCreatedDate.toLocaleString());

let mytimestp = Date.now()
// console.log(mytimestp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let date1 = new Date()

console.log(date1.getDate() + 1 )
console.log(date1.getDay());

date1.toLocaleString('default',{
    weekday: 'long',
})




