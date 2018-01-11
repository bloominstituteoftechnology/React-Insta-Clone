import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }

    this.filterResults.bind(this);
  }

  componentDidMount() {
    // this.setState = {
    //   data: dummyData,
    // }
  }

  filterResults(event) {
    const query = event.target.value;
    const data = dummyData.slice(0);
    if (query) {
      this.setState({
        data: data.filter((post) => post.username.includes(query)),
      });
    } else {
      this.setState({
        data: dummyData,
      });
    }
    
  }

  render() {
    return (
      <div className="App">
        <SearchBar filterResults={this.filterResults.bind(this)}/>
        <div className="PostsContainer">
          {this.state.data.map((post, i) => {
            return <PostContainer key={i} postData={post} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
