import React, { Component } from 'react';
import logo from './logo.svg';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      search: ''
    };
  }
  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ data: dummyData, filteredData: dummyData });

    console.log("didMount", this.state)
  }

  handleNewItem = event => {
    this.setState({ [event.target.name]: event.target.value })
    let query = this.state.search;
    let postArray = [...this.state.data];
    console.log(postArray[0].username)
    postArray = postArray.filter(element => element.username.includes(query));
    this.setState({ filteredData: postArray })
  }

  filterPosts = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <SearchBar xor={dummyData} filter={this.filterPosts} handle={this.handleNewItem} />
        {this.state.filteredData.map((element) => {
          console.log(element)
          return <PostContainer data={element} />
        })}
      </div>
    );
  }
}

export default App;
