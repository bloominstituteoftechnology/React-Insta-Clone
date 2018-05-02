import React, { Component } from 'react';
import logo from './logo.svg';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ data: dummyData });
    console.log("didMount", this.state)
  }
  render() {
    return (
      <div className="App">
      Hello 
      {this.state.data.map((element) => {
        console.log(element)
        return <PostContainer data={element}/>
      })}
      </div>
    );
  }
}

export default App;
