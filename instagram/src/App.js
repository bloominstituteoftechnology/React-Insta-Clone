import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';



class App extends Component {
  constructor(){
    super()
    this.state = {
      instagramData : []
    }
  }

  componentDidMount() {
    this.setState({instagramData:this.getData()})
  }


  getData = () => {
    return dummyData;
  }

  render() {
    return (
      <div className="App-wrapper">
      <PostContainer instagramData = {this.state.instagramData}/>

      </div>
    );
  }
}

export default App;
