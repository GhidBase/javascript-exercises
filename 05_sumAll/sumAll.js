const isNegative = (a,b) => a < 0 || b < 0;
const isNotNumber = (a,b) => typeof a != "number" || typeof b != "number";
const isNotInteger = (a,b) => !Number.isInteger(a) || !Number.isInteger(b);

const sumAll = function(minInput,maxInput) {
    if(isNegative(minInput,maxInput) || isNotNumber(minInput,maxInput) || isNotInteger(minInput,maxInput)) {
        return "ERROR";
    }

    if(minInput > maxInput)
    {
        let tempNum = minInput;
        minInput = maxInput;
        maxInput = tempNum;
    }
    let total = 0;
    for(i = minInput; i <= maxInput ; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
