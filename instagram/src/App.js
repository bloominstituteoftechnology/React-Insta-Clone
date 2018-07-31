import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    this.likeIncrement = this.likeIncrement.bind(this);
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  likeIncrement(index) {
    // event.preventDefault();
    console.log(this.state.data[index].liked);
    this.setState({[this.state.data[index].likes]: [this.state.data[index].likes++], [this.state.data[index].liked]: true})
    console.log(this.state.data[index].liked);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((item, index) => <PostContainer post={item} key={item.timestamp} index={index} like={this.likeIncrement} liked={item.liked} />)}
      </div>
    );
  }
}

export default App;
