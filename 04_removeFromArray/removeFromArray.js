const removeFromArray = function(inputArray, ...args) {
    const newArray = [];

    inputArray.forEach((item)=>{
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
