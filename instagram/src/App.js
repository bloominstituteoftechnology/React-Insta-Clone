import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      searchValue: '',
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: dummyData
      });
    }, 2000);
  }

  submitComment = (timestamp, comment) => {
    const commentMatch = this.state.data.slice().filter(post => post.timestamp === timestamp).pop(),
      commentUnMatch = this.state.data.slice().filter(post => post.timestamp !== timestamp);

    commentMatch.comments.push(comment);

    commentUnMatch.unshift(commentMatch);

    this.setState({ data: commentUnMatch });
  }

  search = e => {
    this.setState({ [e.target.name]: e.target.value });
    const search = this.state.data.slice().filter(post => post.username.toLowerCase().includes((e.target.value).toLowerCase()) || post.comments.map(comm => comm.text.toLowerCase().includes((e.target.value).toLowerCase()) || comm.username.toLowerCase().includes((e.target.value).toLowerCase())).includes(true));
    this.setState({ data: search });
    if (this.state.searchValue.length === 0) {
      this.setState({ data: dummyData });
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return <Loader type="Triangle" color="darkgreen" height={80} width={80} />;
    } else {
      return (
        <div className="App">
          <header>
            <i className='fab fa-instagram' />
            <i className='headName'>Instagram</i>
            <SearchBar
              search={this.search}
              searchValue={this.state.searchValue}
            />
            <div>
              <i className='far fa-compass' />
              <i className='far fa-heart' />
              <i className='far fa-user' />
            </div>
          </header>
          {this.state.data.map(post => (
            <PostContainer
              post={post}
              key={post.timestamp}
              liker={this.liker}
              liked={this.state.liked}
              submitComment={this.submitComment}
            />
          ))}
        </div>
      );
    }
  }
}

export default App;
