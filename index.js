const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 10,
  sumDaNumbers: function() {
    let total = 0;

    for (let i = this.startingNumber; i <= this.endingNumber; i += 1) {
      total += i;
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
