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
    document.title = "InstaKG";
    if(localStorage.getItem("postList")===null){     
      this.resetData();
    }
    else{
      this.readLS();
    }
  }
  resetData(){ 
    this.setState({ data: dummyData, display:dummyData},()=>{this.writeToLS()});
  }
  incrimentLike = (event)=>{
    const dataImport = this.state.data;
    event.target.classList.toggle('liked');
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
    this.setState({ data: dataImport, display:dataImport },()=>{});
  }
  handleKeyPressSearch = (event) => {
    const dataImport = this.state.data;
    
    if (event.target.value === ''){
      this.setState({display: this.setState.data},()=>{});
     }
    let newArray = dataImport.filter((element)=>{
      if(element.username.toLowerCase().includes(event.target.value.toLowerCase())){        
        return true;
      }
      else{
        return false;
      }
  })
 
  this.setState({ display: newArray },()=>{});
}
  handleKeyPressComment = (event) => {
   
    const dataImport = this.state.data;
    const displayImport = this.state.display;

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
      displayImport.map((element,index)=>{
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
      
    this.setState({ data: dataImport, display: displayImport },()=>{this.writeToLS();});
    }
    else if(event.key === '~'){
      this.resetData();
    }
  }
  writeToLS = () =>{
    
    localStorage.setItem('postList', JSON.stringify(this.state.data));
  }
  readLS = () =>{
    let output = JSON.parse(localStorage.getItem('postList'));
    this.setState({data: output, display: output }); 
  }
  deleteComment(event){  
    const dataImport = this.state.data;
    const displayImport = this.state.display;

    const moddedData= dataImport.map((element)=>{
         element.comments = element.comments.filter((e)=>{
          if(e.text === event.target.previousSibling.innerHTML){
            return false;
          }
          else{
            return true;
          }
        })
        return element;
    })
    const moddedDisplay= displayImport.map((element)=>{
      element.comments = element.comments.filter((e)=>{
       if(e.text === event.target.previousSibling.innerHTML){
         return false;
       }
       else{
         return true;
       }
     })
     return element;
 })
    
    this.setState({ data: moddedData, display: moddedDisplay },()=>{this.writeToLS();});
    
  }
  loadPosts = ()=>{
  return this.state.display.map((element,index) => {
        return <PostContainer methods={[this.handleKeyPressComment,this.incrimentLike, this.deleteComment.bind(this)]} key={index} id={index} data={element} />
      });
  }
  render() {
    
    return (
      <div className="App">
        <SearchBar methods={this.handleKeyPressSearch} />
        <div className="postsHolder">
        {this.loadPosts()}
        </div>
      </div>
    );
  }
}

export default App;
