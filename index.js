// Add the numbers from 1 to 10

let currentTotal = 0;


// Initializer; Exit Condition; Iterator
for(let i = 1; i <= 10; i += 1) {
  console.log('i is', i);
  currentTotal += i; // currentTotal = currentTotal + i;
  console.log('currentTotal is', currentTotal);
}

console.log(currentTotal);
