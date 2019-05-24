import React from 'react';
// import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';
import PropTypes from 'prop-types'

class App extends React.Component {

  state = { data: dummyData


  }

  render(){
     console.log(this.state.data)

  return (
    <div className="App">
      <SearchBar/>
      <PostContainer
      list = {this.state.data }
      
        
          />
       <h1>88888</h1>
    </div>
  );
}}

export default App;
