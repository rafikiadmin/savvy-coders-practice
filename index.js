const someP3 = "global p3";

function initObj(p1, p2, p3) {
  return {
    p1,
    p2,
    someP3: p3,

    getP1: () => `p1 is: ${this.p1}`,
    getP2: function() {
      return `p2 is ${p2}`;
    },
    getP3Bad: () => `${initObj.someP3}`,
    getP3Global: () => `global p3: ${someP3}`
  };
}

const myObj = initObj("hurt", "heal", "fiend");

console.log(myObj);

console.log(myObj.getP1());
console.log(myObj.getP2());
console.log(myObj.getP3Bad());
console.log(myObj.getP3Global());
