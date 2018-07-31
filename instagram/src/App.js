import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { Container} from 'reactstrap';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPosts: []
    };
  }
  componentDidMount(){
    this.setState({ dummyData: dummyData });
  }
  render() {
    return (
      <Container className="App">
        <SearchBar />
        {this.state.dummyData.map(post => <PostContainer key={post.timestamp} postProp={post} />)}
      </Container>
    );
  }
}



export default App;
