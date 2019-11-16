function logNumbers(num) {
  let count = 1;

  // while requires access to a variable outside of its scope. 👎🏾
  while (count <= num) {
    // Scope is opened every time there is a brace
    console.log(count);
    count += 1;
  }
}

logNumbers(100);
