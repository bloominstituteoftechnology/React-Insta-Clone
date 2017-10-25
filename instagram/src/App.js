import React, { Component } from 'react';
import postData from './application-data';
import Header from './header/Header';
import Post from './post/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      search: [],
      me: 'alexfigliolia'
    }
  }

  componentDidMount() {
    this.setState({ postData: postData, search: postData });
  }

  handleSearch = (val) => {
    const results = [];
    for(let i = 0; i < this.state.postData.length; i++) {
      let post = this.state.postData[i].username.toLowerCase();
      if(post.indexOf(val.toLowerCase()) !== -1) {
        results.push(this.state.postData[i]);
      }
    }
    this.setState({ search: results });
  }

  addComment = (val, i) => {
    const posts = this.state.postData;
    const post = posts[i];
    const comment = {
      username: this.state.me,
      text: val
    }
    post.comments.push(comment);
    // this.setState({
    //   postData: 
    // });
  }

  render() {
    return (
      <div className="App">
        <Header 
          handleSearch={this.handleSearch} />
        <div className="post-section">
          {
            this.state.search.map((post, i) => {
              return <Post 
                        addComment={this.addComment}
                        key={i} 
                        postData={post} 
                        index={i} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
