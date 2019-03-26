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
  componentWillMount() {
    // axios.get('/thedata').then(res => {
    //     this.setState({items: res.data});
    // });
    this.setState({postList: postList})
  }
  
  onSearchPost = (e, val )=>{
    e.preventDefault();
    console.log('query changed', e)
    console.log('val', val)
    
    //search all comments
  }
  
  onQueryChange = (val )=>{
    console.log('val', val)
    this.setState({filteredQuery: val})
    //search all comments
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
       const matcher = RegExp(this.state.filteredQuery, 'i')
       const filteredArr = this.state.postList.filter(post => {
        
        // How do you loop thoughg array inside an array
        const foundArr =  post.comments.map(comment => {
            matcher.test(comment.text)
         })
         
         console.log(foundArr)
        return foundArr
       })
      console.log(filteredArr)
    return (
      <div className="App">
          <SearchBar
              onQueryChange={this.onQueryChange}
              onSearchPost={this.onSearchPost}/>
          <PostContainer
              postList={filteredArr}
              onAddComment={this.addItem}/>
      </div>
    );
  }
}

export default App;
