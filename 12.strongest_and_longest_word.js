function shortestAndLongestWord(string) {
    let arr = string.split(' ');
    let lengthElements = [];
    
    for (let i = 0; i < arr.length; i ++){
        lengthElements.push(arr[i].length);
    }
    console.log(Math.min(lengthElements.join(',')));
}

shortestAndLongestWord('hello by kolyo ot michuryn')