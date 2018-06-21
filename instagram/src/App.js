import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from "./components/Authenticate/Authenticate";


class App extends Component {
constructor(){
        super();

	this.state={
		dummyData: [],
		searchData: [],
};

}	

componentDidMount(){
	this.setState({dummyData: dummyData});
}


searchPost = event => {
        event.preventDefault();
        let dummyData =this.state.dummyData.slice();
        dummyData = dummyData.filter(dummyData => 
		
		{if(dummyData.username.includes(event.target.value))
		{
			return dummyData; 
		}
		});
		 this.setState({dummyData: dummyData});
}	


  render() {
    return (
      <div className="App">
	<SearchBar SearchValue={this.state.searchItem} changeSearchValue={this.changeSearchBarValue} searchTrigger={this.searchPost}  />

	 <div>
	{this.state.dummyData.map(dummyData => 
		<PostContainer  addComment= {this.addNewComment}  NewCommentValue={this.state.newComment} changeCommentValue={this.changeCommentValue}  key={dummyData.timestamp} PostContainer="post-container"  PostImage="post-image" HeaderContainer="header-container"  HeaderImageStyle="header-image-style" dummyData={dummyData}/>
	
	)}		
	 </div> 

      </div>
    );
  }
}

export default Authenticate(App);

