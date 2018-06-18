import React, { Component } from 'react';
import dummyData from "./dummy-data";
import './App.css';
import PostContainer from './components/PostConatainer/PostContainer';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        dummyData: []
      }
    }

    componentDidMount(){
      this.setState({ dummyData: dummyData })
    }

  render() {
    console.log(dummyData);
    return(
      <div>
      {this.state.dummyData.map((post, index) => {
        return (
        <PostContainer 
          key={index}
          />

        )
      })}>
      </div>
    )
  }
}

export default App;
