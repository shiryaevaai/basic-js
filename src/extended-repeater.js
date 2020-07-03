const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // Parse base string
  let baseStr = str == null ? 'null' : str;
  baseStr = (typeof baseStr == 'string') ? baseStr : baseStr.toString();

  if (options === undefined) {
    return baseStr;
  }

  // Parse args related to base string
  let result = '';
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 0;

  if (repeatTimes == 0) {
    return result;
  }

  let separator = options.hasOwnProperty('separator') ? options.separator : '+';

  // Parse args related to additional string
  let additionalStrRepeated = '';

  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ?
    options.additionRepeatTimes :
    0;

  let additionalStr = options.hasOwnProperty('addition') ?
    options.addition :
    '';
  additionalStr = additionalStr == null ? 'null' : additionalStr;
  additionalStr = (typeof additionalStr == 'string') ?
    additionalStr :
    additionalStr.toString();

  if (additionRepeatTimes != 0 && additionalStr != '') {

    let additionSeparator = options.hasOwnProperty('additionSeparator') ?
      options.additionSeparator :
      '|';

    if (additionalStr != '') {
      let additionalStrArray = new Array(additionRepeatTimes);
      additionalStrRepeated = additionalStrArray.fill(additionalStr).join(additionSeparator);
    }
  }

  // Combine
  let strArray = new Array(repeatTimes);
  result = strArray.fill(baseStr + additionalStrRepeated).join(separator);
  return result;
};
  