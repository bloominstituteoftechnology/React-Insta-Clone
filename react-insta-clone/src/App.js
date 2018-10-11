import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import PostsPage from './components/PostContainer';
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

      {this.state.myData.map((data, index) => (<PostContainer key={index} username={data.username} likes={data.likes} avatar={data.thumbnailUrl} image={data.imageUrl} caption={data.comments}/>))}
    {/* <PostsPage /> */}

    </div>);
  }
}

export default App;
