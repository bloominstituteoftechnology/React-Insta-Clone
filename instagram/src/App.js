import React, { Component } from 'react';
import './App.scss';

import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  constructor() {

    super();

    this.state = {

      data: [],
      displayedData: []

    }

  }

  componentDidMount() {

    this.setState({data: dummyData, displayedData: dummyData});

  }

  addComment = (comment, postUrl) => {

    const index = this.state.data.findIndex(item => item.imageUrl === postUrl);
    const newData = this.state.data;
    newData[index].comments.push(comment);

    this.setState({data: newData});

  }

  addLike = postUrl => {

    const index = this.state.data.findIndex(item => item.imageUrl === postUrl);
    const newData = this.state.data;
    newData[index].likes++;

    this.setState({data: newData});

  }

  search = searchTerm => {

    this.setState({displayedData: this.state.data.filter(item => item.username.includes(searchTerm))});

  }

  render() {
    return (
      <div className='app'>

        <SearchBar searchFunc={this.search}/>

        {this.state.displayedData.map(data => <PostContainer key={data.imageUrl} data={data} addLike={this.addLike} addComment={this.addComment} />)}

      </div>
    );
  }
}

export default App;
