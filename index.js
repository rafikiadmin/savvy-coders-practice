function logNumbers(num) {
  for (let i = 1; i <= num; i += 1) {
    /**
     * Developer's Note: This is a bad, impure function that
     * reaches out to the global the window instead of returning.
     */
    console.log(i);
  }
}

logNumbers(100);
