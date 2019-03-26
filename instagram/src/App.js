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
        filteredQuery:'',
    }
    this.useCache = false;
    this.clearCacheFlag = false;
  }
  componentDidMount() {
    if(this.clearCacheFlag){
        this.clearCache();
    }
    
    let cachedList = this.getFromLocal('postList')
    if(cachedList === null){
        this.saveToLocal('postList', postList)
    }
    if(this.useCache){
        this.setState({postList: cachedList})
    }else{
        this.setState({postList: postList})
    }
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
    console.log('copyArr',copyArr)
    this.saveToLocal('postList', copyArr)
  }
  
  addComment = (e, val, postId)=> {
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
    this.saveToLocal('postList', newArr)
  }
  
  saveToLocal = (key, value)=>{
      localStorage.setItem(key,  JSON.stringify(value))
  }
  
  getFromLocal = (key) => {
      return JSON.parse(localStorage.getItem(key))
  }
  clearCache = ()=>{
     localStorage.clear();
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
              onAddComment={this.addComment}
              onLikeClick={this.addLike}/>
      </div>
    );
  }
}

export default App;
