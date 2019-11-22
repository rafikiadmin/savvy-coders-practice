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

Person.prototype.getFavGames = function() {
  for (let i = 0; i <= this.favGames.length - 1; i += 1) {
    console.log(this.favGames[i]);
  }
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

Person.prototype.setFavGames = function(games) {
  // A setter can add an entirely new property to any instance
  this.favGames = games;
};

Person.prototype.setNewFavGame = function(game) {
  if (game.rating === "E") {
    this.favGames.push(game);
  } else {
    console.error("Unacceptagle");
  }
};

function Employee(fname, lname, age, occupation, empid) {
  Person.call(this, fname, lname, age, occupation);
  this.id = empid;
}

const emp = new Employee("Mark", "West", 22, "Dev", "123");

console.log(emp);
