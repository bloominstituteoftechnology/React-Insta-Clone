import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import HeaderSection from "./components/HeaderSection/HeaderSection"




class App extends Component {
  
  constructor(){
    super();
    this.state = {
      data:[],
      user:"New User",
      searchInput:""
    }
  }


  componentDidMount(){
    this.setState({
      data: dummyData.map(
        (e,index) => 
        e={...e,"index":index,"userLiked":0}
        )
    })
  }

  LikeButton = event => {
    let newState = this.state.data;
    const index = event.target.name;
    newState[index] = (newState[index].userLiked === 0 ? 
      newState[index]={...newState[index],
        likes:newState[index].likes+=1, userLiked:1} : 
      newState[index]={...newState[index],
        likes:newState[index].likes-1,userLiked:0});

    this.setState({
      data: newState
    })
  }

  handleSearch = event => {
    console.log(event.target.value)
    const searchState = this.state.data.map((obj) => {
      const regex=new RegExp(event.target.value,"i");
      if(regex.test(`${obj.username}`)){
        obj.display = "block";
      } else {
        obj.display = "none";
      }
      return obj;
    })
    this.setState({
      data:searchState,
      searchInput: event.target.value
    })
  }


  

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <HeaderSection search={this.handleSearch}/>
        <PostContainer post={this.state.data} like={this.LikeButton}/>
      </div>
    );
  }
}

export default App;
