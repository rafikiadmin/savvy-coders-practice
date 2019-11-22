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

Person.prototype.getDrink = function() {
  if (this.age < 21) {
    return "Give me a Shirley Temple!";
  }

  return "🙆🏾‍♂️, I will have a 🍺";
};

Person.prototype.getFullName = function() {
  return `${this.fname} ${this.lname}`;
};

Person.prototype.setLName = function(newLName) {
  console.log("trying to set lname with", newLName);
  if (newLName && typeof newLName === "string") {
    this.lname = newLName;

    // Shortcircuiting
    return "name changed!";
  }
  console.error("name not changed!");
};

// Create instances from the Function Constructor with new keyword
const kid = new Person("Mark", "West", 10, "Kid");

/**
 * kid gets its own implementation of the getBio method.
 * Now, this getBio is an instance method - not a prototype method.
 */
kid.getBio = function() {
  return "no bio for you!";
};

kid.setLName("madi");

console.log(kid);
