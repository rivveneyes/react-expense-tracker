import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input
        className="d-inline-flex"
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
          placeholder="where purchase occured"
          id="description"
          type="text"
          value={this.props.data.itemDescription}
          onChange={this.props.change}
        />
        <input
        placeholder="expence description"
          id="expenceDetail"
          type="text"
          value={this.props.data.whereExpenceOccured}
          onChange={this.props.change}
        />
        <button onClick={this.props.submit} type="submit">
          Submits
        </button>
        <button onClick={this.props.delete} type="button">
          delete
        </button>
      </form>
    );
  }
}

export default Form;
