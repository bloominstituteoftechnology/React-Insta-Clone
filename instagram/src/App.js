import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchInputText: "",
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value)
  }

  likedToggle = id => 
    this.setState( prevState => ({
      data: prevState.data.map(post => {
        if(post.username === id && post.heartToggle === undefined){
          return {
            ...post,
            heartToggle: true,
            likes: post.likes + 1,            
          };
        } else if (post.username === id && post.heartToggle === true){
          return {
            ...post,
            heartToggle: false,
            likes: post.likes - 1,            
          };
        } else if (post.username === id && post.heartToggle === false){
          return {
            ...post,
            heartToggle: true,
            likes: post.likes + 1,            
          };
        } else return post;
      })
    }));


  render() {
    
    let filteredArray = this.state.data.filter(
      post => {
        return post.username.indexOf(this.state.searchInputText) !== -1;
      }    
    );
    
    return (
      <div className="App">

        <div className='searchContainer'>
          {<SearchBar handleChange={this.handleChange} searchText={this.state.searchInputText} />}
        </div>

        <div className='postContainer'>
          {filteredArray.map( arg => {
            return <PostContainer 
              arg={arg} 
              key={arg.username} 
              liked={this.likedToggle} 
              open={this.state.heartOpen}
              close={this.state.heartClosed}
              // heartToggle={this.state.heartToggle}
            />
          })}
        </div>


      </div>
    );
  }
}

export default App;
