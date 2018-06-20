import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      commentTemplate: {
        username: "Desco",
        text: ''
      }
    }
  }

  componentDidMount() {
    this.setState({posts : dummyData});
  }

  addCommentHandler = event => {
    event.preventDefault();
    let newPost = Object.assign({}, this.state.commentTemplate);
    newPost.text = event.target.value;
    this.setState({commentTemplate : newPost});
  }

  addComment = (index, event) => {
    event.preventDefault();
    let nuposts = this.state.posts.slice();
    nuposts.forEach(item => {if(item.imageUrl === index)
      item.comments.push(this.state.commentTemplate);
    });

    this.setState({posts: nuposts});
    this.setState({commentTemplate: {username:'Desco', text:''}});
  }


  render() {
    return (
      <div className="App">
        <div>
            <SearchBar />
            <PostsPage posts={this.state.posts} 
                       addComment={this.addComment} 
                       commentTemplate={this.state.commentTemplate} 
                       addCommentHandler={this.addCommentHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
