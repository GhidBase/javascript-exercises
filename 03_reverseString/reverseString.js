const reverseString = function(input) {
    let newString = [];
    for (const letter of input) {
        newString.unshift(letter);
    }
    newString = newString.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
