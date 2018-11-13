import React, { Component } from 'react';
import './App.scss';

import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  constructor() {

    super();

    this.state = {

      data: []

    }

  }

  componentDidMount() {

    this.setState({data: dummyData});

  }

  addComment = (comment, postUrl) => {

    let index = this.state.data.findIndex(item => item.imageUrl === postUrl);
    const newData = this.state.data;
    newData[index].comments.push(comment);

    this.setState({data: newData});

  }

  render() {
    return (
      <div className='app'>

        <SearchBar />

        {this.state.data.map(data => <PostContainer key={data.imageUrl} data={data} addComment={this.addComment} />)}

      </div>
    );
  }
}

export default App;
