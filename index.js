/**
 * TODO: Use 'map' to create a new Array where each of the names is prefixed or
 * concatenated with 'Mr.'
 *
 * Bonus: Create a fxn. that takes in an Array and a salutation and performs this functionality.
 */

const names = ["Misra", "Stevens", "Jamison", "Wright", "Smith"];

// const namesWithSalutations = names.map(function(name) {
//   return `Mr. ${name}
// })

const namesWithSalutations = names.map(name => `Mr. ${name}`);

function addSalutation(names, sal) {
  return names.map(name => `${sal} ${name}`);
}

console.log(addSalutation(names, "Mrs."));
