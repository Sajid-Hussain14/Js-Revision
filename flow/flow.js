// const temp = 33

// if (temp === 40) {
//     console.log("less than 40 ");

// } else {
//     console.log("equal to 40 ")
// }

// const bal  = 1000 

// if(bal > 500) console.log("executed"),
// console.log("done");

// if ( bal< 500) {
//     console.log("less than ");
// } else if (bal < 600 ){
//     console.log("less than 600");
// } else{
//     console.log("greater than 700");
// }

// const usrlogin = true
// const debitCARD = true
// const loginemail = false
// const logingoogle = true 
// if(usrlogin && debitCARD){
//     console.log("can buy this item");
// }

// if(loginemail || logingoogle) {
//     console.log("user logged in");
// }

//USING SWITCH
// syntax in JS
// const (key) {
//     case  value:
//         break;

//         default :
//             break;
// }

// const month = 4

// switch(month){
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     default:
//         console.log("dont now ")
//         break;
// }

/******8TRUTHY AND FALSY VALUES 
 *
 * 
 *  false,0,-0, BINGINT On,null,undefined, NaN ==>> these are falsy values and remaining are surprised truthy values eg --- "0",'false'," ", [], {},function () {}
*/

// const user = []

// if ( user.length === 0){
//     console.log("it is empty")
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("it is empty")
// }


/************NULLISH COALESCING OPERATOR ( ??)
 * 
 * : null, undefined
 */

let val1 ;

// val1 = 23 ?? 10
// val1 = null ?? 22  //if there is null value it will take another value

// val1 = undefined ?? 11 //if there is undefined value it will take another value

val1 = null ?? 2 ?? 30

console.log(val1)