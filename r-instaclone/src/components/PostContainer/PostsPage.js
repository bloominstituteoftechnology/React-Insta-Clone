

import React, { Component } from 'react';
// import logo from './logo.svg';

import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar';
import PropTypes from 'prop-types';




class PostsPage extends Component {
  constructor() {
    super();
     
        this.state = {
          dataSet: dummyData
        }
  }


componentDidMount() {
  console.log ('im working!')
  this.setState = ({dataSet: dummyData})
  
}




render() {
  return (
    <div className="App">

    <SearchBar />
    <PostContainer datasetInfo={this.state.dataSet} />
    
    </div>
  )
}
}// end curly

PostsPage.propTypes={
  dummyData: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timeStampL:PropTypes.string,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
}))
}




export default PostsPage;