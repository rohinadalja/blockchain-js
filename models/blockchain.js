const Block = require('./block');

class BlockChain {
  constructor() {
      this.chain = [];
  }

  addBlock(data) {
      let index = this.chain.length;
      let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
      let block = new Block(index, data, prevHash, 'rohin-proof');
      this.chain.push(block);
  }

  isBlockChainValid(){
          for(var i=0;i<this.chain.length;i++){
              if(this.chain[i].hash !== this.chain[i].getHashVal())
                  return false;
              if(i > 0 && this.chain[i].prevHash !== this.chain[i-1].hash)
                  return false;
          }
          return true;
      }
}

module.exports = BlockChain;