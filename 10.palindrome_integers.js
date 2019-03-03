function palindromeIntegers(arrayNumbers){
    let isPlaindrome =(currentNumber,reversedNumber) => currentNumber === reversedNumber;

    for (let i = 0; i < arrayNumbers.length; i++){
        let currentNumber = arrayNumbers[i];
        let reversedNumber = Number(currentNumber.toString()
        .split('')
        .reverse()
        .join(''));
        console.log(isPlaindrome(currentNumber,reversedNumber));
    }
}
 
palindromeIntegers([123,323,421,121])
