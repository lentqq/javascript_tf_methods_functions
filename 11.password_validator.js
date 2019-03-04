function passwordValidator(password) {
    let isValid = true;
    let digitCount = 0;
    let incorectElement = false;
    password = password.toLowerCase();

if (password.length < 6 || password.length > 10){
    console.log('Password must be between 6 and 10 characters');
    isValid = false;
}

   for (let index in password){
       let asciiElement = password.charCodeAt(index);

       if (asciiElement > 47 && asciiElement < 58){
           digitCount ++;
       }

       if (asciiElement < 48 || (asciiElement > 57 && asciiElement < 97) || asciiElement > 122){
           incorectElement = true;
       }
   }

   if (incorectElement){
       console.log('Password must consist only of letters and digits');
       isValid = false;
   }

   if (digitCount < 2){
       console.log('Password must have at least 2 digit');
       isValid = false;
   }

   if (isValid){
       console.log('Password is valid');
   }
}

passwordValidator('Pa$s$s')