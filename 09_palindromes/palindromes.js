const palindromes = function (word) {
    let filteredWord = word.toLowerCase().split("").filter(item => /^[a-z0-9]+$/.test(item)).join("")
    let reversedWord = filteredWord.split('').reverse().join("");
    return reversedWord == filteredWord;
};

console.log(palindromes('r3ace3car'));
// Do not edit below this line
module.exports = palindromes;
