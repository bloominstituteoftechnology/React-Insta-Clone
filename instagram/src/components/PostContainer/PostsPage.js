import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }
  componentDidMount(){
    this.setState({posts: dummyData, filteredPosts: dummyData});
    window.localStorage.setItem("posts", JSON.stringify(dummyData));
  }
  searchHandler = e => {
    let posts = this.state.posts.filter(p => p.username.includes(e.target.value));
    this.setState({filteredPosts: posts});
  }
  render(){
    return(
      <div className="App">
        <SearchBar handler={this.searchHandler}/>
        <div className="Posts">
        {this.state.filteredPosts.map(item => {
          return(
            <PostContainer
              key={Math.random()}
              item={item}
            />
          )
        })}
        </div>
      </div>
    )
  }
}

export default PostsPage;
