import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      displayPosts: [],
      likedPosts: {},
    }
  }

  componentDidMount() {
      const data = [];
      dummyData.forEach(postData => {
        data.push(postData);
      });

      const likedPosts = {};
      dummyData.forEach(postData => {
        const key = postData.timestamp;
        likedPosts[key] = false;
      })
      console.log('componentDidMount');

      this.setState({
        data,
        likedPosts,
      });
  }

  searchResults() {

  }

  filterResults(event) {
    const query = event.target.value;

    const filteredPosts = [];
    this.state.data.forEach(post => {
      filteredPosts.push(post);
    });

    const displayPosts = filteredPosts.filter(post => post.username.includes(query));

    if (query) {
      this.setState({
        displayPosts,
      });
    } else {
      this.setState({
        displayPosts: [],
      });
    }

    this.forceUpdate();
  }

  resetDisplay() {

  }

  updateLike(timestamp) {
    const likedPosts = Object.assign({}, this.state.likedPosts);
    likedPosts[timestamp] = !likedPosts[timestamp];

    this.updateNumberOfLikes(timestamp, likedPosts[timestamp]);

    this.setState( { likedPosts } );
  }

  updateNumberOfLikes(timestamp, likeStatus) {
    let likedPost = {};

    this.state.data.forEach(post => {
      if (post.timestamp === timestamp) likedPost = Object.assign({}, post);
    });
    
    if (likeStatus) likedPost.likes++;
    else likedPost.likes--;

    const data = [];

    this.state.data.forEach(post => {
      if (post.timestamp === timestamp) {
        data.push(likedPost);
      }
      else {
        data.push(post);
      }
    });

    this.setState({
      data,
    })
  }

  updateComments(id, comments) {
    const timestamp = id;
    let updatedPost = {};
    const data = [];

    this.state.data.forEach(post => {
      if (post.timestamp === timestamp) {
        updatedPost = Object.assign({}, post);
        updatedPost.comments = comments;
        console.log(updatedPost)
        data.push(updatedPost);
      } else {
        data.push(post);
      }
    });

    this.setState({
      data,
    });

  }

  formatTimestamp(post) {
    // formatting: http://momentjs.com/docs/#/parsing/
    // return 20180101T080910
    //        2018 01 01 T 08 09 10
    //        YYYY MM DD T HH MM SS
    // post timestamp = "July 17th, 2017, 12:42:40 pm"

    let formattedTimestamp = '';
    const timestamp = post.timestamp;
    const months = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12',
    }

    const timeElementsArray = timestamp.split(/[' ']/).filter(elem => elem !== ' ');

    formattedTimestamp += timeElementsArray[2].slice(0,4);
    formattedTimestamp += months[timeElementsArray[0]];
    // formattedTimestamp += ;
    console.log(timestamp)

    return '20180112T010000'
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar searchResults={this.searchResults.bind(this)}/>
          <FilterBar filterResults={this.filterResults.bind(this)}/>
        </header>
        <div className="PostsContainer">
          {this.state.displayPosts.length === 0 ? this.state.data.map((post, i) => {
            const timestampFormatted = this.formatTimestamp(post);
            return (
              <PostContainer
                key={i}
                postData={post}
                isLiked={this.state.likedPosts[post.timestamp]}
                likePost={this.updateLike.bind(this)}
                updateComments={this.updateComments.bind(this)}
                timestampFormatted={timestampFormatted}
              />
            )
          }) : this.state.displayPosts.map((post, i) => {
            const timestampFormatted = this.formatTimestamp(post);
            return (
              <PostContainer
                key={i}
                postData={post}
                isLiked={this.state.likedPosts[post.timestamp]}
                likePost={this.updateLike.bind(this)}
                updateComments={this.updateComments.bind(this)}
                timestampFormatted={timestampFormatted}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
