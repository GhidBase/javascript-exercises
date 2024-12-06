const findTheOldest = function(arr) {
    arr.sort((a, b) => findAge(a) - findAge(b))
    console.table(arr)
    return arr[arr.length-1]
};

function findAge(person) {
    let yearOfDeath;
    if(!person.yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    else {
        yearOfDeath = person.yearOfDeath;
    }
    person['age'] = yearOfDeath - person.yearOfBirth;
    return yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
