// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

// concat is ideal b/c it doesn't mutate the original data.
const numbersAndStrings = numbers.concat(strings);

function updateNumbersAndString(originalArr, stringUpdate, numberUpdate) {
  return originalArr.map(el => {
    if (typeof el === "string") {
      /**
       * A return in a map's callback fxn.
       * 'pushes' the result onto the new Array that will be created from the map.
       */
      return (el += stringUpdate);
    }

    if (typeof el === "number") {
      return (el += numberUpdate);
    }
  });
}

console.log(updateNumbersAndString(numbersAndStrings, "ehloo", 236));
