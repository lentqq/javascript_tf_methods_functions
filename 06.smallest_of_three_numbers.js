function smallestNumber(first,second,last){

//First way
// let smallestNumber = Math.min(first,second,last);

//Second way
let smallestNumber = 0;

if (first <= second && first <= last){
    smallestNumber = first;
}
else if (second < first && second <= last){
    smallestNumber = second;
}
else {
    smallestNumber = last;
}

console.log(smallestNumber);
}

smallestNumber(100,-25,0)