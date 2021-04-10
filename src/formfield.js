import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input
        className=""
          id="date"
          type="date"
          value={this.props.data.dateOfExpence}
          onChange={this.props.change}
        />
        <input
        className="m-2"
          id="spentAmount"
          type="number"
          value={this.props.data.userSpentAmount}
          onChange={this.props.change}
        />
        <input
        
          placeholder="location of purchase"
          id="description"
          type="text"
          value={this.props.data.itemDescription}
          onChange={this.props.change}
        />
        <input
        className="m-2"
        placeholder="expence description"
          id="expenceDetail"
          type="text"
          value={this.props.data.whereExpenceOccured}
          onChange={this.props.change}
        />
        <div >
        <button className="btn btn-danger  float-end " onClick={this.props.delete} type="button">
          delete
        </button>
        <button className="btn btn-primary float-end me-3" onClick={this.props.submit} type="submit">
          Submits
        </button>
        </div>
      </form>
    );
  }
}

export default Form;
