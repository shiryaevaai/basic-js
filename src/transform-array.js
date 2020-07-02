const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError();
    }

    var discardNext = '--discard-next';
    var discardPrev = '--discard-prev';
    var doubleNext = '--double-next';
    var doublePrev = '--double-prev';

    let operations = [discardNext, discardPrev, doubleNext, doublePrev];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case discardNext:
                i++;
                break;
            case discardPrev:
                if (i > 0 && operations.indexOf(arr[i - 1]) == -1 && (i < 2 || arr[i - 2] != discardNext)) {
                    result.pop()
                }
                break;
            case doubleNext:
                if (i + 1 != arr.length) {
                    result.push(arr[i + 1]);
                    result.push(arr[i + 1]);
                }
                i++;
                break;
            case doublePrev:
                if ((result.length > 0 && operations.indexOf(arr[i - 1]) == -1) && (i < 2 || arr[i - 2] != discardNext)) {
                    let item = result[result.length - 1];
                    result.push(item);
                }
                break;
            default:
                result.push(arr[i]);
                break;
        }
    }

    return result;
};
