class Transaction {
  constructor(inSender, inReceiver, inAmount) {
    this.timestamp = Date.now();
    this.sender = inSender;
    this.receiver = inReceiver;
    this.amount = inAmount;
  }

  /* Transaction class related functions here */ 
}

module.exports = Transaction;