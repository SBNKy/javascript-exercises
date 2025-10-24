const findTheOldest = function(arr) {
    return arr
        .map((person) => {
            if (typeof person.yearOfDeath === "undefined") person.yearOfDeath = new Date().getFullYear();
            return person;
        })
        .reduce((oldest, current) => current.yearOfDeath - current.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth ? current : oldest, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
