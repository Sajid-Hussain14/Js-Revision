let str1 = "sajid"
let str2 = "hussain"

console.log(`HEllo this is ${str1 + str2}`)

const gameName = new String('CODEWITHSAJID')

console.log(gameName[3])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1))
console.log(gameName.indexOf('W'))

const newName = gameName.substring(3,5)
console.log(newName)
const newName1 = gameName.slice(-1,5)
console.log(newName1)

const newStr = "   Sajid Hussain    G . "
console.log(newStr.trim()) //first and last spaces removed


const addrr = "https://sajid.com/saj%30choudhary"
console.log(addrr.replace('%30', '-'))
console.log(addrr.includes('saj'))
console.log(addrr.includes('husy'))

const Lname = "SAJh-G"

console.log(Lname.split('-'))


