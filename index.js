// Add the numbers from 1 to 10

// NAMED PARAMETERS allow FUNCTIONS to receive additional information to complete a task.
// We can set DEFAULT VALUES for our NAMED PARAMETERS
function numberSummer(startingValue = 1, endingValue = 10) {
  let currentTotal = 0;

  // Initializer; Exit Condition; Iterator
  for (let i = startingValue; i <= endingValue; i += 1) {
    currentTotal += i; // currentTotal = currentTotal + i;
  }

  return currentTotal;
}

// We INVOKE FUNCTIONS and can pass in ARGUMENTS that 'match up' to the NAMED PARAMETERS
console.log(numberSummer());
