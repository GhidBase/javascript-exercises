const fibonacci = function(iteration) {
    if (iteration == 0)
        return 0;
    if (iteration < 0)
        return "OOPS";

    let lastTwo = [1,0];
    for(i = 1; i < iteration ; i++) {
        let nextFib = lastTwo[0]+lastTwo[1];
        lastTwo[1] = lastTwo[0];
        lastTwo[0] = nextFib;
    }
    return lastTwo[0];
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
