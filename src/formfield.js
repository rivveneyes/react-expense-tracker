import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input
          id="date"
          type="date"
          value={this.props.data.dateOfExpence}
          onChange={this.props.change}
        />
        <input
          id="spentAmount"
          type="number"
          value={this.props.data.userSpentAmount}
          onChange={this.props.change}
        />
        <input
          id="description"
          type="text"
          value={this.props.data.itemDescription}
          onChange={this.props.change}
        />
        <input
          id="expenceDetail"
          type="text"
          value={this.props.data.whereExpenceOccured}
          onChange={this.props.change}
        />
        <button onClick={this.props.submit} type="submit">
          Submit
        </button>
        <button onClick={this.props.delete} type="button">
          delete
        </button>
      </form>
    );
  }
}

export default Form;
