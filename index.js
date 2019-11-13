// doMath is expecting to receive a function!
function doMath(x, y, operation) {
  console.trace();
  // the function will receive x and y
  return operation(x, y);
}

function subtract(x, y) {
  console.trace();

  return y - x;
}

// function add(x, y) {
//   console.trace();

//   return y + x;
// }

console.log(doMath(10, 5, subtract));
// console.log(doMath(10, 5, add));
