import React, { Component } from 'react';
import './App.css';
import dummyData   from "./dummy-data";
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";
import Post from "./components/Posts/Post/Post";


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      userInput: []
    };
}

changeUserInput(input){
  this.setState({
    userInput: input
  })
}

componentDidMount() {
  this.setState({
    data: dummyData
  })
}

  render() {
    return (

      <div className="App">
        <SearchbarContainer />
        {this.state.data.map(instance =>{
            return(
        <Post data={this.state.data} obj={instance} key={instance.timestamp}/>
            )})}
        
      </div>
    );
  }
}

export default App;
