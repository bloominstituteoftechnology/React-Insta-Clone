import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
        dummyData: [],
        imageUrl: 'https://via.placeholder.com/100'
    }
  }

  // handleButtonClick
  handleButtonClick = event => {
    // alert the event.target.innerText
    alert(event.target.innerText);
  }

  componentDidMount() {
    /*
    ** this sets the state on dummyData
    */
    this.setState({dummyData: dummyData})
  }
  
  render() {
    console.log(this.state.dummyData);
    return (
      <div className="App">

        {/* SearchBar Component */}
        <SearchBar
          buttonClick={ this.handleButtonClick }
        />

        {/* PostContainer Component */}
        <PostContainer
          containerProps= {dummyData}
          imgSource={ this.state.imageUrl }
        />
      </div>
    );
  }
}

export default App;
