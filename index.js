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

  // Don't worry about this!!!
  static putOnPants() {
    return "I put on my pants 1 leg a time!";
  }
}

class Employee extends Person {
  constructor(fname, lname, age, occupation, empid) {
    super(fname, lname, age, occupation);
    this.id = empid;
  }

  get bio() {
    return "I love my job!";
  }
}

const emp = new Employee("Mark", "west", 33, "dev", "123");

console.log(emp);

console.log(Employee.putOnPants());
