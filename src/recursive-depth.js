const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let maxChildDepth = 0;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let childDepth = this.calculateDepth(item);
        if (maxChildDepth < childDepth) {
          maxChildDepth = childDepth;
        }
      }
    }

    return depth + maxChildDepth;
  }
};