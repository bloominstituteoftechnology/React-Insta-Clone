import React, { Component } from "react";
import "./App.css";
import dummyData from "./components/dummy-data";
import Container from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/Searchbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 800);
  }

  // addNewComment(event, index) {
  //   event.preventDefault();
  //   const copyState = this.state.data.map((post, idx) => {
  //     if (idx.toString() === event.target.id) {
  //     }
  //   });
  //   this.setState({});
  // }

  render() {
    return (
      <div className="container">
        {/* <header>
          <SearchBar />
        </header> */}
        {this.state.data.map(post => {
          return <Container post={post} />;
        })}
      </div>
    );
  }
}

export default App;
