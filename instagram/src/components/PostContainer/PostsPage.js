import React  from 'react';
import './post.css';
import dummyData from './dummy-data.js';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import Logout from '../Logout/Logout';



class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts : [],

      filteredPosts : [],

      comm : ''
    };

  } //constructor ends

  componentDidMount() {
   // console.log('CDM is running', this.state.posts);
    setTimeout(() => {
      this.setState({ posts : dummyData });
    }, 800);
  }

  LogoutHandler = (event) => {
    localStorage.removeItem('user')
    window.location.reload();
  } 

  searchPostsHandler = event => {
    console.log(event.target);
    console.log("In SEARCH .... ", event.target.value);
    const posts = this.state.posts.filter(postToSearch => {
      if (postToSearch.username.includes(event.target.value)) {
          return postToSearch;
      }
    });
    this.setState({ filteredPosts : posts });
  };
              
  render() {
   // console.log(this.state.posts);
    return (
      <div className="App">
           <header className = "header-div">
                <SearchBar 
                    searchTerm = {this.state.searchTerm}
                    searchPosts = {this.searchPostsHandler}
                />
            </header>

          <Logout status = {this.LogoutHandler}/> 

          <div> 
            <PostContainer 
                    postPassedAhead = {
                        this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts
                    }
            />
          </div>
      </div>
    ); //return end
  } //render() end
} //App class component end.

export default PostsPage;
