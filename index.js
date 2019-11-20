function Person(fname, lname, age, occupation) {
  // Properties for describing state.
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.occupation = occupation;
}

Person.prototype.getBio = function() {
  return `Hi! My name is ${this.getFullName()}. I am ${
    this.age
  } years old. ${this.getDrink()}`;
};

Person.prototype.getBio = this.getDrink = this.getFullName = function() {
  return `${this.fname} ${this.lname}`;
};

Person.prototype.setLName = function(newLName) {
  if (newLName) {
    this.lname = newLName;

    // Shortcircuiting
    return "name changed!";
  }
  return "name not changed!";
};

const kid = new Person("Mark", "West", 10, "Kid");
const grownup = new Person("DAve", "West", 33, "Mechanic");

const snotNoseKid = new Person("Maddie", "Parker", 11, "Brat");

/**
 * snotNoseKid will get its own copy of getBio method.
 * Therefore, when it is invoked this instance of method will run,
 * instead of the the method attached to prototype (parent);
 */
snotNoseKid.getBio = function() {
  return "I will not give a bio! Mind ur own biz.";
};

console.log(kid.getBio());
console.log(grownup.getBio());

// console.log(kid.setLName("frankd"));
console.log(kid.getBio());

console.log(grownup.getBio());
console.log(snotNoseKid.getBio());

console.log(snotNoseKid);
