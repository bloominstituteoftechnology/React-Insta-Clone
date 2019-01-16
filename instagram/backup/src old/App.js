import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data'
//console.log(dummyData);

class App extends Component {
  constructor(){
    console.log('Constructor is running')
    super();
    this.state = {
      mainData: dummyData 
    }
  }

  componentDidMount() {
    console.log('CDM is running');
    fetch("./dummy-data")
      .then(res => res.json())
      .then(dogs => this.setState({  mainData: dummyData  }))
      .catch(err => console.log("noooo"));
  }
  

render(){
  return(
    <div>
      <SearchBar />
      <PostContainer postsarray = {this.state.mainData} />
    </div>
  )
}


}

export default App;

