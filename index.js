function initFizzBuzz(num1, num2) {
  return function() {
    for (let i = 1; i <= 100; i += 1) {
      // 24 % (4 * 6)
      // If i divided by num1 * num2 is 0, then then number is divisible by both.
      if (i % (num1 * num2) === 0) {
        console.log(`${i} - FizzBuzz`);
      } else if (i % num1 === 0) {
        console.log(`${i} - Fizz`);
      } else if (i % num2 === 0) {
        console.log(`${i} - Buzz`);
      } else {
        console.log(i);
      }
    }
  };
}

const fizzBuzz46 = initFizzBuzz(4, 6);
fizzBuzz46();
