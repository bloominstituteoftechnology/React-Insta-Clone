import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';




class App extends Component {
constructor(){
        super();

	this.state={
		dummyData: dummyData,
		searchItem: ""



};

}	


  render() {
    return (
      <div className="App">
	<SearchBar searchBarStyle="search-bar" />
	<PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
