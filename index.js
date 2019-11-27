// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

// concat is ideal b/c it doesn't mutate the original data.
const numbersAndStrings = numbers.concat(strings);

function updateNumbersAndString(originalArr, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];

  for (let i = 0; i < originalArr.length; i += 1) {
    if (typeof originalArr[i] === "string") {
      updatedNumbersAndStrings.push((originalArr[i] += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((originalArr[i] += numberUpdate));
    }
  }

  return updatedNumbersAndStrings;
}

console.log(updateNumbersAndString(numbersAndStrings, "ehloo", 236));
