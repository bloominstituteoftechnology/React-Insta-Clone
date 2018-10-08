import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/Search';
import Posts from './components/PostContainer/Posts';
import data from './dummy-data'

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.setState({data: data})
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Posts data={this.state.data}/>
      </div>
    );
  }
}

export default App;
