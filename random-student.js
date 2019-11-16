const students = [
  "Andrew",
  "Billy",
  "George",
  "Heather",
  "Madison",
  "Marque",
  "Martin",
  "Nikki",
  "Oscar",
  "RhondaLyn",
  "Sidney",
  "Tracie",
  "Wallat"
];

function getMs(namesArr) {
  const mNames = [];

  for (let i = 0; i < namesArr.length; i += 1) {
    if (namesArr[i].startsWith("M")) {
      mNames.push(namesArr[i]);
    }
  }

  return mNames;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(students[getRandomInt(0, students.length - 1)]);

console.log(getMs(students));
