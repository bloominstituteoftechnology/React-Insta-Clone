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
  
  componentDidMount(){
    this.setState({allUserData:dummydata})
  }
  filter = (event) => {
    event.preventDefault();
    
    this.setState({
      allUserData: this.state.allUserData.filter((obj,i,arr) => {
        if(obj.username === this.state.searchInput){
        return obj
        }else if(obj.username !== this.state.searchInput ){
          return arr
        }
      }
    )
    })
   
  }
  reset = (event) => {
    event.preventDefault();
    this.setState({ 
      allUserData: dummydata,
      searchInput:"" 
    })
  }
  render() {
    console.log('2nd:', this.state.searchInput)
    return (
      <div className="App">
      <SearchBar searchInput={this.state.searchInput} searchHandler={this.searchHandler} filter={this.filter} reset={this.reset}/>
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
