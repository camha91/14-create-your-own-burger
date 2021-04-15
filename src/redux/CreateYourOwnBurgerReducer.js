const stateBurger = {
  burger: [
    { name: "salad", amount: 1 },
    { name: "cheese", amount: 1 },
    { name: "beef", amount: 1 },
  ],
  price: { salad: 1, cheese: 2, beef: 5.5 },
  totalPrice: 8.5,
};

const CreateYourOwnBurger = (state = stateBurger, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default CreateYourOwnBurger;
