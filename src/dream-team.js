const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }

    let name = '';

    for (let member of members) {
        if (typeof member == 'string') {
            let trimmedName = member.trim();
            name += trimmedName[0];
        }
    }

    name = name.toUpperCase().split('').sort().join('');
    return name;
};
