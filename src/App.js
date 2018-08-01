import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import instaLogo from './instagram-logo.png';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBarContainer from './components/SearchBarComp/SearchBarContainer';
import PostContainer from './components/PostsComp/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      input: ''
    }
  }

  handleChange = e => this.setState({ input: e.target.value });

  filterPosts = (e) => {
    let posts = this.state.postData.slice();
    let filteredPosts = posts.filter(item => {
      let input = this.state.input.toLocaleLowerCase();
      let user = item.username.toLocaleLowerCase();
      return input === user;
    });
    this.setState({ postData: filteredPosts, input: '' });
    e.preventDefault();
  }

  componentDidMount() {
    this.setState({ postData: dummyData })
  }

  render() {
    return (
      <div className="main-container">
        <header className="main-header">
          <div className="main-header__logos">
            <div className="main-header__logo-container">
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="main-header__logo-container">
              <img className="main-header__logo" src={instaLogo} alt="instagram logo"/>
            </div>
          </div>
          <SearchBarContainer 
            input={this.state.input}
            onChange={this.handleChange}
            onSubmit={this.filterPosts}
          />
          <div className="main-header__icons-container">
            <FontAwesomeIcon icon={faCompass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faUser} />
          </div>
        </header>    
        <PostContainer postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
