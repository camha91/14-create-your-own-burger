const stateBurger = {
  // burger: [
  //   { name: "Salad", amount: 1, price: 10 },
  //   { name: "Cheese", amount: 1, price: 20 },
  //   { name: "Beef", amount: 1, price: 55 },
  // ],
  burger: { Salad: 1, Cheese: 1, Beef: 1 },

  menu: { Salad: 10, Cheese: 20, Beef: 55 },

  total: 85,
};

const CreateYourOwnBurger = (state = stateBurger, action) => {
  switch (action.type) {
    case "ADD_TOPPING": {
      // let burgerStateUpdate = [...state.burger];

      // let index = burgerStateUpdate.findIndex(
      //   (topping) => topping.name === action.toppingName
      // );

      // if (action.changeQty === true) {
      //   burgerStateUpdate[index].amount += 1;
      // } else {
      //   if (burgerStateUpdate[index].amount >= 1) {
      //     burgerStateUpdate[index].amount -= 1;
      //   } else {
      //     alert("Quantity is at least 0!");
      //   }
      // }

      let burgerStateUpdate = { ...state.burger };

      const { propsBurger, changeQty } = action;

      if (changeQty) {
        burgerStateUpdate[propsBurger] += 1;
      } else {
        if (burgerStateUpdate[propsBurger] >= 1) {
          burgerStateUpdate[propsBurger] -= 1;
        } else {
          alert("Quantity is at least 0!");
        }
      }

      state.burger = burgerStateUpdate;

      // Calculate subTotal
      // state.total =
      //   state.burger.Salad * state.menu.Salad +
      //   state.burger.Cheese * state.menu.Cheese +
      //   state.burger.Beef * state.menu.Beef;

      const burgerKeys = Object.keys(state.burger);
      console.log("burgerKeys: ", burgerKeys);
      // Using reduce function
      state.total = burgerKeys.reduce((total, item, index) => {
        return total + state.burger[item] * state.menu[item];
      }, 0);

      // Using map function
      // state.total = 0;
      // burgerKeys.map((item) => {
      //   state.total += state.burger[item] * state.menu[item];
      //   return null;
      // });

      // Using forEach function
      // state.total = 0;
      // burgerKeys.forEach((item) => {
      //   state.total += state.burger[item] * state.menu[item];
      // });

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default CreateYourOwnBurger;
