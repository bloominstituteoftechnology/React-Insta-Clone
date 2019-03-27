import React, { Component } from 'react';
import Data from './dummy-data'
import './App.css';
import Header from './Header'
import PostContainer from './components/PostContainer'

class App extends Component {
  constructor(){
    super();
    this.state={
      Data:Data,
      comment:'',
      filteredData: [],
      search:'',
      

      
    }
    
  }
  componentDidMount = () => {

    this.setState({
      Data:Data,
      filteredData: Data,
    })
  }
  // Handles changes for SearchBar
  handleChanges = (event) => {
    //console.log('You hit the search bar');
    // this.state.search.length === 0 ? return '' : null;
    const filtered = this.state.filteredData.filter((post) => post.username.includes(this.state.search)); 
    this.setState({
      [event.target.name] : event.target.value,
      Data: filtered,
    })
    if(event.target.value.length === 0) {
      this.setState({
        Data:Data,
      })
    }
    // console.log(this.state.search);
  }
  

  render() {
    return (
      
      <div className="App">
      <div>
        <Header handleChanges ={this.handleChanges} search ={this.state.search}/>
        </div>
        <div>
        <PostContainer post= {this.state.Data} />
      </div>
      </div>
    );
  }
}

export default App;
