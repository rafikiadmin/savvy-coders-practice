// Object Literals are COLLECTION DATA TYPES.
const me = {
  name: 'mark',
  age: 3,
  homework: {
    hw1: "passed",
    hw2: "failed",
  },
  // Method
  checkDrinkingAge: function() {
    // Functions should have an EXPLICIT RETURN
    // Comparison operator - always return boolean
    return this.age >= 21;
  },
  checkHomework1: function() {
    // Getter
    return this.homework.hw1;
  }
};

// Chaining
me.homework.hw2 = 'passed';

// console.log(me.checkDrinkingAge());

// COERCION
let x = 32;
let y = false;

// // JS defaults to coercing numbers into Strings
// console.log(x === y);

// Cocatenation and coercion
console.log(x + Number(y));


