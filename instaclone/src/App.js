import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from "./components/PostContainer"
import dummydata from "./components/dumyData";

import "./App.css"
class App extends Component {
  constructor (props){
    super(props);
    this.state ={
        data : dummydata,
        message : ""
    }
    this.title = "Instagram"
  }


  render() {
    if(this.state.data.length <=0) {
      this.setState({
        message : <h3>Content is loading ....</h3>
      })
    }
    
    return (
      <div className="App">
      {this.state.message}
        <header>
            <SearchBar title={this.title}/>
            <PostContainer className="container"data={this.state.data} 
            comments={this.state.data.comments}
             />
           

        </header>

      </div>
    );
  }
}

export default App;
