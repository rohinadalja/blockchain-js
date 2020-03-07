const crypto = require('crypto');

class Block {
  constructor(index, transaction, prevHash, prevProof='rohin-proof') {
    this.index = index;
    this.timestamp = Date.now();
    this.transaction = transaction;
    this.proof = prevProof;
    this.prevHash = prevHash;
    this.hash=this.getHashVal();
}
  
  getHashVal() {
    const blockStrToHash = JSON.stringify(this.transaction) + this.prevHash + this.index + this.timestamp + JSON.stringify(this.proof);
    const hash = crypto
      .createHmac('sha256', "rohin-secret")
      .update(blockStrToHash)
      .digest('hex');

    return hash;
  }

  /* Block class related functions here */ 
  setProof(inProof) {
    this.proof = inProof;
  }

  getProof() {
    return this.proof;
  }

  getIndex() {
    return this.index;
  }

  getPreviousBlockHash() {
    return this.previousBlockHash;
  }
}

module.exports = Block;