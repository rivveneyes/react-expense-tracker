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
            <tr>
              <td>{this.props.userData.itemDescription}</td>  
              <td>data2</td>  
              <td>data3</td>  
              <td>data4</td>  
            </tr>   
            </tbody>    
    </table>
    )
}   
}