// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

// concat is ideal b/c it doesn't mutate the original data.
const numbersAndStrings = numbers.concat(strings);

// Arrow syntax DOES NOT have a THIS reference.
numbers.forEach(number => {
  console.log(number);
});

function updateNumbersAndString(originalArr, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];

  // forEach needs to know what it should do for each element - callback fxn.
  originalArr.forEach(el => {
    if (typeof el === "string") {
      updatedNumbersAndStrings.push((el += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((el += numberUpdate));
    }
  });

  return updatedNumbersAndStrings;
}

console.log(updateNumbersAndString(numbersAndStrings, "ehloo", 236));
