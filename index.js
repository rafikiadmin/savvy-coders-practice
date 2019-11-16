function initPerson(fname, lname, age) {
  return {
    firstName: fname,
    lastName: lname,
    age: 23,
    canDrink: function() {
      return age >= 21;
    }
  };
}

const me = initPerson("manav", "misra", 13);

console.log(me.canDrink());
