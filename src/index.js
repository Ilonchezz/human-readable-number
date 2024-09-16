module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }

    let result = '';
    const hundred = Math.floor(number / 100);

    if (hundred > 0) {
        result = `${toReadableDigit(hundred)} hundred`; 
    }

    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;

    if (tens === 1) {
        result += ' ' + toReadableTeens(ones);

        return result.trim();
    }

    if (tens > 1) {
        result += ' ' + toReadableTens(tens);
    }

    result += ' ' + toReadableDigit(ones);

    return result.trim();
}

function toReadableDigit (digit) {
    switch (digit) {
        case 0: return '';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
}

function toReadableTeens (digit) {
    switch (digit) {
        case 0: return 'ten';
        case 1: return 'eleven';
        case 2: return 'twelve';
        case 3: return 'thirteen';
        case 4: return 'fourteen';
        case 5: return 'fifteen';
        case 6: return 'sixteen';
        case 7: return 'seventeen';
        case 8: return 'eighteen';
        case 9: return 'nineteen';
    }
}

function toReadableTens (digit) {
    switch (digit) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
    }
}
