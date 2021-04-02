import React, { Component } from "react";

import Form from "./formfield";

class App extends Component {
  state = {
    dateOfExpence: "",
    userSpentAmount: 0,
    itemDescription: "",
    whereExpenceOccured: "",
  };
  onUserInput=(e)=>{
    switch(e.target.id){
    case "date":
      console.log('hit')
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
  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Expence-trakcer</h1>
        <Form data={this.state} change={this.onUserInput}/>

      </div>
    );
  }
}
export default App;
