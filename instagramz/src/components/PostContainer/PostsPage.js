import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

import SearchBar from './../SearchBar/SearchBar';
import dummyData from './../../dummy-data';
import PostContainer from './PostContainer';




const contentStuff = dummyData;

class PostPage extends Component {
  constructor() {
    super();

    this.state = {
        content: [],
        search: 'everything'
      }
    

  }

  componentDidMount() {
    
    this.setState (
      {
        content: dummyData,
      }
    )

    console.log(this.state.content)
  }


  searching = (event, thing) => {
    console.log(thing)
    event.preventDefault();
    this.setState (
      {
        search: thing
      }
    )
   
  }


  filter = info => {
    const data = this.state.content;
    //const result = data.filter(search => search.username === this.state.search);
    const result = data.filter(search => search.username.includes(this.state.search));

    if (this.state.search == 'everything'){
      return data;
    }
    else {
      return result;
    }

  } 

  render() {
    return (
      <div className="App">
      <SearchBar searching={this.searching}/>
      <PostContainer content={this.filter()} />
            
      <h1>Hello React Thingy</h1>
      
     

      </div>
    );
    
  }
}

dummyData.propTypes = {
  dummyData: PropTypes.array
};

export default PostPage;