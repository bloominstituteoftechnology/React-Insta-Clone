import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 
// import SearchBar from './components/SearchBar/SearchBar.js'; 
// import PostContainer from './components/PostContainer/PostContainer.js'; 
// import CommentSection from './components/CommentSection/CommentSection.js'; 
import PostsPage from './components/PostContainer/PostsPage';



class App extends Component {
  constructor(){
    super();
    this.state = {dummyData: [], cmdCalled: false, searchText: "", prevDummyData: []}
  }

  componentDidMount () {
    this.setState({dummyData:dummyData, prevDummyData: dummyData, cmdCalled: true});
  }

  // handleSearchChange = event => {
    
  //   const dummyData = this.state.prevDummyData; 
  //   const prevDummyData = this.state.prevDummyData; 
  //   //fd === filteredData 

  //   const fd  = dummyData.filter(post => post.username.includes(event.target.value))
    
  //   this.setState({dummyData: fd, searchText:event.target.value}) 

  //   if(event.target.value === 0){
  //     this.setState({dummyData: prevDummyData});
  //   }
    

  // }

  render() {
    let dummyData = this.state.dummyData.slice(); 
    // this.state.cmdCalled ? dummyData = this.props.dummyData : dummyData = [];
    
    return (
      
      //   <SearchBar  value ={this.state.searchText} onChange = {this.handleSearchChange}/>
      //   {dummyData.map((post, i) => <div key = {i} className = "post">
      //   <hr className ="hrLine"/> <div className = "containerPost">
      //   <PostContainer key = {Date.now()} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
      //   likes = {post.likes}/> 
      //   <CommentSection key ={i} comments = {post.comments} time = {post.timestamp}/> 
      //   </div></div>) }
      // <div className = "App"></div>
        <PostsPage dummyData={dummyData}/>
        
        
      
      

    );
    
  }
}

export default App;
