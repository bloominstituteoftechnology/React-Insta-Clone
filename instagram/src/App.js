import React, { Component } from 'react';

import './App.css';
import SearchBar from './Components/SearchBar'
import PostInfo from './Components/PostInfo'
import dummyData from './dummy-data'
import Authenticate from './Components/Authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {
      post:[],
      search:[],

    }
  }

  

  componentDidMount() {
    this.setState({post: dummyData
                    })
    
  }


  searchHandler = e => {
    const posts = this.state.post.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ search: posts });
  };
    
  

  render() {
    return(
      <div className="App">
      <SearchBar  searchPost={this.searchHandler}/>
      <PostInfo post={this.state.search.length > 0
              ? this.state.search
              : this.state.post} />

      
      
      </div>
    );
  }
}

export default Authenticate(App);
