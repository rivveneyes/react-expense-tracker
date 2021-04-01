import React, { Component } from "react";
class Form extends Component {
  state = {
    dateOfExpence: "",
    userSpentAmount: 0,
    itemDescription: "",
    whereExpenceOccured: "",
  };
  TakeDateOfDescription = (e) => {
    this.setState({ dateOfExpence: e.target.value });
  };
  TakeUserSpentAmount(e) {
    this.setState({ userSpentAmount: e.target.value });
  }
  UserExpenceDesctiption = (e) => {
    this.setState({ itemDescription: e.target.string });
  };
  UserOccurenceOfExpence = (e) => {
    this.setState({ whereExpenceOccured: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="date"
          value={this.state.dateOfExpence}
          onChange={this.TakeDateOfDescription}
        />
        <input
          type="number"
          value={this.state.userSpentAmount}
          onChange={this.TakeUserSpentAmount}
        />
        <input
          type="text"
          value={this.state.itemDescription}
          onChange={this.UserExpenceDesctiption}
        />
        <input
          type="text"
          value={this.state.whereExpenceOccured}
          onChange={this.UserOccurenceOfExpence}
        />
      </form>
    );
  }
}
export default Form;
