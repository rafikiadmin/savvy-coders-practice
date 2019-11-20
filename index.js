function Food(breakfast, lunch, dinner) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
}

Food.prototype.breakfastDrink = function() {
  if (this.breakfastDrink === "milk") {
    return `I would like some ${this.breakfast}`;
  }
  return `I'm lactose intolerant.`;
};

Food.prototype.eatOut = function() {
  if (this.lunch === "yes") {
    return "I would love teat at restaurant";
  }

  return "I will just cook";
};

Food.prototype.setSnack = function(snack) {
  if (snack && typeof snack === "string") {
    this.snack = snack;
  } else {
    console.error("snack cannot be blank or a non-string");
  }
};

const foodPlan = new Food("milk", "yes", "pasta");
const aPlan = new Food("milk", "yes", "pasta");

const fPlan = new Food("milk", "yes", "pasta");

console.log(foodPlan, aPlan, fPlan);

console.log(Food.prototype);

// console.log("before set snack", foodPlan);
// foodPlan.setSnack("chips");
// console.log("after set snack", foodPlan);
