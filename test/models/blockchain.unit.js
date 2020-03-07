const chai = require('chai');
const expect = chai.expect;

const BlockChain = require('../../models/blockchain');

let testBlockChain = new BlockChain();
before(() => {
  testBlockChain.addBlock({sender: "Government", receiver: "Mike", amount: 2000});
  testBlockChain.addBlock({sender: "Mike", receiver: "Rohin", amount: 1500});
  testBlockChain.addBlock({sender: "Rohin", receiver: "Aastha", amount: 50});
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
      expect(testBlockChain.chain[0].transaction['receiver']).to.equal("Mike");
      testBlockChain.chain[0].transaction['receiver']= "Jaideep";
      expect(testBlockChain.chain[0].transaction['receiver']).to.equal("Jaideep");
    })
    it('should verify blockchain as invalid!', () => {
      expect(testBlockChain.isBlockChainValid()).to.equal(false);
    })
  });
});
