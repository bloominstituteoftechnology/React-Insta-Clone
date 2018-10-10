import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../dummy-data';
import PropTypes from 'prop-types';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
      
        }
      }
    
      componentDidMount() {
        this.setState({instaData: [dummyData]})
      }
    
  
    render() {
      return (
        <div>
        <SearchBar />
        <PostContainer instaData={this.state.instaData} dummyData={dummyData} />
        
        
        </div>
      );
    }
  }
  
  PostsPage.propTypes = {
    dummydata: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            username: PropTypes.string,
            text:PropTypes.string
          })
        )
  
      })
    )
  }

  
  export default PostsPage;
  