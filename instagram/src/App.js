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
}


}

search = (event) => {
  event.preventDefault();
  let term = event.target[0].value;
  let searchData = this.state.data.slice();

  searchData = searchData.filter(post => post.username === term);
  if (searchData.length === 0) {
this.setState({
  data: dummyData,
})
  }else {
  this.setState({
    data: searchData,
  })
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBarContainer search = {this.search}/>
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
