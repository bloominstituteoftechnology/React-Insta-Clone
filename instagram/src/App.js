import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: '',
      newComment: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  commentChangeHandler = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  commentSubmitHandler = (e, index) => {
    e.preventDefault();
    let newCom = {};
    newCom.jessica = this.state.newComment;
    let currentData = this.state.data;
    currentData[index].comments.push(newCom);
    this.setState({data: currentData,
                   newComment: ''});
    // console.log(this.state.data[index].comments);
  }

  componentDidMount = () => {
    this.setState({
      data:dummyData,
      searchInput: '',
      newComment: ''
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchInput} onChange={this.changeHandler}/>
        {this.state.data.map((user,index) => {
          if (!user.username.toLowerCase().includes(this.state.searchInput.toLowerCase())){
            return;
          }
          return <PostContainer 
                      onSubmitHandler={this.commentSubmitHandler} 
                      index={index} 
                      onChangeHandler={this.commentChangeHandler} 
                      key={`user${index}`} 
                      userData = {user}
                      commentValue={this.state.newComment} />
        })}
      </div>
    );
  }
}

export default App;
