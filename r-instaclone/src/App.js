import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import PropTypes from 'prop-types';



class App extends Component {
  constructor() {
    super();
     
        this.state = {
          dataSet: dummyData
        }
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

App.propTypes={
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



export default App;
