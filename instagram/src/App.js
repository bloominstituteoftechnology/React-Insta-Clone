import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './components/dummy-data';
import PropTypes from 'prop-types';



class App extends Component {
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
      <div className="insta_app">
      <SearchBar />
      <PostContainer instaData={this.state.instaData} dummyData={dummyData} />
      
      
      </div>
    );
  }
}

App.propTypes = {
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

export default App;
