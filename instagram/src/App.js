import React, { Component } from 'react';
import './App.css';
// import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage'
class App extends Component {
  constructor() {
    super();
    
    this.state = {
      dummyData:[],
      
    };
  }
  componentDidMount(){
   setTimeout(()=>{

   
    this.setState({
      dummyData:dummyData,
    })
  },500)
  }
  
  searchFilter =(event) => {
    event.preventDefault();
    if(event.keyCode === 13 && event.target.value.length > 0){
      let newData = this.state.dummyData.filter((dummyData)=> {
        return dummyData.username === event.target.value;
      })
      this.setState({dummyData:newData});
      event.target.value='';
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage
          dummyData={this.state.dummyData}
          search={this.searchFilter}
        />
      </div>
    );
  }
}

export default App;
  



