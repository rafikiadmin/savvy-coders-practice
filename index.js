const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 10,
  sumDaNumbers: function() {
    let total = 0;
    let i = this.startingNumber;

    while (i <= this.endingNumber) {
      total += i;
      i += 1;
    }

    return total;
  },

  // Setter that allows updating of the 'local data.'
  // Developer's Note: Here we have used ES6 method shorthand.
  setStartingNumber(num) {
    this.startingNumber = num;
  }
};

numberSummerMachine.setStartingNumber(5);

console.log(numberSummerMachine.sumDaNumbers());
