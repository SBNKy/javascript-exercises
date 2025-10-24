const palindromes = function (sentence) {
    const skip = [".", "!", " ", ","];

    const cleaned = sentence
                        .toLowerCase()
                        .split("")
                        .filter((letter) => !skip.includes(letter))
                        .join("");

    const reversed = cleaned
                        .split("")
                        .reverse()
                        .join("");

    return reversed === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
