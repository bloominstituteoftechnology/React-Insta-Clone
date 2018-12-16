import React, { Component } from 'react';
import moment from 'moment';
import Fuse from 'fuse.js';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostsPage from './components/PostsPage';
import Authenticate from './components/Authenticate';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      commentInput: '',
      searchInput: '',
      allData: [],
      username: '',
    };
  }
  componentDidMount(){
    for (let key in this.state){
      if (localStorage.hasOwnProperty(key)){
        this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
      } else if (key === 'data') this.setState({ data: dummyData });
    }
    this.setState( { allData: dummyData } );
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
    const options = {
      threshold: 0.5,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'username'
    ]
    };
    const fuse = new Fuse(this.state.allData, options);
    this.setState( { data: fuse.search(this.state.searchInput).sort((a, b) => moment(b.timestamp,'MMMM Do YYYY, hh:mm:ss a').valueOf() 
    - moment(a.timestamp,'MMMM Do YYYY, hh:mm:ss a').valueOf()) } );
  }
  handleSearchInput = (e) => {
    console.log(this.state);
    this.setState({
      searchInput: e.target.value,
    }, this.handleSearch());
  }
  addNewComment = (value, index) => {
    if (!value){
      alert('Please enter a comment');
      return;
    }
    this.setState((prevState) => {
      const newData = prevState.data;
      newData[index].comments = newData[index].comments.concat({ username: this.state.username, text: value, id: Date.now() });
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
  logout = () => { // Re-sorting data to avoid search results persisting after logout, but changes material right before page reload.
    localStorage.removeItem('username');
    this.setState((prevState) => {
      return {
        username: null,
        data: prevState.allData,
      };
    }, () => window.location.reload());
  }
  render() {
    return (
      <div className="app">
        <SearchBar
          onSearchInput={this.handleSearchInput}
          onLogout={this.logout}
        />
        <PostsPage data={this.state.data}
        onNewComment={this.addNewComment}
        onDeleteComment={this.deleteComment} />
      </div>
    );
  }
}

export default Authenticate(App);
