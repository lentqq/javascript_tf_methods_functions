function wrongResult (numOne, numTwo, numThree){

    let operation;
    operation = (a, b, c) => a * b *c;
    let result = operation(numOne, numTwo, numThree);
    if (result >= 0){
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}

wrongResult(-1, -2, -3)