const sumAll = function(a, b) {
    console.log(typeof a);
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let upperBound = Math.max(a, b), lowerBound = Math.min(a, b);
    let sum = 0;
    for (; lowerBound <= upperBound; upperBound--) {
        sum += upperBound;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
