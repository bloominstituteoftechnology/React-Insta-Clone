import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
constructor(props) {
super();
this.state = {
 data: dummyData,
 search: '',
}


}

search = (event) => {
  event.preventDefault();
  let term = event.target.value;
  let searchData = this.state.data.slice();

  // searchData = searchData.filter(post => post.username === term);
  searchData = searchData.filter(post => post.username.includes(term));
 
  if (term.length < 1) {
this.setState({
  data: dummyData,
})
  }else {
  this.setState({
    data: searchData,
  })
  }

}

 handleChange = (event) => {
   event.preventDefault();
   this.setState({
     [event.target.name]: event.target.value,
   });
 };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBarContainer handleChange = {this.handleChange} value ={this.state.search} search = {this.search}/>
         </header>
        <div className ='App-body'>
        {this.state.data.map(post => {
         return <PostContainer key = {Math.random()} post = {post} />
        })}

       </div>
      
      </div>
    );
  }
}

export default App;
