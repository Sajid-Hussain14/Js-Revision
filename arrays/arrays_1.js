//refere to mdn etc 

const arr1 = ["sajid", "hussain","G"]
const arr2 = ["git", "github","gitlab"]

// arr2.push(arr1)
// const arr3 = arr1.concat(arr2) 

const arr3 = [...arr2,...arr1] //spread operations

console.log(arr3)