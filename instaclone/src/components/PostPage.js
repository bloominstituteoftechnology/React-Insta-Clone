import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PostContainer from "./PostContainer"
import dummydata from "./dumyData";
import "../App.css"
class PostPage extends Component {
  constructor (props){
    super(props);
    this.state ={
        data : [],
        message : "",
    }
    this.title = "Instagram"
  }

  componentDidMount (){
    this.setState({
      data : dummydata
    })
  }


  handleIncrementCount = ()=>{
    this.setState (prevState=>{
      return {
        countLikes : prevState.countLikes +1
      }
    })
  }
  render() {
    return (
      <div className="App">
      {this.state.message}
        <header>
            <SearchBar title={this.title}/>
            <div className="container-second">
              <PostContainer 
              incrementCount ={this.handleIncrementCount}
              className="container"
              data={this.state.data} 
                />
              </div>

        </header>

      </div>
    );
  }
}

export default PostPage;
