const form = document.querySelector('#bmi-form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const results = document.querySelector('#results');

// if we write height and weight line over here, then it would give empty input as 
//  we will get empty value as soon as form creates and when even occurs of
// submit, then empty value gets passed which we didn't want.

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (height < 0 || isNaN(height)) {
        // results.innerHTML = "Please give a valid height";
        // optimised way:
        results.textContent = "Please give a valid height";
        return;
    } else if (weight < 0 || isNaN(weight)) {
        // results.innerHTML = "Please give a valid weight";
        results.textContent = "Please give a valid weight";
        return;
    } else {
        const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));

        let category = "";

    if (bmi < 18.6) {
        category = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal Weight";
    } else {
        category = "Over Weight";
    }
        
    // show the result
    results.innerHTML = `
        <p>Your BMI is <strong>${bmi}</strong></p>
        <p>Status: <strong>${category}</strong></p>
    `;
    } 
});
