

for (let i = 0; i < 12; i++) {
    const element = i;
    if (i == 6){
        // console.log("6 is the number")
    } else {
    // console.log(element)
    }
}
for (let i = 0; i <= 10 ; i++) {
    // console.log(`OUter loop vales is ${i}`)
    for (let j = 0; j <= 5; j++) {
        // console.log(`INNER loop vales is ${j}`)
        // console.log(i + '*' + j + '=' + i*j)
        
    }
    
}


let arr1 = ["iron", "copper", "steel"]

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    // console.log(element)
}

// for (let i = 0; i <= 20; i++) {
//     if (i === 5){
//         console.log(`detected Value is ${i}`)
//         break
//     }
//     console.log(`Value is ${i}`)
// }

// for (let i = 0; i <= 20; i++) {
//     if (i === 5){
//         console.log(`detected Value is ${i}`)
//         continue //will execute atleast once
//     }
//     console.log(`Value is ${i}`)
// }

// let index = 3
// while (index <=4 ) {

//     console.log(`Value is ${index}`)
//     index++
// }

// let score = 10

// do {
//     console.log(`score is ${score}`);
//     score ++
// } while (score <= 5);


//for of loop especially for arrys

const arr = [1,234,45,5,6]

for (const i of arr) {
    // console.log(`values of ${i}`)
}

const greetings = ["hello sajid"]
for (const i of greetings) {
    // console.log(`values of ${i}`)
    
}

//MAPS


const map = new Map()

map.set('tf','ch','ul')
map.set('in','jp','us')
map.set('as','chi','un')

// console.log(map)`



for (const [key, value] of map) {
    // console.log(key,'=' , value)

}


//for in
// const myobj = {

//     g1 : 'gif',
//     g2 : 'car'
// }
// for (const key in myobj) {
//     console.log(myobj[key])

// }

// const lang = ["eng", "chi", "thai"]

// for (const key in lang) {
//      console.log(lang[key])
        

// }

// const map1 = new Map()  //not oterabkle

// map.set('tf','ch','ul')
// map.set('in','jp','us')
// map.set('as','chi','un')

// // console.log(map)`



// for (const key in map1) {
//     console.log(key)

// }


// for each loop

const code = ['python',"java","js"]

code.forEach(i => {
    console.log(i)
});