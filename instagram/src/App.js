import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      commentInput: '',
      searchInput: '',
      stored: [],
    };
  }
  componentDidMount(){
    this.setState({
      data: dummyData,
    });
  }

  handleCommentChange = e => {
    this.setState({
      commentInput: e.target.value,
    });
  }
  handleNewComment = (id) => {
    if(!this.state.commentInput){
      alert('Please add a comment!');
      return;
    }
    this.setState((prevState) => {
      const newData = [...prevState.data];
      newData.forEach(x => {
        if (x.imageUrl === id){
          x.comments.push({
            username: 'Test User',
            text: prevState.commentInput,
            id: Date.now(),
          });
        }
      });
      return {
        data: newData,
        commentInput: '',
      }
    });
  }
  handleSearch = () => {
    this.setState((prevState) => {
      const prevData = [...prevState.data];
      const prevStored = [...prevState.stored];
      const newData = [];
      const newStored = [];
      prevData.forEach((x, y) => {
        if (new RegExp(prevState.searchInput, 'gi').test(x.username)){
          newData.push(x);
        } else newStored.push(x);
      });
      prevStored.forEach((x, y) => {
        if (new RegExp(prevState.searchInput, 'gi').test(x.username)){
          newData.push(x);
        } else newStored.push(x);
      });
    
      return {
        data: newData.sort((a, b) => moment(b.timestamp,'MMMM Do YYYY, hh:mm:ss a').valueOf() 
        - moment(a.timestamp,'MMMM Do YYYY, hh:mm:ss a').valueOf()),
        stored: newStored,
        searchInput: '',
      }
    });
  }
  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  }
  handleLike = (url) => {
    this.setState((prevState) => {
      const newData = prevState.data;
      newData.forEach(x => {
        if (x.imageUrl === url){
          x.likes++;
        }
      });
      return {
        data: newData,
      };
    });
  }
  render() {
    return (
      <div className="app">
        <SearchBar
          onSearch={this.handleSearch}
          onSearchInput={this.handleSearchInput}
        />
        {this.state.data.map(postData => (
          <PostContainer
            key={postData.imageUrl} 
            data={postData}
            commentValue={this.state.commentInput}
            onCommentChange={this.handleCommentChange}
            onAddComment={this.handleNewComment}
            handleLike={this.handleLike}
          />
          )
        )}
      </div>
    );
  }
}

export default App;
