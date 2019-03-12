import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';




class PostsPage extends Component {
  constructor(){
    super();
    this.state={
      posts: [],
      filteredPosts: [],
      liked:[]
    }
  }

  componentDidMount(){
    this.setState({ posts: dummyData})
    this.setState({ filteredPosts: dummyData})
    this.setState({liked: dummyData.map(() => 'notLiked')})
  }

  searchFilter = ev =>{
    let thing = this.state.posts.filter(data =>{
        
        return data.username.includes(ev.target.value);
      
      
    })
    // if(ev.target.value === ''){
    //   filterPosts = this.state.posts;
    // }
    
    
    this.setState({
      filteredPosts: thing
    })

  }
  addNewLike = ev =>{
    
    let currentObj = {};
    let currentIndex = 0;
    
    this.state.filteredPosts.forEach( (item,index) =>{
      if(ev.target.id == index){
        currentObj =item;
        currentIndex = index;
      }
    });
    let newState = this.state.liked[currentIndex];
    let tempLiked = this.state.liked.slice();
    let tempList = this.state.filteredPosts.slice();
    if(newState === 'liked'){
      
      newState = 'notLiked';
      currentObj.likes--

    }else{
      
      currentObj.likes++
      newState = 'liked';
    }
    
    console.log(newState)
    
    tempLiked[currentIndex] = newState
    tempList[currentIndex] = currentObj;
    
    this.setState({
      filteredPosts: tempList,
      liked: tempLiked
  })
   
}

logout = ev => {
    localStorage.removeItem('username');
    window.location.reload();
}

  
  render() {
    return (
      <div className="App">
        <SearchBar searchFilter={this.searchFilter} logout={this.logout}/>
        <div className="container">
        
        {this.state.filteredPosts.map((data, index) => (
          <PostContainer
            data ={data}
            addNewLike={this.addNewLike}
            id={index}
            likedBool = {this.state.liked[index]}
            />
        ))}
        </div>
      </div>
    );
  }
}

export default PostsPage;
