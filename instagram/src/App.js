import React, { Component } from "react";
import "./App.css";
import Authenticate from "./Authentication/Authenticate"
import PostsPage from "./Components/PostsPage";

const higherOrderComponent = (WrappedComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: "Hello World!"
    }
  }

  render() {
    return (
      <div className="container">
        <WrappedComponent />
      </div>
    )
  }
}
const HOC = higherOrderComponent(PostsPage)

const App = () => {
  return <HOC />
}

export default Authenticate(App);