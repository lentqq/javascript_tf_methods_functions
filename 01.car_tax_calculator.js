function cartaxCalculator(power) {
    printCarTax(power);
}

function printCarTax(power) {
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

    console.log(`${result.toFixed(2)} lv.`);
}

cartaxCalculator(255.90)