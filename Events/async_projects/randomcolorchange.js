//Generate a random color
const randcolor = function(){
    const  hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
};
// console.log(randcolor());
let intervalID
const startChangeColor = function(){
    if(!intervalID){
     intervalID = setInterval(changebgcolor,1000)
    }
    function changebgcolor () {
        document.body.style.backgroundColor = randcolor()
    }

}

const stopChangeColor = function(){
 clearInterval(intervalID)
 //to make the code cleaner as the interval is getting overwritten so its better to flush out the interval
 intervalID = null
}

document.querySelector('#start').addEventListener('click', startChangeColor)

document.querySelector('#stop').addEventListener('click', stopChangeColor)
