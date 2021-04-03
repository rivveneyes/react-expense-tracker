import React, { Component } from "react";

// class Form extends Component {

//   render() {
//     return (
//       <div>
//         <input
//         id="date"
//           type="date"
//           value={this.props.data.dateOfExpence}
//           onChange={this.props.change}
//         />
//         <input
//           id="spentAmount"
//           type="number"
//           value={this.props.data.userSpentAmount}
//           onChange={this.props.change}
//         />
//         <input
//           id="description"
//           type="text"
//           value={this.props.data.itemDescription}
//           onChange={this.props.change}
//         />
//         <input
//           id="expenceDetail"
//           type="text"
//           value={this.props.data.whereExpenceOccured}
//           onChange={this.props.change}
//         />
//       </div>
//     );
//   }
// }
class Form extends Component {
  // handleInput====================
  initalState = {
      dateOfExpence: "",
      userSpentAmount: 0,
      itemDescription: "",
      whereExpenceOccured: "",
    };
  state = {
      dateOfExpence: "",
      userSpentAmount: 0,
      itemDescription: "",
      whereExpenceOccured: "",
    };
    onUserInput=(e)=>{
      switch(e.target.id){
      case "date":
        
        this.setState({ dateOfExpence: e.target.value })
      break;
      case "spentAmount":
        this.setState({ userSpentAmount: e.target.value })
      break;
      case "description":
        this.setState({ itemDescription: e.target.value })
      break;
      case "expenceDetail":
        this.setState({ whereExpenceOccured: e.target.value })
      break;
      
      default :
      break;
    }}
  storInput=(e)=>{
      e.preventDefault();
      this.props.manageUser(this.state)
      this.setState({
        dateOfExpence: "",
      userSpentAmount: 0,
      itemDescription: "",
      whereExpenceOccured: "",
       })
     
  }

render() {
  return (
    <form>
      <input
      id="date"
        type="date"
        value={this.state.dateOfExpence}
        onChange={this.onUserInput}
      />
      <input
        id="spentAmount"
        type="number"
        value={this.state.userSpentAmount}
        onChange={this.onUserInput}
      />
      <input
        id="description"
        type="text"
        value={this.state.itemDescription}
        onChange={this.onUserInput}
      />
      <input
        id="expenceDetail"
        type="text"
        value={this.state.whereExpenceOccured}
        onChange={this.onUserInput}
      />
      <button onClick={this.storInput} type="submit">Submit</button>
    </form>
  );
}
}

export default Form;
