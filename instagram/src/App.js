import React from 'react';
import { render } from "react-dom";
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {


  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }

    render(){

      console.log(this.state.data);
      return (
        <div className="App">
          <SearchBar />
          <PostContainer postsData={this.state.data} />
        </div>
      );
  }
}



export default App;
