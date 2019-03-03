function vehicleTaxCalculator(type,power,age){
    let result = 0
    switch (type) {
        case 'motorcycle':
            result = motorCycleTax(power);
            break;

        case 'car':
        result = powerCarTax(power) * coefficientAge(age);
        break;
    }

    console.log(`${result.toFixed(2)} lv.`);
}

vehicleTaxCalculator('motorcycle', 1500, 16)

function motorCycleTax(volume){
  let  tax = 0;

  if (volume > 750){
      tax = 125;
  }
  else if (volume > 490){
      tax = 94;
  }
  else if (volume > 350){
      tax = 63;
  }
  else if (volume > 250){
      tax = 44;
  }
  else if (volume >125){
      tax = 31;
  }
  else {
      tax = 15;
  }

  return tax;
}

// function carTaxCalculator(power, age){
//     let poewrTax = powerCarTax();
//     let coefficient = coefficientAge();
//     let totalPrice = poewrTax * coefficient;
//     return totalPrice;

    function powerCarTax(power){
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

    function coefficientAge(age){
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
// }