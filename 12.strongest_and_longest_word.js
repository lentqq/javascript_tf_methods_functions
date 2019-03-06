function shortestAndLongestWord(string) {
    let arr = string.split(/[,? ]/);
    let longestWord =arr[0];
    let shortestWord = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortestWord.length) {
        shortestWord = arr[i];
        }
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
        }
    }

    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}

shortestAndLongestWord('Hello people, are you familiar with the terms of application at the software university?')
