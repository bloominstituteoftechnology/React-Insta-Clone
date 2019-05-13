import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/Searchbar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: dummyData
    }
  }

  render(){
  return (
    <div className="App">
      <PostContainer data={this.state.data}/>
      <SearchBar />
    </div>
  );
}
}

export default App;
