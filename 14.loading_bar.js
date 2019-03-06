function loadingBar(number) {

    if (number === 100) {
        console.log('100% complete!');
        console.log('[%%%%%%%%%%]');
    }
    else {
        let percent = `${number}%`;
        let arraySigns = [printPercent(number), printDots(number)];

        console.log(percent, '[', arraySigns.join(''), ']');
        console.log('Still loading...');
    }
}

loadingBar(100)

function printPercent(number) {
    let str = '';

    for (let i = 0; i < number / 10; i++) {
        str += '%' + '';
    }

    return str;
}

function printDots(number) {
    let str = '';

    for (let i = 0; i < (100 - number) / 10; i++) {
        str += '.' + '';
    }

    return str;
}