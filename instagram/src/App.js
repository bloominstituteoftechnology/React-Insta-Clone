import React, { Component } from 'react';
import dummyData from './components/dummy-data'
import SearchBar from './components/Searchbar/SearchBar';
import PostContainer from "./components/PostContainer/PostContainer";
import './App.css';



export default class App extends Component {
  constructor () {
    super();
    this.state = {
      dummyData: [],
      search: ''
    };
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState({dummyData})
    }, 1000)
  }

  handleSearch = event => {
    this.setState({searchInfo: event.target.value});
  };

  searchDemPosts = event => {
    event.preventDefault();
    if(this.state.searchInfo) {
      this.setState({
        dummyData: this.state.dummyData.filter(post => {
          if(post.username.includes(this.state.searchInfo)) return post;
        })

      })} else this.componentDidMount();

  };

  render() {

    if(!this.state.dummyData) {
      return <div className = 'loadingMSG'> loading...</div>
    }

    return (
      <div className='App-container'>
        <SearchBar
          handleSearch = {this.handleSearch}
          searchDemPosts = {this.searchDemPosts}
          searchInfo = {this.state.searchInfo}
        />

        <PostContainer data = {this.state.dummyData}/>

      </div>

    );

  }
}

