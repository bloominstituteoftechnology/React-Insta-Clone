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
    }


    this.title = "Instagram"
  }

  
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
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
