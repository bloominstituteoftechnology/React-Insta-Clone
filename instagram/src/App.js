import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer'; 
import AllPostContainers from './Components/PostContainer/AllPostContainers';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      data: [], 
      filteredData : [], 
      searchValue: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  
  valueHandler = (event) => {
    const value = event.target.value;
    this.setState({
      searchValue : value
    })
  }
  
  submitSearchHandler = (event) => {
    event.preventDefault(); 
    const users = this.state.data.filter(post => {
        if(post.username.includes(this.state.searchValue)){
          return post; 
        }
      }); 
      this.setState({
        filteredData: users,
        searchValue: ''
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBar change= {this.valueHandler} submit = {this.submitSearchHandler}/>
        <AllPostContainers 
        data ={
          this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data
        } />
      </div>
    );
  }
}

export default App;
