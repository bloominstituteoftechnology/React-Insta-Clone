import React, { Component } from 'react';
// import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const mainStyles = {
  width: '600px',
  margin: '0 auto'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      'data': [],
      'newComment': []
    };
  }
  componentDidMount() {
    console.log('CDM Called!');
    this.setState({ 'data': dummyData });
  }


  handleAddComment = (e, i) => {
    const newComment = this.state.newComment;
    console.log(newComment);
    newComment[i] = e.target.value;
    this.setState({ 'newComment': newComment });
  };

  handleSubmitComment = index => {
    const { data } = this.state;
    data[index].comments.push({ username: 'Guest', text: this.state.newComment[index] });
    const newComment = this.state.newComment;
    newComment[index] = '';
    this.setState({ data, newComment: newComment });
  };

  render() {
    return (
      <div style={mainStyles} className="App">
        <SearchBar />
        {this.state.data.map((post, i) => <PostContainer
          change={(e) => this.handleAddComment(e, i)}
          // change={(e) => this.handleAddComment(e, i)}
          submit={() => this.handleSubmitComment(i)}
          data={post}
          value={this.state.newComment[i]} />)}
        {/* <PostContainer {...this.state} /> */}
        {/* <SearchBar {...this.state} /> */}
      </div>
    );
  }
}

export default App;