const chai = require('chai');
const expect = chai.expect;

const BlockChain = require('../../models/blockchain');

let BChain = new BlockChain();
before(() => {
  BChain.addBlock({sender: "Bruce wayne", reciver: "Tony stark", amount: 100});
  BChain.addBlock({sender: "Harrison wells", reciver: "Han solo", amount: 50});
  BChain.addBlock({sender: "Tony stark", reciver: "Ned stark", amount: 75});
  // console.dir({ debug: BChain }, { depth: null });
  // console.log("[ PASS ] ******** Validity of this blockchain: ", BChain.chainIsValid());
});

describe('BlockChain', () => {
  describe('addBlock()', () => {
    it('should add 3 blocks to blockchain', () => {
      // console.log( { debug: BChain.chain });
      expect(BChain.chain).to.be.an('array');
      expect(BChain.chain).to.have.a.lengthOf(3);
    })
  });
  describe('chainIsValid() valid', () => {
    it('should verify blockchain as valid!', () => {
      expect(BChain.chainIsValid()).to.equal(true);
    })
  });

  describe('chainIsValid() invalid', () => {
    before(() => {
      expect(BChain.chain[0].transaction['reciver']).to.equal("Tony stark");
      BChain.chain[0].transaction['reciver']= "Joker";
      expect(BChain.chain[0].transaction['reciver']).to.equal("Joker");
    })
    it('should verify blockchain as invalid!', () => {
      expect(BChain.chainIsValid()).to.equal(false);
    })
  });
});
