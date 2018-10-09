import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      searchString: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        postData: dummyData,
      })
    }, 300)
  }  

  searchHandler = event => {
    event.preventDefault();
    if (event.target.value !== '') {
      this.setState({
        [event.target.name]:event.target.value,
      })
    }
    else {
      this.setState({
        [event.target.name]: '',
      })
    }
  }

  render() {
    if (!this.state.postData.length) {
      return <h4 id="loader">Loading your feed...</h4>;
    }
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler}/>
        <Posts searchString={this.state.searchString} postData={this.state.postData}/>
      </div>
    );
  }
}

export default App;