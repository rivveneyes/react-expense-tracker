import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr className="Dark">
            <th>date</th>
            <th>amount</th>
            <th>location of purchase</th>
            <th>item details</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userData.map((pruchase, index) => (
            <tr key={index}>
              <td>{pruchase.dateOfExpence}</td>
              <td>{pruchase.userSpentAmount}</td>
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
