import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comment: '',
      search: ''
    }
  }



  addNewComment = (event) => {
    console.log('this');
    let newComment = {text: this.state.comment, username: 'user'}; 
    console.log(newComment);
    let newData = this.state.data.slice(); 
    let commentArr= newData.map(item => {
      return item[0].comments;
    })
    commentArr.push(newComment);
    this.setState({data: newData}); 
    event.preventDefault();
  }

  likePost = (i) => {
    let newData = this.state.data.slice();
    newData[i].likes += 1;
    this.setState({data: newData});
  }

  handleComment = event => {
    this.setState({comment: event.target.value});
    event.preventDefault;
  }

  handleChange = event => {
      this.setState({search: event.target.value})
  }
  searchFunc = event => {
    console.log('this');
    const updatedList = this.state.data.slice;
    updatedList.filter(item => {
      return item.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
      console.log(updatedList);
    this.setState({search: updatedList});
    event.preventDefault();
  }

  componentDidMount() {
    this.setState({
      data: dummyData,  
    });
  }


  render() {
    return (
      <div className="App">
        <header className="searchheader">
          <SearchBar  handleChange={this.handleChange} searchFunction={this.searchFunc} search={this.state.search}/>
        </header>
        
        <PostContainer data={this.state.data} comment={this.state.comment} handleComment={this.handleComment} addComment={this.addNewComment} likePost={this.likePost} />
      </div>
    );
  }
}

export default App;
