// Pass by reference and pass by value

let x = 3;

// y references its own COPY of the number 3
let y = x;

function add1(n) {
  return n + 1;
}

// Primitives CANNOT be mutated.
// Primitives are passed by value AKA pass by copy;

// x THROWS AWAY it's '3' and gets a whole new value of 4;
x = add1(x);
console.log("x after add1 is", x);
console.log(y);
