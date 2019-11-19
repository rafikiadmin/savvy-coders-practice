// Function constructors by convention are capitalized.
function Person(fname, lname, age) {
  /**
   * Although we should generally stick to including `this` inside function constructors,
   * note that one example of matching 🔑 names with the NAMED PARAMETERS,
   * is that as long as nothing changes,
   * we can omit 'this' and we can use ARROW SYNTAX.
   *
   * Again, this could be a bit brittle if there are any minor changes and I would stick with using `this` and keyword function, en generalmente.
   */
  this.fname = fname;
  this.lname = lname;
  this.age = age;

  this.getFullName = () => {
    return `${fname} ${lname}`;
  };

  this.canVote = () => {
    if (age >= 18) {
      return "I vote!";
    }

    return "No voting for me!";
  };
}

const older = new Person("joh", "smith", 77);

console.log("older says", older);
console.log(older.getFullName());
console.log("older.canVote says", older.canVote());
