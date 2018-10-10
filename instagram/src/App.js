import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faComment,
  faHeart,
  faCompass,
  faUser
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faComment, faHeart, faEllipsisH, faCompass, faUser, faSearch, fab);

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      search: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        postData: dummyData
      });
    }, 800);
  }

  // onChangeHandler = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  search = event => {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  };

  render() {
    let filterSearch = this.state.postData.filter(post => {
      return post.username.indexOf(this.state.search) !== -1;
    });
    return (
      <div className="appContainer">
        {!this.state.postData.length ? (
          <h1 className="loadingScreen">Loading...</h1>
        ) : (
          <div>
            <SearchBar stateSearch={this.state.search} search={this.search} />
            {filterSearch.map(postInfo => (
              <PostContainer postInfo={postInfo} key={postInfo.timestamp} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
