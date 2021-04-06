import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>type</th>
            <th>amount</th>
            <th>item details</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userData.map((pruchase, index) => (
            <tr key={pruchase.itemDescription}>
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
