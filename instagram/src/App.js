import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

import dummyData from './dummy-data';
import Header from './components/Header';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData,
      search: '',
      newComments: ''
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header onChange={this.onInputChange} />
        {this.state.dummyData.map(data => {
          return (
            <PostContainer
              key={data.id}
              id={data.id}
              img={data.imageUrl}
              username={data.username}
              date={data.timestamp}
              likes={data.likes}
              comments={data.comments}
              thumbnail={data.thumbnailUrl}
              onChange={this.onInputChange}
            />
          );
        })}
      </div>
    );
  }
}

Header.propTypes = {
  onChange: PropTypes.func
};

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
};

export default App;
