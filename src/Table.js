import React, { Component } from "react";


export default class Table extends Component {

    render(){
    return(
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
            
               
    {this.props.userData.map((pruchase,index)=>(
        
        <tr key={index}>
        <td >{pruchase.date}</td>
        <td >{pruchase.amount}</td>
        <td >{pruchase.description}</td>
        <td >{pruchase.expenceOccred}</td>
        </tr>
    ))}
    
            {/* <td>{this.props.userData.userSpentAmount}</td>
        <td>{this.props.userData.itemDescription}</td> 
        <td>{this.props.userData.whereExpenceOccured}</td>,
        <td>{this.props.userData.dateOfExpence}</td>
          */}
 
            </tbody>    
    </table>
    )
}   
}