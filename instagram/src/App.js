import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';




class App extends Component {
constructor(){
        super();

	this.state={
		dummyData: [],
		searchItem: ""



};

}	

componentDidMount(){
	this.setState({dummyData: dummyData});

}



  render() {
    return (
      <div className="App">
	<SearchBar SearchContainer="search-container"  searchBarStyle="search-bar" />

	 <div>
	{this.state.dummyData.map(dummyData => 
		<PostContainer key={dummyData.timestamp} PostContainer="post-container"  PostImage="post-image" HeaderContainer="header-container"  HeaderImageStyle="header-image-style" dummyData={dummyData}/>
	
	)}		
	 </div> 

      </div>
    );
  }
}

export default App;
