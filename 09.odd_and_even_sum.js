function oddAndEvenSum (number){

    let oddSum = 0;
    let evenSum = 0;
    let arrayNumbers = number.toString().split('').map(Number);
    
    for (let i = 0; i < arrayNumbers.length; i ++){
      if (arrayNumbers[i] %2 ===0){
          evenSum += arrayNumbers[i];
      }
      else {
          oddSum += arrayNumbers[i];
      }
    }
 console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

 
}

oddAndEvenSum(3495892137259234)