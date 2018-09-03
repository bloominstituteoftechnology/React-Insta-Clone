import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import SearchBar from './components/SearchBar/SearchBar';

import './index.css';

class App extends Component {
	constructor(){
	super();
    // console.log("constructor invoked", this);
		this.state = {
			posts: [],
			filteredPosts: [],
			inputText: "",
		}; 
	}

//example filter
// const myArr = [1,2,3];
// const oddItems = myArr.filter((number) => number % 2 !== 0);
// console.log(oddItems);
// string includes maybe regex
// take new array and set on state
// pass regular posts or filtered posts

//example turnary operator
// const age = 21;
// condition, if condition, else other condition

//this.state {
// someValue: false, p will not mount, true will mount
//}

// age < 21 ? console.log('sorry not old enough') : console.log("drink up!");
// {this.state.someValue ? <p>heres the value</p> : null}


	handleInput = event => {
    this.setState({
      inputText: event.target.value,
    });
  };

  componentDidMount(){
    // console.log("CDM invoked");
    //only invoked once ever 
    //after the render method mounts the jsx to the dom
    //used for any Asylnc operations
    //adding any Dom event listners needed
    //setState();
    this.setState({
      posts: dummyData,
    })
  }

  render() {
    // console.log("render invoked", this.state);
    return (
      <div className="container">
      	<SearchBar handleInput={this.handleInput} />
        <PostList 
        	dataList={this.state.posts} 
	      />
      </div>
    );
  }
}

export default App;



