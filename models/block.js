class Block {
  constructor(inIndex, inPrevBlockHash, inPrevProof, inTransactions) {
    this.index = inIndex;
    this.proof = inPrevProof;
    this.previousBlockHash = inPrevBlockHash;
    this.transactions = inTransactions;
    this.timestamp = Date.now();
  }

  /* Block class related functions here */ 
}

module.exports = Block;