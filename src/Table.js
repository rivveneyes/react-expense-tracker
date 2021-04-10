import React, { Component } from "react";

export default class Table extends Component {
  reformatDate = (date) => {
    let year = date.slice(0, 4);
    year = date.slice(5, 10) + "-" + year;
    return year;
  };

  stringToNumber = (string) => {
    let newNum = parseFloat(string);
    newNum = "$" + newNum.toFixed(2);
    return newNum;
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr className="Dark">
            <th>date</th>
            <th>amount</th>
            <th>location of purchase</th>
            <th>expence description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userData.map((pruchase, index) => (
            <tr key={index}>
              <td>{this.reformatDate(pruchase.dateOfExpence)}</td>
              <td>{this.stringToNumber(pruchase.userSpentAmount)}</td>
              <td>{pruchase.itemDescription}</td>
              <td>{pruchase.whereExpenceOccured}</td>
              <td>
                <input
                  id={index}
                  checked={pruchase.checkbox}
                  className="marker"
                  onChange={this.props.mannageBox}
                  type="checkbox"
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
