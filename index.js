function logNumbers(num) {
  /**
   * Recursion usually involves counting backwards.
   * So, we start with the end in mind.
   * In this case, our exit condition is when we have reached 1.
   *
   * Here, if we have reached the num 1,
   * then we return out our final value which is the 1.
   */
  if (num === 1) {
    console.trace();
    return 1;
  }

  /**
   * Example execution would be starting at num = 10.
   * Is num === 1? No.
   *
   * So now, we have 10 + logNumbers(9)...
   * This goes on until we are doing logNumbers(1).
   * At that point 1 is returned,
   * and the entire recursive pattern 'unwinds.'
   *
   * This is where each previous recursive function invocation pops off the call stack.
   */
  console.trace();
  return num + logNumbers(num - 1);
}

console.log(logNumbers(10));
