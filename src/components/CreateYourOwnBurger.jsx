import React, { Component } from "react";
import BurgerInfo from "./BurgerInfo";
import ChooseBurgerToppings from "./ChooseBurgerToppings";
import "../assets/CreateYourOwnBurger.css";

export default class CreateYourOwnBurger extends Component {
  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-8">
            <BurgerInfo />
          </div>
          <div className="col-4">
            <ChooseBurgerToppings />
          </div>
        </div>
      </div>
    );
  }
}
