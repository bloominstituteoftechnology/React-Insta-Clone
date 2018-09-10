import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import CommentSection from './Components/CommentSection/CommentSection';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
// import heart from './images/instaheart.png';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <SearchBar />
          </header>
        </div>
        <div>
          <PostContainer p={this.state.dummyData} />
        </div>
        ))}
      </div>
    );
  }
}

PostContainer.propTypes = {
  p: PropTypes.oneOf({
    username: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default App;
