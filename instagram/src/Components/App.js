import React, { Component } from 'react';
import postData from '../application-data';
import '../Styles/App.css';
import { Columns, Column } from 'bloomer';
import PostContainer from './PostContainer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.setState({posts: postData});
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  handleClick = (post) => {
    const posts = this.state.posts;
    posts.forEach(innerPost => {
      if(innerPost.username === post.username) post.likes += 1;
    });

    this.setState({posts});
  }

  render() {
    return (
      <div>
        <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <Columns isCentered>
          <Column isSize="1/2">
            {this.state.posts.map(post => {
              return (
                <PostContainer key={post.username} postData={post} handleClick={this.handleClick} />
              );
            })}
          </Column>
        </Columns>
      </div>
    );
  }
}

export default App;
