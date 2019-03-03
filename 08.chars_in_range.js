function charsInRange(start, end){
     let startPosition = start.charCodeAt(0);
     let endPosition = end.charCodeAt(0);
     let charsInRange = [];

     if (startPosition > endPosition){
         let temp = startPosition;
         startPosition = endPosition;
         endPosition = temp;
     }

     for (let i = startPosition +1; i < endPosition;i ++){
         charsInRange.push(String.fromCharCode(i));
     }

     console.log(charsInRange.join(' '));
}

charsInRange('C', '#')