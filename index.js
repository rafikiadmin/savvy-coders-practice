const numbersAndStrings = [
  12,
  "ab",
  3,
  6,
  "c",
  90,
  "web",
  "dev",
  1440,
  "Rusty"
];
console.log(numbersAndStrings.length);

// TODO: Create a loop that will iterate over and console.log each element in this array.
for (let i = 0; i <= numbersAndStrings.length; i += 1) {
  console.log(numbersAndStrings[i]);
}

// Remove the last element in array
const popped = numbersAndStrings.pop();
console.log(numbersAndStrings);
console.log(popped);
