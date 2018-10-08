import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/Search';
import Posts from './components/PostContainer/Posts';
import data from './dummy-data'

class App extends Component {

  state = {
    data: [],
    filter: []
  }

  componentDidMount() {
    this.setState({data: data})
  }

  filteredSearchHandler = e => {
    const posts = this.state.data.filter(post => {
    if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({filter: posts})
  }
  render() {
    return (
      <div className="App">
        <Search search={this.filteredSearchHandler} />
        
        <Posts data = {this.state.filter.length > 0
        ? this.state.filter
        : this.state.data}/>
      </div>
    );
  }
}

export default App;
