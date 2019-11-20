function Food(breakfast, lunch, dinner) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;

  this.breakfastDrink = function() {
    if (this.breakfastDrink === "milk") {
      return `I would like some ${breakfast}`;
    }
    return `I'm lactose intolerant.`;
  };

  this.eatOut = function() {
    if (this.lunch === "yes") {
      return "I would love teat at restaurant";
    }

    return "I will just cook";
  };

  this.setSnack = function(snack) {
    // TODO: Check if snack is a non-empty string (use typeof)
    if (!snack || typeof snack !== "string") {
      this.snack = snack;
    } else {
      console.error("snack cannot be blank or a non-string");
    }
  };
}

const foodPlan = new Food("milk", "yes", "pasta");
