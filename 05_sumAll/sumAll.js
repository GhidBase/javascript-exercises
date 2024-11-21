const sumAll = function(minInput,maxInput) {
    if(minInput < 0 || typeof minInput != "number" || typeof maxInput != "number" || !Number.isInteger(minInput) || !Number.isInteger(maxInput)) {
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
