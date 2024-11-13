const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `PLEASE GIVE VALID HEIGHT ${height}`;
    }
    // results.innerHTML = `${height}`
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `PLEASE GIVE VALID WEIGHT ${weight}`;
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //output
        results.innerHTML = `<span> ${bmi} </span>`
        if (bmi < 18.6){
            results.innerHTML = `You are under weight and your bmi is ${bmi} `
        } else if( bmi >= 18.6 && bmi <= 25 ){
            results.innerHTML = `You are normal and your bmi is ${bmi} `
        } else {
            results.innerHTML = `You are over weight and your bmi is ${bmi} `
        }
    }
    // results.innerHTML = `${height}`
})