import React, { Component } from 'react';
//import withAuthenticate from './components/Authentication/withAuthenticate';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: {
        text: '',
        username: ''
      }
     
    }
  }
  

  addComment = (e) => {
    e.preventDefault();
    const thisIndex = e.target.getAttribute('index')
    //console.log(this.state.data[thisIndex].comments)
    this.state.data[thisIndex].comments.push({ text: this.state.comments.text, username: this.state.comments.username})
    this.setState({
      data: [...this.state.data ]
    })
  }

  handleChange = e => {
    //console.log(e.target.value)
    //this.state.data[0].comments.push({ text:e.target.value, username: "Billy Bob"})
    this.setState({
      data: [...this.state.data],
      comments: {
        text: e.target.value,
        username: "BillyBob"
      }
    })
  }

 handleSearch = e => {
    //console.log(e.target.value)
    //this.setState({data: [...this.state.data]})
    //const text = e.target.value.split("").toString()
    //console.log(text)
    //const newArray = this.state.data.filter(item => (this.setState({data: item})))
    const newArray = []
    this.state.data.filter(function(post) {
      if (post.username === e.target.value) {
       newArray.push(post)
       console.log(newArray)
       return newArray
      } else {
        return newArray
      }
      
    });
      
        
    if (newArray.length > 0) {
      this.setState({data: newArray})
    } else if (newArray.length === 0) {
      this.setState({data: dummyData})
    }
  }
 
  

  handleLikes = e => {
    const thisIndex = e.target.getAttribute('index')
    //this.state.data[thisIndex].likes = this.state.data[thisIndex].likes + 1
    console.log(e.target.getAttribute('class'))
    e.target.classList.toggle('red-heart')
      if (e.target.getAttribute('class') === 'heart red-heart') {
      this.state.data[thisIndex].likes = this.state.data[thisIndex].likes + 1
      this.setState({
        //newLikes: this.state.data[thisIndex].likes + 1,
        data: [...this.state.data]
      })
    } else {
      this.state.data[thisIndex].likes = this.state.data[thisIndex].likes - 1
      this.setState({
        //newLikes: this.state.data[thisIndex].likes + 1,
        data: [...this.state.data]
      })
    }
    
  }

  componentDidMount() {
  //const user = dummyData.map(data => data.comments)
  //console.log(user)
  //console.log(user.map(item => item))
    const newData = []
    
   this.setState({
     data: dummyData,
     
    })
  }

  
  
  render () {

    return (
      <div className="App">
      
        <SearchBar search={this.handleSearch} />
        {this.state.data.map((data, index) => 
          <PostContainer className="post" 
          
          data={data} 
          key={index} 
          comments={data.comments} 
          addComment={this.addComment} 
          handleChange={this.handleChange}
          likes={data.likes}
          handleLikes={this.handleLikes}
          index={index}
      
          />
          )}
          
      </div>
    );
}}

export default PostPage