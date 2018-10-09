import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer'
import { EventEmitter } from './events.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      value: ''
    }
    EventEmitter.subscribe('addComment', (event) => this.addComment(event))
    EventEmitter.subscribe('handleChange', (event) => this.handleChange(event))
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }
  
  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  addComment = event => {
    event.preventDefault();
    const copyState = this.state.data.map((post, i) => {
      if (i.toString() === event.target.id) {
        post.comments.push({username: 'user', text: this.state.value});
        return post;
      } else {
        return post;
      }
    })  
    this.setState({
      data: copyState
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.data.map((data, index) => {
          return (
            <PostContainer data={data} index={index}/>
          )
        })}
      </div>
    );
  }
}

export default App;
