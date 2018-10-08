import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from "./dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    }
  }
  render() {
    return (<div>

      <SearchBar/> {this.state.dummyData.map((data, index) => (<PostContainer key={index} username={data.username} avatar={data.thumbnailUrl} image={data.imageUrl} caption={data.comments}/>))}

    </div>);
  }
}

export default App;
