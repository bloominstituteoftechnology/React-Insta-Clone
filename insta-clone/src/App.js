import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
  constructor(){
    super();
    this.state = {
      newArray: [],
      searchInput: "",
      copyArray: []
    }
  }

  componentDidMount() {
    this.setState({
      newArray:dummyData,
      copyArray:dummyData
    });
  }

  changeHandler = event =>{
    this.setState({
      searchInput:event.targert.value
    })
  }
  searchPost = event => {
    event.preventDefault();
    const toFilter = this.state.newArray.filter(filtered => filtered.username === this.state.searchInput );
    this.setState({copyArray: toFilter, searchInput: ""});
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer onChange={this.changeHandler} onSubmit={this.searchPost}  />
        {this.state.searchInput ? this.state.copyArray.map(item => {
          return <PostContainer  key={item.text} obj={item} />
        }) : this.state.newArray.map(item => {
          return <PostContainer  key={item.text} obj={item} />
        })}
      </div>
    );
  }
}



export default App;
