import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from 'react-router-dom'



class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.history.location.pathname !== "/" ? <Nav /> : null}
        {routes}
      </div>
    );
  }
}

export default withRouter(App)
