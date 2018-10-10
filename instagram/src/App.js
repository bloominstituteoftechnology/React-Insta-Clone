import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      dummyData: [],
      comments: [],
    };
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData,
      comments: dummyData.comments,
    })
  
  }

  render() {
    return (
      <div className="App">
        <PostsPage dummyData={this.state.dummyData} />
      </div>
    );
  }
}

App.propTypes ={
  dummyData: PropTypes.arrayOf(
    PropTypes.shape(
      {
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imgUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.shape(
          {
            username: PropTypes.string,
            text: PropTypes.string,
          }
        )
      }
    )
  )
}


export default App;
