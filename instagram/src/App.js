import React, { Component } from 'react';
import {SearchBar} from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import dummyData from './dummy-data';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
    };
  }
  componentDidMount(){
    this.setState({
      data:dummyData,
    });
  }
  render() {
    return (
      <div className = 'App'>
        <div>
          <SearchBar/>
        </div>
      
        <div>
          {this.state.data.map((post, index)=><PostContainer key={index} post={post}/>)}
        </div>
      </div>
    );
  }
}
export default App;