import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
constructor(){
        super();

	this.state={
		searchItem: ""



};

}	


  render() {
    return (
      <div className="App">
	<SearchBar searchBarStyle="search-bar" />

      </div>
    );
  }
}

export default App;
