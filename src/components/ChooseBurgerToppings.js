import React, { Component } from "react";

export default class ChooseBurgerToppings extends Component {
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
            <tr>
              <td>Salad</td>
              <td>
                <button className="bg-success text-white">+</button>4
                <button className="bg-danger text-white">-</button>
              </td>
              <td>1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Cheese</td>
              <td>
                <button className="bg-success text-white">+</button>2
                <button className="bg-danger text-white">-</button>
              </td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td>
                <button className="bg-success text-white">+</button>5
                <button className="bg-danger text-white">-</button>
              </td>
              <td>5.5</td>
              <td>11</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>SubTotal</td>
              <td>19</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
