import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    }
  }

  changeFilter = () => {
    // console.log(this.refs.searchBar.state.searchTerm);
    this.setState({filter: this.refs.searchBar.state.searchTerm});
    // console.log(this.state.filter);
  }

  componentDidMount() {
    // this.changeFilter();
  }

  render() {
    return (
      <div className="App-Wrapper">
      <div className="App">
        <SearchBar ref="searchBar" onChange={this.changeFilter}/>
        <div className="separateTop">
          {dummyData.map((datum, index) => {
            let returnitem;

            let username = datum.username.split('');

            let filter = this.state.filter.split('');

            let length = filter.length;

            let sliced = username.slice(0, length);

            console.log(sliced.join(''), filter.join(''));

            // if (datum.username === this.state.filter) {
            if (sliced.join('') === filter.join('')) {
              returnitem = (<PostContainer key={index} datum={datum} id={index}/>)
            } 
            if (this.state.filter === '') {
              returnitem = (<PostContainer key={index} datum={datum} id={index}/>)
              // console.log(returnitem)
            }
            return returnitem;
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
