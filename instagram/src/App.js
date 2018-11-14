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
  addNewLike = ev =>{
    let currentObj = {};
    let currentIndex = 0;
    this.state.posts.forEach( (item,index) =>{
      if(ev.target.id == index){
        currentObj =item;
        currentIndex = index;
      }
    });
    let tempList = this.state.posts.slice();
    currentObj.likes++
    tempList[currentIndex] = currentObj;
    
    this.setState({
      filteredPosts: tempList
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
            addNewLike={this.addNewLike}
            id={index}
            />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
