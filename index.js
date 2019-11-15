// Factorial - num * num - 1 * num - 2...all the way to num === 0
// 4 * 3 * 2 * 1;

function factorial(num) {
  let ret = 1;

  for (let i = num; i >= 1; i -= 1) {
    console.log("ret is", ret);
    console.log("i is", i);

    ret *= i;
  }

  return ret;
}

console.log(factorial(4));
