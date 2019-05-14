import React from "react";

import Message from "./Message";
import About from "./About";
import Hiring from "./Hiring";

class App extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Message />
        <Hiring />
      </div>
    );
  }
}

export default App;
