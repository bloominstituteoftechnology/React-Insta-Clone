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
      searchedInput: "",
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
      searchedInput:event.target.value,
      
    }, this.searchPost())
  }
  searchPost = event => {
    const toFilter = this.state.newArray.filter(filtered => filtered.username.toLowerCase().includes(this.state.searchedInput.toLowerCase()) );
    this.setState({copyArray: toFilter, searchedInput: ""});
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer onChange={this.changeHandler} value={this.searchedInput}  />
        {this.state.searchedInput.length ? this.state.copyArray.map(item => {
          return <PostContainer  key={item.text} obj={item} />
        }) : this.state.newArray.map(item => {
          return <PostContainer  key={item.timestamp} obj={item} />
        })}
      </div>
    );
  }
}



export default App;
