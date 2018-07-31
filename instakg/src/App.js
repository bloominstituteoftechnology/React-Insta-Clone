import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import dummyData from './dummy-data';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      currentUser:'You',
      display:[],
      textBoxString: ''
    }
  }
  componentDidMount(){
    this.setState({ data: dummyData,display:dummyData },()=>{});
  }
  incrimentLike = (event)=>{
    const dataImport = this.state.data;
    dataImport.map((element,index)=>{
      if(event.target.id === index.toString()){
        if(element.liked === true){
          element.likes --;
         element.liked = false;
          return element;
        }
        else{
          element.likes ++;
         element.liked = true;
          return element;
        }
         
      }
      else{
        return element;
      }
        
    })
    this.setState({ data: dataImport, display:dataImport },()=>{
      
    });
  }
  // handleKeyPressSearch = (event) => {
  //   const dataImport = this.state.data;
  //   if (event.target.value === ''){
  //     return;
  //   }
  //   dataImport.map((element,index)=>{
  //     if(event.target.value === index.toString()){
  //        element.comments.push({
  //         username: this.state.currentUser,
  //         text : event.target.value})
  //         return element;
  //     }
  //     else{
  //       return element;
  //     }

  // }
  handleKeyPressComment = (event) => {
    const dataImport = this.state.data;
    if(event.key === 'Enter'){
       if (event.target.value === ''){
         return;
       }
      dataImport.map((element,index)=>{
        if(event.target.id === index.toString()){
           element.comments.push({
            username: this.state.currentUser,
            text : event.target.value})
            return element;
        }
        else{
          return element;
        }
          
      })
      event.target.value = '';
    this.setState({ data: dataImport, display: dataImport },()=>{
      
    });
    }
  }
  loadPosts = ()=>{
  return this.state.display.map((element,index) => {
        return <PostContainer methods={[this.handleKeyPressComment,this.incrimentLike]} key={index} id={index} data={element} />
      });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="postsHolder">
        {this.loadPosts()}
        </div>
      </div>
    );
  }
}

export default App;
