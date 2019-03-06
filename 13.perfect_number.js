function perfectNumber(number) {
   let arrayDevisor = [];
   let sumDevisor = 0;

   for (let i = 1; i < number; i++) {
       if (number % i === 0) {
           arrayDevisor.push(i);
       }
   }

   for ( let i = 0; i < arrayDevisor.length; i++) {
         sumDevisor += arrayDevisor[i];
   }

   if (sumDevisor === number) {
       console.log('We have a perfect number!');
   }
    
   else {
       console.log('It`s not so perfect!');
   }
}

perfectNumber(1236498)