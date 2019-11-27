// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

// concat is ideal b/c it doesn't mutate the original data.
const numbersAndStrings = numbers.concat(strings);

const updatedNumbersAndStrings = [];

for (let i = 0; i < numbersAndStrings.length; i += 1) {
  // If the element is a string concatenate "Hello, I am a string" to the end of it.
  if (typeof numbersAndStrings[i] === "string") {
    updatedNumbersAndStrings.push((numbersAndStrings[i] += "ehllo"));
  } else {
    updatedNumbersAndStrings.push((numbersAndStrings[i] += 236));
  }
}

console.log(updatedNumbersAndStrings);
