import React, { Component } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import dummyData from "./dummy-data";


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      data: [],
      comments: [],
      likes: [],
      search: ""
    };
  }

  componentDidMount(){
    const dataFiltered = JSON.parse(localStorage.getItem("filtered"));
    if (dataFiltered) {
      this.setState({ 
        data: dataFiltered, 
        comments: dummyData.comments,
        likes: dummyData.likes,  
      });
    }else{
      this.setState({ 
        data: dummyData,
        comments: dummyData.comments,
        likes: dummyData.likes, 
      });
    }
  }
  
    // const dataFiltered = JSON.parse(localStorage.getItem("filtered"));
    // if (dataFiltered) {
    //   this.setState({ data: dataFiltered });
    // }
  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clear = event => {
    event.preventDefault();
    let filtered = this.state.data.filter(item => 
      item.username === this.state.search
    );
    localStorage.setItem("filtered", JSON.stringify(filtered));
    this.setState({
      data: filtered
    });
    console.log(filtered);
  };

  

  render() {
    
    return (
      <div className="App">
        <SearchBar search={this.state.search} handleChange={this.handleChange}/>
        <PostContainer 
        data={this.state.data}
        comments={this.state.comments}
        likes={this.state.likes}  
      />
      </div>
    );
  }
}




export default App;
