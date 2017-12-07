import React, { Component } from 'react';
import './App.css';
import { dummyData } from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    this.setState({postData: dummyData}); // pull list objects from dummyData file
  }

  render() {
    console.log(this.state.postData);
    return (
      <div className="App">
        <h1>Instagram</h1>
        <div>
          {this.state.postData.map(((post, index) => {
            return <PostContainer key={index} postData={post}/>
          }))}
        </div>
      </div>
    );
  }
}

export default App;
