import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      inputValue: '',
      dummyData: []
    };
  }

  // handles every input value
  handleInputValueChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  componentDidMount() {
    this.setState({
      dummyData: [ ...dummyData ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <SearchBarContainer
          handleInputValueChange={ this.handleInputValueChange }
          inputValue={ this.state.inputValue }
        />

        <PostContainer
          dummyData={ this.state.dummyData }
        />
      </div>
    );
  }
}

export default App;
