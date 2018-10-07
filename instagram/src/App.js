import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import dummyData from './dummy-data';
import PropTypes from "prop-types";


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  render() {
    return (
      <div className="App">
          <SearchBar data={this.state.data}/>
          {this.state.data.map(item =>{
            return(
            <PostContainer obj={item} key={item.timestamp} />
            )
          })}
      </div>
    );
  }
}

App.default = {
  likes: 0,
  comments: {
      text: "Be the first to comment!"
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
          username: PropTypes.string,
          thumbnailUrl: PropTypes.string,
          imageUrl: PropTypes.string,
          likes: PropTypes.number,
          timestamp: PropTypes.string,
          comments: PropTypes.arrayOf(
              PropTypes.shape({
                  username: PropTypes.string,
                  text: PropTypes.string
              })
          )
      })
  ),
}

export default App;
