const chai = require('chai');
const expect = chai.expect;

const BlockChain = require('../../models/blockchain');

let testBlockChain = new BlockChain();
before(() => {
  testBlockChain.addBlock({sender: "Bruce wayne", reciver: "Tony stark", amount: 100});
  testBlockChain.addBlock({sender: "Harrison wells", reciver: "Han solo", amount: 50});
  testBlockChain.addBlock({sender: "Tony stark", reciver: "Ned stark", amount: 75});
  // console.dir({ debug: testBlockChain }, { depth: null });
  // console.log("[ PASS ] ******** Validity of this blockchain: ", testBlockChain.isBlockChainValid());
});

describe('BlockChain', () => {
  describe('addBlock()', () => {
    it('should add 3 blocks to blockchain', () => {
      // console.log( { debug: testBlockChain.chain });
      expect(testBlockChain.chain).to.be.an('array');
      expect(testBlockChain.chain).to.have.a.lengthOf(3);
    })
  });
  describe('isBlockChainValid() valid', () => {
    it('should verify blockchain as valid!', () => {
      expect(testBlockChain.isBlockChainValid()).to.equal(true);
    })
  });

  describe('isBlockChainValid() invalid', () => {
    before(() => {
      expect(testBlockChain.chain[0].transaction['reciver']).to.equal("Tony stark");
      testBlockChain.chain[0].transaction['reciver']= "Joker";
      expect(testBlockChain.chain[0].transaction['reciver']).to.equal("Joker");
    })
    it('should verify blockchain as invalid!', () => {
      expect(testBlockChain.isBlockChainValid()).to.equal(false);
    })
  });
});
