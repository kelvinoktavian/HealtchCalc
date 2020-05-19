function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var warningMessage = document.getElementById('warning');
    if(weight === '' || height === '') {
        document.getElementById('result').innerHTML.style="display: none;";
        warningMessage.innerHTML = "*Please enter all fields";
    }
    else if(weight <= 0 || height <= 0) {;
        document.getElementById('result').innerHTML.style="display: none;";
        warningMessage.innerHTML = "*Please enter positive number";
    }
    else {
        var bmi = weight/(height/100*height/100);
        result = document.getElementById('result');
        result.innerHTML = `Your BMI is ${bmi.toPrecision(2)}`;

        var conclusion = document.getElementById('conclusion');
        if(bmi < 18.5) {
            conclusion.innerHTML = 'Underweight';
            conclusion.style="color: yellow";
        }
        else if(bmi >= 18.5 && bmi <= 24.9) {
            conclusion.innerHTML = 'Normal weight';
            conclusion.style="color: lightgreen";
        }
        else if(bmi >= 25 && bmi <= 29.9) {
            conclusion.innerHTML = 'Overweight';
            conclusion.style="color: orange";
        }
        else if(bmi >= 30) {
            conclusion.innerHTML = 'Obesity';
            conclusion.style="color: red";
        }

        warningMessage.innerHTML = "";
    }
}

function clearField() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
}