const x = 3;
const y = 5;
const z = 10;

// LOGICAL OPERATORS involve AND and OR CONDITIONS
// && - AND - both left and right OPERANDS must be true
console.log(x < y && x < z);

/**
 * || - OR - if left OPERAND is true,
 * right is never evaluated.
 *
 * || allows us to do SHORT CIRCUITING;
 */
console.log(x < y || x < z);
