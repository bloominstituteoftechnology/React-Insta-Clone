import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.css';
import MyPostContainer from './components/PostContainer/MyPostContainer.js';
import NavbarFeatures from './components/SearchBar/SearchBar.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Info: dummyData,
    }
  }

  // componentDidMount() {

  //   this.setState({Info: dummyData})
  // }

  render() {
    return ( 
      <div className="myApp">
          <MyPostContainer dData={this.state.Info} />
      </div>
    );
  }
}

export default App;
