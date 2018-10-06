import React, { Component } from 'react';
import './App.css';
import dummydata from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allUserData: [],
      searchInput:'',
      }
  }
  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value
    },
      console.log(this.state.searchInput)
    )
  }
  filter = (event) => {
    event.preventDefault();
    this.setState({
      allUserData: this.state.allUserData.filter((obj) => {
        return obj.username === this.state.searchInput;
      })
    })
      console.log(this.state.textInput)
    

  }
  componentDidMount(){
    this.setState({allUserData:dummydata})
  }
  render() {
    
    return (
      <div className="App">
      <SearchBar handler={this.searchHandler}/>
        <>
          {this.state.allUserData.map(obj => {
            return (

              <PostContainer key={obj.timestamp} InstaData={obj} CommentArray={obj.comments} />

            );
          })}
        </>
       
           
      </div>
    );
  }
}

export default App;
