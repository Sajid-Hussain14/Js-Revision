const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
    // console.log("button details are: ",button);
    //adding event listener to each button
    button.addEventListener('click', function(e) {
         console.log(e)
         console.log(e.target)

         const color = body.style.backgroundColor = e.target.id;
         switch(color){
            case 1: 'grey'
                    body.style.backgroundColor = 'grey';
                    break;
            case 2: 'white'
                    body.style.backgroundColor = 'grey';
                    break;
            case 3: 'blue'
                    body.style.backgroundColor = 'grey';
                    break;
            case 1: 'yellow'
                    body.style.backgroundColor = 'grey';
                    break;
            default:
                break;
         }


        //  if (e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        //  }
    })

});
