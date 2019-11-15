// Recursion
function writePsychoBook(n) {
  console.trace();

  if (n === 0) {
    return "i am done";
  }

  return `All work and no play makes Jack a dull boy ${writePsychoBook(n - 1)}`;
}

console.log(writePsychoBook(99));
