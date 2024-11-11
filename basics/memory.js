/***************STACK AND HEAP
 * 
 * 
 * TWO TYPE OF MEMORY STACK AND HEAP
 * 
 *STACK is used for primitive dts--here we get copy of variable
 *
 * HEAP is used for non primitive dts--here we get reference of orginal value
 */

 let fName = "Sajid" //recall DS--stack structure and heap
 let mName = fName

 mName = "Hussain"
 console.log(fName)
 console.log(mName)


 let usr1 = {
    email:"kasdjhfa@gc.com",
    upi:"user56@upi.com"
 }

 let usr2 = usr1
 usr2.email = "sajid@gcp.com"
 console.log(usr1.email)
 console.log(usr2.email)
