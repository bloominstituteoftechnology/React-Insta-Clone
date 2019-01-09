import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      searchPosts: []
    };
  }

  componentDidMount(){
    this.setState({data: dummyData});
  }

  searchPostsHandler = e => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ searchPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <PostPage search={this.searchPostsHandler} posts={this.state.searchPosts.length > 0 ? this.state.searchPosts : this.state.data}/>
      </div>
    );
  }
}

export default Authenticate(App);
