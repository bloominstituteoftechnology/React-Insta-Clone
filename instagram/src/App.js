import React, { Component } from 'react';
import authenticate from './components/Authentication/Authenticate';
import logo from './logo.svg';
import dummyData from './dummy-data';
import NavBar from './components/NavBar';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';

//i'm pretty sure the actual inta API would include a post ID in the json, 
//but since our dummy data doesn't have one, I'll create a fake one
function  assignIdToPost(post, index){
  post.id = index;
  return post;
}

function filterPostsFromSearchText(posts, searchTerm){
  //filter posts
  let filteredPosts = posts.filter(post => post.username === searchTerm);
  return filteredPosts;
}

class App extends Component {
  constructor() {
    super();
    this.updateSearchText = this.updateSearchText.bind(this);
    this.state = {
      loading: true,
      dummyData: {},
      searchText: ''
    };
  }

  componentDidMount() {
    this.initializeDummyData(dummyData);
  }

  //child component syntax
  initializeDummyData = (dummyData) => {
    
    let feedData = dummyData.map((post, index) => assignIdToPost(post, index) );

    this.setState(
      { 
        posts: feedData, 
        loading: false, 
      }
    );
  }

  updateSearchText = event => {
    console.log(event.key);
    if(event.key === 'Enter'){
      //filter posts by username
      //clear search text
      this.setState({
        posts: filterPostsFromSearchText(this.state.posts, this.state.searchText),
        searchText: ''
      });
    }else{
      this.setState({
        searchText: this.state.searchText + event.key
      });
    }
  };

  render() {
    if(this.state.loading){
      return <p>loading</p> 
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <NavBar value={this.state.searchText} onKeyPress={this.updateSearchText}/>
          <PostsPage posts={this.state.posts} />
        </header>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default authenticate(App);

/*
  username: "philzcoffee",
  thumbnailUrl:
    "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

  imageUrl:
    "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
  likes: 400,
  timestamp: "July 17th 2017, 12:42:40 pm",
  comments: [
    {
      username: "philzcoffee",
      text:
        "We've got more than just delicious coffees to offer at our shops!"
    },
    {
      username: "biancasaurus",
      text: "Looks delicious!"
    },
    {
      username: "martinseludo",
      text: "Can't wait to try it!"
    }
  ]
 */