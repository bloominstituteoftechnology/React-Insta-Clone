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
      text: '',
      filteredData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dummyData,
        filteredData: Array.from(dummyData)
      });
    }, 2500);

    const json = localStorage.getItem('filteredData');
    const data = JSON.parse(json);

    if (data) {
      this.setState(() => ({
        dummyData
      }));
    }
  }

  componentWillUnmount(prevProps, prevState) {
    if (prevState.filteredData.length !== this.state.filteredData.length) {
      const json = JSON.stringify(this.state.filteredData);
      localStorage.setItem('filteredData', json);
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    //Find post that contains the username from the search input
    if (e.target.name === 'search') {
      this.setState({
        filteredData: this.state.dummyData.filter(data => {
          return data.username.includes(e.target.value);
        })
      });
    }
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
      filteredData: this.state.filteredData.map(data => {
        if (data.id === id) {
          return {...data, comments: [...data.comments, newComment]};
        }
        return data;
      }),
      text: ''
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          onChange={this.onInputChange}
          onSubmit={this.onSearchFormSubmit}
          search={this.state.search}
        />
        {this.state.dummyData.length === 0 ? (
          <div className="spinner">
            <Loader type="Oval" color="#262626" height="60" width="60" />
          </div>
        ) : (
          this.state.filteredData.map(data => {
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
