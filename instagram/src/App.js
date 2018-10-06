import React, { Component } from 'react';
import dummyData from "./components/data";
import Search from "./components/SearchBar/Search";
import Posts from "./components/PostContainer/Posts";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data :[],
      query:''
    }
  }

  componentDidMount(){
    this.setState(
    { 
     data :dummyData,
    }
  )
}

  handleChange =(event)=>{
    this.setState({
      query:event.target.value
    })
  }

  handleReload = () => {
    this.setState({
      data:dummyData
    })
  }

  handleSearch = (event)=>{
    event.preventDefault();
    const arr = this.state.data.filter(data => {
      return data.username === this.state.query
    })
    this.setState({
      query:'',
      data: arr
    })
  }

 

  render() {
    if(this.state.data.length === 0){
     return (
       <div className="Header-section">
        <Search value={this.state.query} reload={this.handleReload} change={this.handleChange} submit={this.handleSearch}/>
         <div className="container">
          <div className="notice">
            <p> username doesn't exist </p>
          </div>
        </div>
       </div>
      );
    }
    return (
      <div className ="Header-section">
        <Search value={this.state.query} change={this.handleChange} submit={this.handleSearch}/>
        <Posts posts = {this.state.data}/>
      </div>
    );
  }
}

export default App;
