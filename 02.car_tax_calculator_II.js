function carTaxCalculator (power, age){
    let powerPrice = carTaxPower(power);
    let ageCoefficient = coefficient(age);
    let totalPrice = powerPrice * ageCoefficient;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}

carTaxCalculator(90, 7)

function carTaxPower(power){
    let result = 0;

    if (power <= 37) {
        result = power * 0.43;
    }
    else if (power > 37.01 && power <= 55.00) {
        result = power * 0.50;
    }
    else if (power > 55.01 && power <= 74.00) {
        result = power * 0.68;
    }
    else if (power > 74.01 && power <= 110.00) {
        result = power * 1.38;
    }
    else if (power > 110.00) {
        result = power * 1.54;
    }
    return result.toFixed(2);
}


function coefficient (age){
    let coefficient = 0;
    if (age < 5){
        coefficient = 2.80;
     }
     if (age >= 5 && age <= 14){
         coefficient = 1.50;
     }
     if (age > 14){
         coefficient = 1.00;
        }
        
        return coefficient;
    }

