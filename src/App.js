import React, { Component } from "react";
import Form from "./formfield";
import Table from "./Table"

// class App extends Component {
//   state = {
//     dateOfExpence: "",
//     userSpentAmount: 0,
//     itemDescription: "",
//     whereExpenceOccured: "",
//   };
//   onUserInput=(e)=>{
//     switch(e.target.id){
//     case "date":
      
//       this.setState({ dateOfExpence: e.target.value })
//     break;
//     case "spentAmount":
//       this.setState({ userSpentAmount: e.target.value })
//     break;
//     case "description":
//       this.setState({ itemDescription: e.target.value })
//     break;
//     case "expenceDetail":
//       this.setState({ whereExpenceOccured: e.target.value })
//     break;
    
//     default :
//     break;
//   }}
//   render() {
//     return (
//       <div className="container">
//         <h1 className="text-center"> Expence-trakcer</h1>
//         <Form data={this.state} change={this.onUserInput}/>
//         <Table userData={this.state}/>
//       </div>
//     );
//   }
// }





class App extends Component {
  state ={
    todo:[]
  };
    handleInput=(data)=>{

        let addedData=[data,...this.state.todo]
        this.setState({
         todo:addedData
        })
        console.log(data)
        console.log(this.state.todo)
        }


  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Expence-trakcer</h1>
        <Form manageUser={this.handleInput}/>









        <Table userData={this.state}/>


        <div id="placed datata test">{JSON.stringify(this.sate.todo)} </div>
      </div>
    );
  }
}

export default App;
