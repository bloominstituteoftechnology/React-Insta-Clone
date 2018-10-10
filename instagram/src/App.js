import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import SearchContainer from './components/SearchContainer/SearchContainer';

class App extends Component {
  constructor(){
    super();
    this.removeComment = this.removeComment.bind(this, 'Parameter');
    this.state = {
      searchText:'',
      data:[],
      newComment:''
    }
  }
  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('igData'))
     if(data){
       this.setState({'data':data})
     } 
     else 
     {
      this.setState({'data':dummyData})    
     }

  }
  saveData(){
    localStorage.setItem('igData',JSON.stringify(this.state.data))
  }

  handleSearchChange = event =>{
    this.setState({searchText:event.target.value})
  }
  handleSearchSubmit = event =>{
    event.preventDefault();
    this.setState({data:this.state.data.filter(element=>{
      if(element.username.includes(this.state.searchText))
      {
        return element
      }
    })},this.setState({searchText:''}))
  }
  removeComment = (event,args) => {
    console.log('here. ', event)
    console.log('args', args)
  }
  addNewComment = (event) =>{
      event.preventDefault();
      let postId = event.target[0].id;
      let myDataObj = [...this.state.data];
      myDataObj[postId].comments.push(
        {username:'Frank-E-B',
         'text': event.target[0].value}
      )
      this.setState({data: myDataObj,newComment:''},this.saveData)
  }

  handleCommentChange = event =>{
    this.setState({newComment:event.target.value})
  }
  handleLikeClick = event =>{
      this.setState({likes: (this.state.likes+1)})
  }

  render() {
    return (
      <div className="app">
        <SearchContainer 
                        className='app-search-container' 
                        handleSearchSubmit={this.handleSearchSubmit}
                        handleSearchChange={this.handleSearchChange}
                        searchText={this.state.searchText}
        />
        <div className='app-post-container'>
        {
          this.state.data.map((element,index) => {
            return(
              <div>
                <PostsPage  
                              saveData={this.saveData} 
                              key={index} 
                              id={index} 
                              postId={index} 
                              data={element}
                              handleCommentChange = {this.handleCommentChange}
                              handleLikeClick = {this.handleLikeClick}
                              addNewComment = {this.addNewComment}
                              newComment = {this.state.newComment}
                              removeComment = {this.removeComment}

                />
                <div className='spacer'>&nbsp;</div>
              </div>
                )
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
