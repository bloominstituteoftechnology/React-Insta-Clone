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
		searchItem: "",
		//newComment: ""
};

}	

componentDidMount(){
	this.setState({dummyData: dummyData});
}


changeSearchBarValue = event => {
   event.preventDefault();
   // console.log(event.target.value);
    this.setState({ searchItem: event.target.value });
  };


searchPost = event => {
        event.preventDefault();
        let dummyData =this.state.dummyData.slice();
        dummyData = dummyData.filter(dummyData => dummyData.username === this.state.searchItem);
	this.setState({dummyData: dummyData, searchItem: ""});
	
}
 

//searchHandler = () =>{
//	changeSearchBarValue();
//	searchPost();
//}


//changeCommentValue = event => {
  // event.preventDefault();
   // this.setState({ newComment: event.target.value });
 // };


addNewComment = (event, index) => {
	event.preventDefault();
	let dummyData =this.state.dummyData.slice();
	console.log(index);
	 dummyData.forEach(dummyData => {
	if(dummyData.imageUrl === index)

        dummyData.comments.push({"username":"ssg", "text":this.state.newComment});
	});

	this.setState({dummyData: dummyData});
};



  render() {
    return (
      <div className="App">
	<SearchBar SearchValue={this.state.searchItem} changeSearchValue={this.changeSearchBarValue} searchTrigger={this.searchPost} SearchContainer="search-container"  searchBarStyle="search-bar" />

	 <div>
	{this.state.dummyData.map(dummyData => 
		<PostContainer  addComment= {this.addNewComment}  NewCommentValue={this.state.newComment} changeCommentValue={this.changeCommentValue}  key={dummyData.timestamp} PostContainer="post-container"  PostImage="post-image" HeaderContainer="header-container"  HeaderImageStyle="header-image-style" dummyData={dummyData}/>
	
	)}		
	 </div> 

      </div>
    );
  }
}

export default App;
