import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import Navigation from './components/Navigation';
import PostContainer from './PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      searchText: '',
    }
  }

  handlesChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation handlesChanges={this.handlesChanges} searchText={this.state.searchText}/>
        </header>
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}


export default App;
