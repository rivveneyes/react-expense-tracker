import React, { Component } from "react";
import Form from "./formfield";
import Table from "./Table";

class App extends Component {
  state = {
    dateOfExpence: "",
    userSpentAmount: 0,
    itemDescription: "",
    whereExpenceOccured: "",
    todo: [],
  };
  onUserInput = (e) => {
    switch (e.target.id) {
      case "date":     
        this.setState({ dateOfExpence: e.target.value});


        // this.setState({dateOfExpence: e.target.value })
        break;
      case "spentAmount":
        this.setState({ userSpentAmount: e.target.value });
        break;
      case "description":
        this.setState({ itemDescription: e.target.value });
        break;
      case "expenceDetail":
        this.setState({ whereExpenceOccured: e.target.value });
        break;

      default:
        break;
    }
  };
  handleInput = (date, amount, description, expenceOccred, checkbox) => {
    date === ""
      ? alert("please enter date")
      : amount <=0
      ? alert("please enter amount over $0.00")
      : description === ""
      ? alert("please enter description")
      : expenceOccred === ""
      ? alert("please enter where expence occured")
      : this.setState({
          todo: [
            ...this.state.todo,
            {
              dateOfExpence: date,
              userSpentAmount: amount,
              itemDescription: description,
              whereExpenceOccured: expenceOccred,
              checkbox: false,
            },
          ],
          dateOfExpence: "",
          userSpentAmount: 0,
          itemDescription: "",
          whereExpenceOccured: "",
        });
  };

  storInput = (e) => {
    e.preventDefault();
    this.handleInput(
      this.state.dateOfExpence,
      this.state.userSpentAmount,
      this.state.itemDescription,
      this.state.whereExpenceOccured
    );
  };
  handleCheckbox = (e) => {
    this.setState({
      todo: this.state.todo.map((obj, index) => {
        if (index === e.target.id * 1) {
          return {
            ...obj,
            checkbox: !obj.checkbox,
          };
        } else {
          return { ...obj };
        }
      }),
    });
  };
  deleteRow = () => {
    this.setState({
      todo: this.state.todo.filter((obj) => obj.checkbox === false),
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Expence-trakcer</h1>
        <Form
          data={this.state}
          change={this.onUserInput}
          submit={this.storInput}
          delete={this.deleteRow}
        />
        <Table userData={this.state.todo} mannageBox={this.handleCheckbox} />
      </div>
    );
  }
}

export default App;
