import React from "react";
import Message from "./Message";
import About from "./About";
import Hiring from "./Hiring";

class App extends React.Component {
  componentDidMount(){
    document.querySelector("meta[name='keywords']").content="IIT(ISM) Dhanbad CDC, About CDC, Intern hiring, Full time hiring, cdc iit(ism)";
    document.querySelector("meta[name='description']").content="Home page for Career Development Cell of IIT(ISM) Dhanbad";

  }
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
