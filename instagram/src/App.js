import React, { Component } from 'react';
import './App.scss';
import {postList} from './dummyData'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(){
    super()
    this.state = {
        postList:[],
        filteredQuery:''
    }
  }
  componentDidMount() {
    this.setState({postList: postList})
  }
  
  onSearchPost = (e, val)=>{
    e.preventDefault();
    this.setState({filteredQuery: val})
  }
  
  onQueryChange = (val )=>{
    this.setState({filteredQuery: val})
  }
  
  addLike = (e, postId)=> {
    console.log('postId', postId)
    const copyArr = [...this.state.postList]
    copyArr.find(el => el.id === postId).likes++
    
    this.setState({
         postList: copyArr
    })
  }
  
  addItem = (e, val, postId)=> {
    e.preventDefault();
    const copyArr = this.state.postList.slice()
    const post = copyArr.find(el => el.id === postId)
    
    // add new comment
    const newComment =
    {
      id:post.comments.length + 10,
      username: "philzcoffee",
      text: val
    }
  
    post.comments.push(newComment)
    const newArr = [...copyArr, post]
    this.setState({...postList, newArr})
  }
  
  render() {
      let filteredArr;
      if(this.state.filteredQuery){
           const matcher = new RegExp(this.state.filteredQuery, 'i')
          filteredArr = this.state.postList.filter(post => matcher.test(post.username))
       }else{
          filteredArr = this.state.postList
       }
    return (
      <div className="App">
          <SearchBar
              onQueryChange={this.onQueryChange}
              onSearchPost={this.onSearchPost}/>
          <PostContainer
              postList={filteredArr}
              onAddComment={this.addItem}
              onLikeClick={this.addLike}/>
      </div>
    );
  }
}

export default App;
