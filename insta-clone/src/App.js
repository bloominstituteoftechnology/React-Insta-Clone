import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer.js';
import SearchBar from './components/Searchbar.js';
import CommentSection from './components/CommentSection.js';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: [],
      search: ""

    }
  }

componentDidMount () {
  this.setState({data: dummyData});
}

changeHandler = e => {
  this.setState({search: e.target.value})
}



// value={props.search} onChange={props.change} onSubmit={props.submit}
  render(){
  return (
    <div className="App">
      <SearchBar search={this.state.search} change={this.changeHandler} searchGram={this.find}/>
      <PostContainer posts={this.state.data} />
    </div>
  );
}
}



export default App;
