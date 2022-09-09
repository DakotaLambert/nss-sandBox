/* 
  The owners of Joey's Pizza want your team to develop some software
  that allows employees to build customer pizzas with 2 toppings, at the
  right size, get it paid for, bake it, and then output a message that
  it is being delivered.

  The delivery message should only happen if the pizza has been paid for.




  Goals of the pizza project:
  ---------------------------
   1.  Function that adds `size` property to pizza
    2. Function for adding the toppings to the pizza
    3. Function that bakes a pizza
    4. Function to mark the pizza as being paid.
    5. Function that logs a "Your {pizza details} is being delivered".
          If pizza is not paid for yet, display "Please pay us first"
    6. Each function copies the input object and returns
          modified copy
*/

// ----------- ALGO THINKING ---------------

// Start off with an empty object that should be named pizza
const pizza = {};
// function that adds size property to pizza object
const addSize = (pizzaObj, size) => {
  pizzaObj.size = size;
  
  const newPizzaObj = {}
  return newPizzaObj
};
// function needs one parameter that accepts an array of toppings to add toppings property to empty pizza object

const addToppings = (pizzaObj, toppingOne, toppingTwo) => {
  pizzaObj.toppings = [toppingOne, toppingTwo];
};
// function to add baked to pizza object
const bakePizza = (pizzaObj) => {
  if (pizzaObj.toppings && pizzaObj.size) {
    pizzaObj.bake = true;
  }
};
// function to determine whether pizza is paid for or not
const paidPizza = (pizzaObj, money) => {
  if (money > 0) {
    pizzaObj.paidMoney = true;
  } 
};

const didYouPayOrAreYouLame = (pizzaObj) => {
  if (pizzaObj.paidMoney !== true) {
    console.log("pay up ya fool");
  } else {
    console.log(
      `Your ${pizzaObj.size} pizza with ${pizzaObj.toppings} is being delivered`
    );
  }
};
// if paid, console.log 'blah blah delivered,' if not paid, console.log 'blah other blah'
// interpolate string with pizza details

// -----------------------------------------
addSize(pizza, "large");
addToppings(pizza, "pepp", "catfood");
bakePizza(pizza);
paidPizza(pizza, 0);
didYouPayOrAreYouLame(pizza);
