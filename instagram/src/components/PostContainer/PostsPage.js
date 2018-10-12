import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../dummy-data';
import PropTypes from 'prop-types';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data : [],
          search: "",
        }
      }
    
      componentDidMount() {
        this.setState({data: dummyData})
      }

     handleSearch = text => {
        const filteredPost = dummyData.filter(post => {
            return post.username.includes(text);
        });
        this.setState({ data: filteredPost });
    };

  
    render() {
      return (
        <div>
        <SearchBar 
            dummyData={this.state.data}
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange}
                    />
        <PostContainer datas={this.state.data} />
        
        
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
  