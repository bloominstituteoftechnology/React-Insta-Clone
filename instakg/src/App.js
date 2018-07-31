import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import dummyData from './dummy-data';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:dummyData,
      currentUser:'You'
    }
  }
  componentDidMount(){
  }
  addComment(){

  }
  handleKeyPress = (event) => {
    const dataImport = this.state.data;
    if(event.key === 'Enter'){
      console.log(event.target.value)
       if (event.target.value === ''){
         return;
       }
      dataImport.map((element,index)=>{
        if(event.target.id === index.toString()){
           element.comments.push({
            username: this.state.currentUser,
            text : event.target.value})
            return element;
        }
        else{
          return element;
        }
          
      })
      event.target.value = '';
    this.setState({ data: dataImport },()=>{
      
    });
    }
  }
  loadPosts(){
  return this.state.data.map((element,index) => {
        return <PostContainer methods={this.handleKeyPress} key={index} id={index} data={element} />
      });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="postsHolder">
        {this.loadPosts()}
        </div>
      </div>
    );
  }
}

export default App;
