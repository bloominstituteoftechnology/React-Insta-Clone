import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../Searchbar/SearchBar';
import dummyData from '../dummy-data';
import './PostContainer.css';

class PostsPage extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState({dummyData, searchInfo: ''})
    }, 1000)
  }

  handleSearch = event => {
    this.setState({searchInfo: event.target.value});
  };

  searchDemPosts = event => {
    event.preventDefault();
    if(this.state.searchInfo) {
      this.setState({
        dummyData: this.state.dummyData.filter(post => {
          if(post.username.includes(this.state.searchInfo)) return post;
        })

      })} else this.componentDidMount();

  };

  render() {

    if(!this.state.dummyData) {
      return <div className = 'loadingMSG'> loading...</div>
    }

    return (
      <div className='App-container'>
        <SearchBar
          handleSearch = {this.handleSearch}
          searchDemPosts = {this.searchDemPosts}
          searchInfo = {this.state.searchInfo}
        />

        <PostContainer data = {this.state.dummyData}/>

      </div>

    );

  }


}

export default PostsPage;