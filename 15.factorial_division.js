function factorialDivision(firstNumber,secondNumber){
let firstNumberFactorial = factorialCalculator(firstNumber);
let secondNumberFactorial = factorialCalculator(secondNumber);
let result = firstNumberFactorial / secondNumberFactorial;
console.log(result.toFixed(2));
}

factorialDivision(5, 2)

function factorialCalculator(number) {
    let factorial = 1;

    for (let i = 2;i <= number;i ++) {
        factorial *= i;
    }

    return factorial;
}