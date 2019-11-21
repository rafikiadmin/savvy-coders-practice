function Person(fname, lname, age, occupation) {
  // Properties for describing state.
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.occupation = occupation;

  // Methods or computed properties
  this.getBio = function() {
    return `Hi! My name is ${this.getFullName()}. I am ${
      this.age
    } years old. ${this.getDrink()}`;
  };

  this.getDrink = function() {
    if (this.age < 21) {
      return "Give me a Shirley Temple!";
    }

    return "🙆🏾‍♂️, I will have a 🍺";
  };

  this.getFullName = function() {
    return `${this.fname} ${this.lname}`;
  };

  this.setLName = function(newLName) {
    if (newLName) {
      this.lname = newLName;

      // Shortcircuiting
      return "name changed!";
    }
    return "name not changed!";
  };
}

const kid = new Person("Mark", "West", 10, "Kid");
const grownup = new Person("DAve", "West", 33, "Mechanic");

console.log(kid.getBio());
console.log(grownup.getBio());

console.log(kid.setLName("frankd"));
console.log(kid.getBio());

console.log(grownup.getBio());
