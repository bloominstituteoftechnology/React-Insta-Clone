import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      filtered: [],
    };
  }

  onSearch = (e) => {
    alert('search');
    //let data = this.state.data.slice();
    //filtered = data.filter(obj => (e.target.search.value === obj.username));
    //this.setState({filtered});
  }
  
  componentDidMount() {
    const data = dummyData;
    this.setState({data});
  }
  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch}/>
        {
          this.state.data.map(obj => {
            return (
              <PostContainer 
                key={obj.username}
                post={obj}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
