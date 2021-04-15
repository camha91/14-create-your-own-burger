import React, { Component } from "react";
import "../assets/CreateYourOwnBurger.css";
import { connect } from "react-redux";

class CreateYourOwnBurger extends Component {
  renderBurgerTopping = () => {
    const { burger } = this.props;

    return Object.entries(burger).map(([propsBurger, amount], index) => {
      let burgerTopping = [];

      for (let i = 0; i < amount; i++) {
        burgerTopping.push(
          <div key={i} className={propsBurger.toLowerCase()}></div>
        );
      }

      return burgerTopping;
    });
  };

  renderMenu = () => {
    const { menu, burger } = this.props;

    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              onClick={() => {
                this.props.addTopping(propsMenu, true);
              }}
              className="bg-success text-white"
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.addTopping(propsMenu, false);
              }}
              className="bg-danger text-white"
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };

  render() {
    console.log("this.props ", this.props);
    return (
      <div>
        <div className="row mt-5">
          <div className="col-8">
            <h3 className="text-danger text-center">Your BYO Burger</h3>
            <div className="breadTop"></div>
            {this.renderBurgerTopping()}
            {/* <BurgerInfo /> */}
            <div className="breadBottom"></div>
          </div>
          <div className="col-4">
            <h3 className="text-success text-center">
              Choose your own toppings
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Toppings</th>
                  <th></th>
                  <th>Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot className="text-primary">
                <tr>
                  <td colSpan="2"></td>
                  <td>SubTotal</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
            {/* <ChooseBurgerToppings /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.CreateYourOwnBurger.burger,
    menu: state.CreateYourOwnBurger.menu,
    total: state.CreateYourOwnBurger.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTopping: (propsBurger, changeQty) => {
      dispatch({
        type: "ADD_TOPPING",
        propsBurger,
        changeQty,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateYourOwnBurger);
