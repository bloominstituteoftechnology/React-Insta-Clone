import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 
import SearchBar from './components/SearchBar/SearchBar.js'; 
import PostContainer from './components/PostContainer/PostContainer.js'; 
import CommentSection from './components/CommentSection/CommentSection.js'; 


class App extends Component {
  constructor(){
    super();
    this.state = {dummyData: [], cmdCalled: false, searchText: "", filteredData: []}
  }

  componentDidMount () {
    this.setState({dummyData:dummyData, cmdCalled: true});
  }

  handleSearchChange = event => {
    this.setState({searchText: event.target.value});
    const dummyData = this.state.dummyData; 
    const filteredData = [];
    
    dummyData.filter(post => post.username.includes(this.state.searchText) ? filteredData.push(post): console.log("not included"));
    this.setState({filteredData: filteredData})
    
    this.state.searchText !== "" ? this.setState({filteredData: filteredData}) : this.setState({filteredData: []});
  }
  

  render() {
    let dummyData; 
    this.state.cmdCalled && this.state.filteredData.length < 1 ? dummyData = this.state.dummyData : dummyData = this.state.filteredData;
    
    return (
      <div className="App">
        <SearchBar  value ={this.state.searchText} onChange = {this.handleSearchChange}/>
        {dummyData.map((post, i) => <div key = {i} className = "post">
        <hr className ="hrLine"/> <div className = "containerPost">
        <PostContainer key = {Date.now()} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
        likes = {post.likes}/> 
        <CommentSection key ={i} comments = {post.comments} time = {post.timestamp}/> 
        </div></div>) }

        
        
        
      </div>
    );
    
  }
}

export default App;
