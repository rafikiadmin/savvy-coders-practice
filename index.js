function initPerson(fname, lname, age) {
  return {
    fname,
    lname,
    age,
    canDrink() {
      return age >= 21;
    }
  };
}

const me = initPerson("manav", "misra", 13);
console.log(me);
console.log(me.canDrink());
