import React, { Component } from 'react';
import {SearchBar} from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import dummyData from './dummy-data';
import { Button } from 'reactstrap';


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
        <Button>
          I'm a button
        </Button>
        <div>
          {this.state.data.map((post, index)=><PostContainer key={index} post={post}/>)}
        </div>
      </div>
    );
  }
}



export default App;