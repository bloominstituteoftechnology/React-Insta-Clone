import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: ''
    }
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    let filteredData = this.state.dummyData.filter(data => data.username.indexOf(this.state.search) !== -1)
    return (
      <div className="App">
        <SearchBar search={this.state.search} onInputChange={this.onInputChange}/>
        {filteredData.map((data,i) => <PostContainer key={i} data={data} comment={this.state.comment} />)}
      </div>
    );
  }
}

export default App;
