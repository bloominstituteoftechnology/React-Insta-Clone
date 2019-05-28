import React from 'react';
// import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  // state = { newComment: ' ',
  //   data: dummyData


  // }
  componentDidMount(){
    this.setState ({posts: dummyData});
  }
   
  searchPosts = e => {
    const posts = this.state.posts.filter (post =>{
      if (post.username.includes(e.target.value)){
        return post;
      }
    });
    this.setState({filteredPosts: posts});
  }
  // onInputChange = (e) => {
  //   e.preventDefault();
  //   this.setState({newComment: e.target.value})
  // }

  // addComment = (e, comment) =>{
  //   e.preventDefault();
  //   const newOne = {
  //     text: comment
  //   }
  

  // this.setState ({
  //   data: [...this.state.data, newOne ],
  //   newComment: ' ',
  // })}

  render(){
     console.log(this.state.data)

  return (
    <div className="App">
      <SearchBar
        searchPosts = {this.searchPosts}/>

       
     <PostContainer 
        posts = {
          this.state.filteredPosts.length>0? this.filteredPosts:
            this.state.posts
        }
            />
       })}
          
     </div>
  );
}}

export default App;
