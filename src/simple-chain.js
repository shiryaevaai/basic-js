const CustomError = require("../extensions/custom-error");

const chainMaker = {
  initChain() {
    if (this['chain'] === undefined) {
      this['chain'] = [];
    }
  },
  getLength() {
    this.initChain();
    return this['chain'].length;
  },
  addLink(value) {
    this.initChain();
    if (this['chain'] === undefined) {
      this['chain'] = [];
    }
    this['chain'].push(value == null ? 'null' : value.toString());
    return this;
  },
  removeLink(position) {
    this.initChain();
    if (position == parseInt(position) && position > -1 && chainMaker['chain'].length >= position) {
      this['chain'].splice(position - 1, 1);
    }
    else {
      this['chain'].length = 0;
      throw new Error('Invalid parameter');
    }
    return this;
  },
  reverseChain() {
    this.initChain();
    this['chain'].reverse();
    return this;
  },
  finishChain() {
    this.initChain();
    let result = '( ' + this['chain'].join(' )~~( ') + ' )';
    this['chain'].length = 0;
    return result;
  }
};

module.exports = chainMaker;
