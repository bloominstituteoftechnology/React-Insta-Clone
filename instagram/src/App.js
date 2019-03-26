import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import moment from 'moment';

import dummyData from './dummy-data';
import Header from './components/Header';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: '',
      text: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dummyData
      });
    }, 2500);
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddComment = (e, id) => {
    e.preventDefault();

    const newComment = {
      id: Date.now().toString(),
      text: this.state.text,
      username: 'Guillaume',
      timeStamp: moment()
        .startOf('hour')
        .fromNow()
    };

    this.setState({
      dummyData: this.state.dummyData.map(data => {
        if (data.id === id) {
          return {...data, comments: [...data.comments, newComment]};
        }
        return data;
      }),
      text: ''
    });
  };

  onSearchFormSubmit = e => {
    e.preventDefault();

    // this.setState({
    //   dummyData: this.state.dummyData.map(data => {
    //     if (id === data.id) {
    //       return this.setState({
    //         comments: [...this.state.dummyData, newComment]
    //       });
    //     }
    //   }),
    //   search: ''
    // });
  };

  render() {
    return (
      <div className="App">
        <Header
          onChange={this.onInputChange}
          onSubmit={this.onSearchFormSubmit}
        />
        {this.state.dummyData.length === 0 ? (
          <div className="spinner">
            <Loader type="Oval" color="#2626265c" height="60" width="60" />
          </div>
        ) : (
          this.state.dummyData.map(data => {
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
                onSubmit={this.handleAddComment}
                text={this.state.text}
              />
            );
          })
        )}
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
