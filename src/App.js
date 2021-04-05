import React, { Component } from "react";
import Form from "./formfield";
import Table from "./Table"

class App extends Component {
  state = {
    dateOfExpence: "",
    userSpentAmount: 0,
    itemDescription: "",
    whereExpenceOccured: "",
    todo:[]
  };
  onUserInput=(e)=>{
    
    switch(e.target.id){
    case "date":
      
      this.setState({dateOfExpence: e.target.value })
      // this.setState({dateOfExpence: e.target.value })
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
  handleInput=(date,amount,description,expenceOccred)=>{
    date==="" ? alert("please enter date"):
    amount===0 ? alert("please enter amount"):
    description==="" ? alert("please enter description"):
    expenceOccred==="" ? alert("please enter where expence occured"):

    this.setState({
       todo : [...this.state.todo,{
       date: date,
       amount: amount,
       description: description,
       expenceOccred: expenceOccred
      }],
      dateOfExpence: "",
      userSpentAmount: 0,
      itemDescription: "",
      whereExpenceOccured: "",
      
    })
    
    // this.setState(
    //   {
    //   dateOfExpence: "",
    // userSpentAmount: 0,
    // itemDescription: "",
    // whereExpenceOccured: "",
    // }
    // )
    }


    storInput=(e)=>{
      e.preventDefault();
      this.handleInput(
        this.state.dateOfExpence,
        this.state.userSpentAmount,
        this.state.itemDescription,
        this.state.whereExpenceOccured)

      }
      
  render() {
    
    return (
      <div className="container">
        <h1 className="text-center"> Expence-trakcer</h1>
        <Form data={this.state} change={this.onUserInput} submit={this.storInput}/>
        <Table userData={this.state.todo}/>
      </div>
    );
  }
}


// class App extends Component {
//   state ={
//     dateOfExpence: "",
//     userSpentAmount: 0,
//     itemDescription: "",
//     whereExpenceOccured: "",
//     todo:[]
//   };
//     handleInput=(data)=>{

//         let addedData=[data,...this.state.todo]
//         this.setState({
//          todo:addedData
//         })
//         console.log(data)
//         console.log(this.state.todo)
//         }


//   render() {
//     return (
//       <div className="container">
//         <h1 className="text-center"> Expence-trakcer</h1>
//         <Form manageUser={this.handleInput}/>
//         <Table userData={this.state}/>
//         <div id="placed datata test">{JSON.stringify(this.sate.todo)} </div>
//       </div>
//     );
//   }
// }

export default App;
