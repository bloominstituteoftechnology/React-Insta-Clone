import React, { Component } from 'react';
import './App.css';

// data
import dummyData from './dummy-data';

// components
import { SearchBarContainer } from './components/SearchBar/SearchBarContainer';
import { PostContainer } from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  // handles every input value
  handleInputValueChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  
  render() {
    return (
      <div className="App">
        <SearchBarContainer
          handleInputValueChange={ this.handleInputValueChange }
          inputValue={ this.state.inputValue }
        />

        <PostContainer />
      </div>
    );
  }
}

export default App;
