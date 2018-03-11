import React, { Component } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import InstagramBrand from './InstagramBrand.png'; 
import './App.css';
import { PostContainer } from './components/PostContainer/PostContainer';
import { Comments } from './components/CommentSection/CommentSection';
import { dummyData } from './dummy-data';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
        };
  }
  componentDidMount() {
    this.setState({Posts: dummyData});
  }
 
  render() {
    return (
      <div className="App">
      <div className="sticky-top">
        <SearchBar headerImage={InstagramBrand}/>
        </div>
        {dummyData.map((post, i) => <PostContainer key={i} dummyData={post} />)}
      </div>
    );
  }
}

export default App;
