const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    if (typeof type === 'undefined') {
      this.t = true;
    }
    else {
      this.t = type;
    }
  }
  encrypt(message, key) {
    this.checkParameters(message, key);

    let result = this.getResult(message, key, this.encryptChar);
    return this.returnResult(result);
  }
  decrypt(message, key) {
    this.checkParameters(message, key);

    let result = this.getResult(message, key, this.decryptChar);
    return this.returnResult(result);
  }
  checkParameters(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw new Error('Invalid parameters');
    }
  }
  returnResult(result) {
    return this.t == true ? result.join("") : result.reverse().join("");
  }
  encryptChar(message, key, i, j) {
    let charCode = message.charCodeAt(i) + key.charCodeAt(j) - 65;
    while (charCode > 90) {
      charCode -= 26;
    }

    return charCode;
  }
  decryptChar(message, key, i, j) {
    let charCode = message.charCodeAt(i) - key.charCodeAt(j) + 65;

    while (charCode < 65) {
      charCode += 26;
    }

    return charCode;
  }
  getResult(message, key, getChar) {
    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let skippedSymbolsCount = 0;

    for (var i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        result.push(message[i]);
        skippedSymbolsCount++;
      }
      else {
        let j = i - skippedSymbolsCount;
        while (key.length <= j) {
          j -= key.length;
        }

        let charCode = getChar(message, key, i, j);

        let letter = String.fromCharCode(charCode);
        result.push(letter);
      }
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
