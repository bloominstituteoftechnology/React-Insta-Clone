import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import PostsPage from './components/PostContainer';
import Authenticate from './components/Authentication/Authenticate';
import dummyData from "./dummy-data.js";


class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: dummyData
    }
  }

  searchPosts(query){
    let posts = this.state.allPosts.filter((post) => {
        return posts.username.includes(query) || post.body.includes(query)
      });
      console.log("testPPp",query)
  }

  componentDidMount() {
    console.log("CDM invoked");
    const posts = JSON.parse(localStorage.getItem('posts')) || []
     this.setState({ posts: posts, allPosts: posts});

 }
  render() {
    return (<div>


      <SearchBar  searchPosts={this.searchPosts.bind(this)}/>

      {this.state.myData.map((data, index) => (<PostContainer key={index} username={data.username} likes={data.likes} avatar={data.thumbnailUrl} image={data.imageUrl} caption={data.comments}/>))}
    {/* <PostsPage /> */}

    </div>);
  }
}

export default Authenticate(App);
