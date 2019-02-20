import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';

import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      dummy: []
    };
  };

  componentDidMount(){
    console.log('mounted')
    this.setState({ dummy: dummyData})
  };

  addComment = (comment,id) =>{ console.log(comment)
  ; this.setState(prevState => {
    return prevState.data[id].comments.push(comment);
})
  
  }

  render() {
    return (
      <div className="app">
        <header>
        <SearchBar />
        </header>
        <PostContainer dummy={this.state.dummy} addComment={this.addComment} />
      </div>
            );
            }
                                                      };
               
export default App;
