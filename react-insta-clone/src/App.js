import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';
import dummyData from "./dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    }
  }

  componentDidMount() {
   console.log("CDM invoked");
 }
  render() {
    return (<div>

      <SearchBar/>
      {this.state.dummyData.map((data, index) => (<PostContainer key={index} username={data.username} avatar={data.thumbnailUrl} image={data.imageUrl} />))}
      {this.state.dummyData.map((data, index) => (<CommentSection key={index}  caption={data.comments.username}/>))}


    </div>);
  }
}

export default App;
