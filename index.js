function initFizzBuzz(num1, num2) {
  return function() {
    for (let i = 1; i <= 100; i += 1) {
      // 24 % (4 * 6)
      // If i divided by num1 * num2 is 0, then then number is divisible by both.
      if (i % (num1 * num2) === 0) {
        console.log(`${i} - FizzBuzz`);

        // ! means not
      } else if (!(i % num1)) {
        console.log(`${i}  Fizz`);

        // Else-if there is not any remainder (i % num2 === 0)
      } else if (!(i % num2)) {
        console.log(`${i} - Buzz`);
      } else {
        console.log(i);
      }
    }
  };
}
