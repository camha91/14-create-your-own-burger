const stateBurger = {
  burger: [
    { name: "Salad", amount: 1, price: 1 },
    { name: "Cheese", amount: 1, price: 2 },
    { name: "Beef", amount: 1, price: 5.5 },
  ],
};

const CreateYourOwnBurger = (state = stateBurger, action) => {
  switch (action.type) {
    case "ADD_TOPPING": {
      let burgerStateUpdate = [...state.burger];
      let index = burgerStateUpdate.findIndex(
        (topping) => topping.name === action.toppingName
      );
      console.log(index);

      if (index !== -1) {
        if (burgerStateUpdate[index].amount >= 1) {
          burgerStateUpdate[index].amount += action.number;
        } else {
          alert("Quantity is at least 0!");
        }
      }

      state.burger = burgerStateUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default CreateYourOwnBurger;
