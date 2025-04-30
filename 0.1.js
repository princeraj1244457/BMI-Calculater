
// const form = document.querySelector('form')


// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#result');
//     const guide = document.querySelector('#guide');

//     if (height === '' || height < 0 || isNaN(height)) {
//         result.innerHTML = `please give a vaild height ${height}`;
//         guide.innerHTML = '';
//     }else if (weight === '' || weight < 0 || isNaN(weight)) {
//         result.innerHTML = `please give a vaild weight ${weight}`;
//         guide.innerHTML = '';
//     }else{
//        const bmi= (weight / ((height*height)/10000)).toFixed(2);
//        // show a result
//        const bmivalue = parseFloat(bmi); 
//        result.innerHTML=`<span>${bmi}</span>`;
//     }
    
//     if ( bmivalue <= 18.6) {
//        guide.innerHTML ='Under Weight = Less than 18.6';
//     } else if (bmivalue<= 24.9) {
//         guide.innerHTML='Normal Range = 18.6 and 24.9';
//     }else{
//          guide.innerHTML='overweight = Greater than 24.9';
//     }
  
// })

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const guide = document.querySelector('#guide');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`;
        guide.innerHTML = '';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
        guide.innerHTML = '';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        const bmivalue = parseFloat(bmi);  // define it here
        result.innerHTML = `<span>${bmi}</span>`;

        if (bmivalue <= 18.6) {
            guide.innerHTML = 'Under Weight = Less than 18.6';
        } else if (bmivalue <= 24.9) {
            guide.innerHTML = 'Normal Range = 18.6 and 24.9';
        } else {
            guide.innerHTML = 'Overweight = Greater than 24.9';
        }
    }
});