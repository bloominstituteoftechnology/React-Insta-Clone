import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import AccountContainer from './Components/AccountContainer/AccountContainer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [dummyData],
      footer:['About Us', 'Support','Press','API','Jobs','Privacy','Terms', 'Directory', 'Profiles', 'Hashtags', 'Language']
    };
  }


  render() {
    return (
      <div className = "App">
        <SearchBar />
        <div className="main-container">
          <PostContainer data = {this.state.data}/>
          <AccountContainer footer={this.state.footer}/>
        </div>
      </div>
    );
    
  };
};

export default App;
