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
    this.setState((prevState) => {
      const newData = prevState.data;
      newData[index].comments = newData[index].comments.concat({ username: 'Test User', text: value, id: Date.now() });
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
        {this.state.data.map((postData, index) => (
          <PostContainer
            key={postData.imageUrl} 
            data={postData}
            index={index}
            onNewComment={this.addNewComment}
          />
          )
        )}
      </div>
    );
  }
}

export default App;
