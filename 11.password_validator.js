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
   }
}