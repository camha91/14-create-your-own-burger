import React, { Component } from "react";
import { connect } from "react-redux";

class BurgerInfo extends Component {
  renderTopping = (topping) => {
    console.log(topping);
    const toppingSequenceArray = [...Array(topping.amount).keys()];
    console.log(toppingSequenceArray);
    return toppingSequenceArray.map((_, index) => {
      return (
        <div className={`${topping.name.toLowerCase()}`} key={index}></div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-danger text-center">Your BYO Burger</h3>
        <div className="breadTop"></div>
        <div className="burger-ingredients">
          {this.props.burger.map((topping, index) => {
            return (
              <div
                className={`${topping.name.toLowerCase()}-group`}
                key={index}
              >
                {this.renderTopping(topping)}
              </div>
            );
          })}
        </div>

        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.CreateYourOwnBurger.burger,
  };
};

export default connect(mapStateToProps)(BurgerInfo);
