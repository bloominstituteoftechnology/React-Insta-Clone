import React from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts : [],
            filteredPosts: [],
            username: ''
        }
    }

  componentDidMount() {
      // on load, set the currentUser from localStorage
      const currentUser = localStorage.getItem('username');
    this.setState({
        posts : dummyData,
        username: currentUser
    });
    
  }

  // on logout, remove username and password from localstorage
  logout = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      window.location.reload();
  }

  search = event => {
      const searchText = event.target.value;
      const newPosts = this.state.posts.filter(post => {
          if(post.username.includes(searchText)) {
              return post;
          }
      })
      this.setState({
          filteredPosts: newPosts
      })
  }
  

  render(){
      return(
          <div className="App">
      <header>
          
        <SearchBar search={this.search} logout={this.logout}/>
        </header>

        <main>
          <PostsContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
      </main>

      </div>
      )
  }

}

export default PostsPage;