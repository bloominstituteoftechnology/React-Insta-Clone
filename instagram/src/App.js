import React, { Component } from 'react';
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer"
import CommentSection from "./components/CommentSection/CommentSection"
import SearchBar from "./components/SearchBar/SearchBar"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {     
     commentInput: '',
     searchInput: '',
     personalUser: ''
    }
  }

  handleCommentInput = (event) => {
    this.setState ({
      commentInput: event.target.value,
    })
  }

  handleSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  searchData = () => {
    console.log(this.state.searchInput);
    const tempData = this.state.dataArray.filter(data => {
      console.log(data.username);
      console.log(data.username.indexOf(this.state.searchInput));
      return data.username.indexOf(this.state.searchInput) >= 0
    })


    this.setState({
      dataArray: tempData,
      searchInput: ''
    })
  }


  addComment = (event) => {    
    let username = this.state.personalUser ? this.state.personalUser:prompt('username?')
    
    const tempData = this.state.dataArray.map(
      data =>{if(data.id == event.target.id){                    
        data.comments.push({username: username, text: this.state.commentInput})
        return data
      }else{        
        return data;
      }}
    )
    console.log(this.state.dataArray);
    console.log(tempData);
    this.setState({
      dataArray: tempData,
      commentInput: '',
      personalUser: username,
    })

  }

  likePost = event => {    
    const tempData = this.state.dataArray.map(
      data =>{if(data.id == event.target.id){        
        data.likes++  
      }else{        
        return data;
      }}
    )
    this.setState({
      data: tempData,      
    })
  }

  render() {  
    
    return (
      <div className="App">
        <nav>
          <div>
            <h2>Search Bar</h2>
            <input value={this.state.searchInput} onChange={this.handleSearchInput} placeholder ="search here..." type="text"/>
            <button onClick={this.searchData} type ='button'>Sumbit</button>
          </div>
        </nav>
        {this.state.dataArray && this.state.dataArray.map(
          data => <CommentSection 
          data={data} 
          handleCommentInput = {this.handleCommentInput}
          addComment = {this.addComment}
          likePost = {this.likePost}
          value = {this.state.commentInput}
        />)}

        
      </div>
    );
  }

  componentDidMount(){
    this.setState({
      dataArray:dummyData,
    })
  }
}

export default App;
