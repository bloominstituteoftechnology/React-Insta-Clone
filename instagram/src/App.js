import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchContainer from './components/SearchBar/SeachContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      text: '',
      search: '',
      likes: 0
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
    console.log(dummyData[0].likes)
  }

  liked = (e) => {
    
  }

  startSearch = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  search = e => {
    e.preventDeafult()
    this.state.data.comments.filter((name) => {
      return <div>{name.usernmae.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1}</div>;
    })
  }

  render() {
    
    return (
      <div>
        <SearchContainer search={this.state.search} startSearch={this.startSearch}/>
        <PostContainer user={this.state.data}  liked={this.liked} text={this.state.text} likes={this.state.likes}/>
      </div>
    );
  }
}

export default App;
