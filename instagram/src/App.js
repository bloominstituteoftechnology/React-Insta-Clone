import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

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
    for (let key in this.state){
      if (localStorage.hasOwnProperty(key)){
        this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
      } else if (key === 'data') this.setState({ data: dummyData });
    }
    window.addEventListener('beforeunload', this.handleLocalStorage);
  }
  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.handleLocalStorage);
  }
  handleLocalStorage = () => {
    for (let key in this.state){
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
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
    console.log(this.state);
    this.setState({
      searchInput: e.target.value,
    });
  }
  addNewComment = (value, index) => {
    if (!value){
      alert('Please enter a comment');
      return;
    }
    this.setState((prevState) => {
      const newData = prevState.data;
      newData[index].comments = newData[index].comments.concat({ username: 'Test User', text: value, id: Date.now() });
      return {
        data: newData,
      };
    });
  }
  deleteComment = (id, index) => {
    this.setState((prevState) => {
    const newData = prevState.data;
    newData[index].comments = newData[index].comments.filter(x => x.id !== id);
      return {
        data: newData,
      };
    }, () => {
      localStorage.removeItem('data');
    });
  }
  render() {
    return (
      <div className="app">
        <SearchBar
          onSearch={this.handleSearch}
          onSearchInput={this.handleSearchInput}
        />
        <PostsPage data={this.state.data}
        onNewComment={this.addNewComment}
        onDeleteComment={this.deleteComment} />
      </div>
    );
  }
}

export default Authenticate(App);
