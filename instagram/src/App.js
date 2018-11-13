import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  
  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
