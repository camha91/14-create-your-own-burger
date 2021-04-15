import React, { Component } from "react";

export default class BurgerInfo extends Component {
  render() {
    return (
      <div>
        <h3 className="text-danger text-center">Your BYO Burger</h3>
        <div className="breadTop"></div>
        <div className="burger-ingredients">
          <div className="salad"></div>
          <div className="cheese"></div>
          <div className="beef"></div>
        </div>
        <div className="breadBottom"></div>
      </div>
    );
  }
}
