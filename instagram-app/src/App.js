import React from 'react';
// import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';
import PropTypes from 'prop-types'

class App extends React.Component {

  state = { newComment: ' ',
    data: dummyData


  }

  onInputChange = (e) => {
    this.setState({newComment: e.target.value})
  }

  addComment = (e, comment) =>{
    e.preventDefault();
    const newOne = {
      text: comment
    }
  

  this.setState ({
    data: [...this.state.data, newOne ],
    newComment: ' '
  })}

  render(){
     console.log(this.state.data)

  return (
    <div className="App">
      <SearchBar/>
       {this.state.data.map(e => {
       return <PostContainer 
           object={e} key={e.id}/>
       })}
          
     </div>
  );
}}

export default App;
