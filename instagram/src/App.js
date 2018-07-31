import React, { Component } from 'react';
import './css/index.css';
import DummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      displayData: [],
      searchValue: '',
    }
  }

  valueHandler = e => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  searchHandler = e => {
    e.preventDefault();
    console.log('searchHandler envoked')
    const searchArray = this.state.data.slice();
    const newSearchArray = searchArray.filter( post => post.username.includes(this.state.searchValue));
    this.setState({
      displayData: newSearchArray,
      searchValue: '',
    })
  }

  componentDidMount(){
    this.setState({
      data: DummyData,
      displayData: DummyData,
    })
  }

  render() {
    return (
      <div className="app">
        <SearchBar searchHandler={this.searchHandler}
        searchValue={this.state.searchValue}
        valueHandler={this.valueHandler}
      />
        <div className="all-posts">
          {this.state.displayData.map( (post) => {
              return <PostContainer
                key={post.timestamp}
                data={post}/>
          })}
        </div>


      </div>
    );
  }
}

export default App;
