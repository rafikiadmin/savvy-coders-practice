// CLASS DOES NOT CHANGE THE FACT THAT WE ARE DOING PROTOTYPE-BASED OOP AND NOT CLASS-BASED OOP! 📢
// We will use class to implement function constructor prototypes.
class Person {
  constructor(fname, lname, age, occupation) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.occupation = occupation;
  }

  get bio() {
    return `Hi! My name is ${this.fullName}. I am ${this.age} years old. ${this.drink}`;
  }

  get drink() {
    if (this.age < 21) {
      return "Give me a Shirley Temple!";
    }

    return "🙆🏾‍♂️, I will have a 🍺";
  }

  get fullName() {
    return `${this.fname} ${this.lname}`;
  }

  // The name of the setter MUST BE DIFFERENT from the name of the property.
  set changeName(newLName) {
    if (newLName) {
      this.lname = newLName;
    } else {
      console.error("bad name received");
    }
  }
}

const kid = new Person("mark", "ew", 33, "dev");
console.log(kid.bio);

// We invoke the setter with a syntax that is similar to changing property
kid.changeName = "hello";
console.log(kid.bio);

kid.changeName = "";
console.log(kid.bio);
