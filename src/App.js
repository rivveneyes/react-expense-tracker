import React, { Component } from "react";

import Form from "./formfield";

class App extends Component {
  // state = {
  //   characters: [
  //     {
  //       name: "Charlie",
  //       job: "Janitor",
  //     },
  //     {
  //       name: "Mac",
  //       job: "Bouncer",
  //     },
  //     {
  //       name: "Dee",
  //       job: "Aspring actress",
  //       },

  //     {
  //       name: "Dennis",
  //       job: "Bartender",
  //     },
  //   ],
  // };
  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Expence-trakcer</h1>

        <Form />
      </div>
    );
  }
}
export default App;
