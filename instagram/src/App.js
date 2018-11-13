import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


console.log(dummyData);

class App extends Component {
  constructor(){
    super();
    this.state={
      posts: [],
      filteredPosts: []
    }
  }

  componentDidMount(){
    this.setState({ posts: dummyData})
    this.setState({ filteredPosts: dummyData})
  }

  searchFilter = ev =>{
    let thing = this.state.posts.filter(data =>{
        // console.log(ev.target.value)
        // console.log(data.username)
        // console.log(data.username.includes(ev.target.value))
        return data.username.includes(ev.target.value);
      
      
    })
    // if(ev.target.value === ''){
    //   filterPosts = this.state.posts;
    // }
    console.log(thing);
    console.log(this.state.filteredPosts);
    
    this.setState({
      filteredPosts: thing
    })

  }
  
  render() {
    return (
      <div className="App">
        <SearchBar searchFilter={this.searchFilter}/>
        <div className="container">
        
        {this.state.filteredPosts.map((data, index) => (
          <PostContainer
            data ={data}
            key={index}
            />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
