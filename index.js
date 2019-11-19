// Function contructors by convention are capitalized.
function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;

  this.getFullName = function() {
    return `${this.fname} ${this.lname}`;
  };

  this.canVote = function() {
    if (this.age >= 18) {
      return "I vote!";
    }

    return "No voting for me!";
  };
}

const older = new Person("joh", "smith", 77);

console.log("older says", older);
console.log(older.getFullName());
console.log("older.canVote says", older.canVote());
