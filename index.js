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

  // This causes a blown stack due to recursion.
  // set lname(newLName) {
  //   this.lname = newLName;
  // }
}

// We are passing in arguments that the constructor 👆 will use to bind to an instance's properties.
const p = new Person("joh", "smit", 33, "insurance agent");

class Employee extends Person {
  constructor(fname, lname, age, occupation, empid) {
    // Sends some of the arguments are up to the 'supevisor' and assign these to THIS instance.
    super(fname, lname, age, occupation);
    this.id = empid;
  }

  get bio() {
    return `I love my job. ${this.id}`;
  }

  get empid() {
    return `My id is: ${this.id}`;
  }

  get assignments() {
    let ret = `The current task list is as folows:`;

    for (let i = 0; i < this.workload.length; i += 1) {
      ret += `${this.workload[i]}`;
    }

    return ret;
  }

  set empid(id) {
    this.id = id;
  }

  set assignments(assignments) {
    this.workload = assignments;
  }
}

const emp = new Employee("Mark", "west", 33, "dev", "123");

emp.empid = 234;

console.log(emp.bio);

emp.assignments = ["REdord vidoes", "write curriculum", "grade HW"];
console.log(emp.assignments);
