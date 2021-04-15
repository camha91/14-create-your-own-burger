import React, { Component } from "react";
import { connect } from "react-redux";

class ChooseBurgerToppings extends Component {
  render() {
    return (
      <div>
        <h3 className="text-success text-center">Choose your own toppings</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Toppings</th>
              <th></th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.burger.map((topping, index) => {
              return (
                <tr key={index}>
                  <td>{topping.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.addTopping(topping.name, true);
                      }}
                      className="bg-success text-white"
                    >
                      +
                    </button>
                    {topping.amount}
                    <button
                      onClick={() => {
                        this.props.addTopping(topping.name, false);
                      }}
                      className="bg-danger text-white"
                    >
                      -
                    </button>
                  </td>
                  <td>{topping.price.toLocaleString()}</td>
                  <td>{(topping.amount * topping.price).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="text-primary">
            <tr>
              <td></td>
              <td></td>
              <td>SubTotal</td>
              <td>
                {this.props.burger
                  .reduce((subTotal, topping, index) => {
                    return (subTotal += topping.amount * topping.price);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.CreateYourOwnBurger.burger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTopping: (toppingName, changeQty) => {
      dispatch({
        type: "ADD_TOPPING",
        toppingName,
        changeQty,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseBurgerToppings);
