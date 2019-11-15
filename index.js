function myPow(num, exp) {
  let ret = num;

  for (let i = 1; i < exp; i += 1) {
    ret *= num;
  }

  return ret;
}
