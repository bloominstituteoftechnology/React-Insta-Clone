import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import PostsPage from './components/PostContainer';
import CommentSection from './components/CommentSection';
import dummyData from "./dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: dummyData
    }
  }

  componentDidMount() {
   console.log("CDM invoked");
 }
  render() {
    return (<div>

      <SearchBar/>
      {this.state.myData.map((data, index) => (<PostContainer key={index} username={data.username} avatar={data.thumbnailUrl} image={data.imageUrl} caption={data.comments}/>))}
      {/* {this.state.myData.map((data, index) => (<CommentSection key={index}  caption={data.comments}/>))} */}



    </div>);
  }
}

export default App;
