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
    this.state = {dummyData: [], cmdCalled: false, searchText: "", prevDummyData: []}
  }

  componentDidMount () {
    this.setState({dummyData:dummyData, prevDummyData: dummyData, cmdCalled: true});
  }

  handleSearchChange = event => {
    
    const dummyData = this.state.prevDummyData; 
    const prevDummyData = this.state.prevDummyData; 
    //fd === filteredData 
    console.log(event.target.value); 
    const fd  = dummyData.filter(post => post.username.includes(event.target.value))
    console.log(fd.length);
    console.log(fd);
    this.setState({dummyData: fd, searchText:event.target.value}) 

    if(this.state.searchText.length === 0){
      this.setState({dummyData: prevDummyData});
    }
    
    //this.setState({ dummyData: dummyData});
    // if(filteredData.length < 1 ){
    //   this.setState({dummyData: prevDummyData})
    // }

  }

  render() {
    let dummyData; 
    this.state.cmdCalled ? dummyData = this.state.dummyData : dummyData = [];
    
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
