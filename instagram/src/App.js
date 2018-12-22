import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(data => <PostContainer data={data} key={data.username}/>)}
      </div>
    );
  }
}

export default App;
