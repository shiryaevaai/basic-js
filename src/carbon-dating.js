const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string') {
        return false;
    }

    var parsedActivity = parseFloat(sampleActivity);
    if (isNaN(parsedActivity) || parsedActivity < 0) {
        return false;
    }

    var k = 0.693 / HALF_LIFE_PERIOD;
    var t = Math.ceil(Math.log(MODERN_ACTIVITY / parsedActivity) / k);
    return t > 0 && isFinite(t) ? t : false;
};
