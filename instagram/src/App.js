import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faCompass} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import PostsPage from './components/PostContainer/PostsPage.js'
import Authenticate from './components/Authentication/Authenticate.js'



library.add(faSearch)
library.add(faCompass)
  library.add(faHeart)
  library.add(faUser)

  const findTargetImage= (id, database)=>{
  
    let currentimage=null;
    let newdatabase= database.map(
      (image)=>{
          if(image.imageUrl===id){
            currentimage=image;
            return(image);
          }else{return(image)}
        }
  
    )
    return(currentimage);
  }

  Authenticate(App);


class App extends Component {
  constructor(){
    super();
    this.state={
      controlledComment:'',
      controlledSearch:'',
      database: []
    }
};

componentDidMount(){
this.setState(
  {controlledComment:'',
  controlledSearch:'',
  database: dummyData}
)
}

handleChange=event=>{
  this.setState({
    controlledComment:event.target.value
  })
}

handleNew=event=>{
  event.preventDefault();
  let newdatabase=this.state.database.slice();
  //find the old comment list
  let currentimage=null;
  console.log(newdatabase);
  newdatabase= newdatabase.map(
    (image)=>{
        if(image.imageUrl===event.target.id){
          currentimage=image;
          return(image);
        }else{return(image)}
      }

  )

  console.log(newdatabase);
  console.log(currentimage);
  //all works until this point

  // add to it
  currentimage.comments.push(
  {username: "placeholder fellow",
    text: this.state.controlledComment
  }
)
console.log(currentimage);
//all works until this point

// make new dummy database
let finaldummydatabase= newdatabase.map(
  (image)=>{
  if(image.imageUrl===event.target.id){
  //make currentimage replace image
  return (currentimage);
}
  else{return(image)}
}
)

  //replace database with new dummy
 this.setState({
  controlledComment: "",
  controlledSearch:'',
  database: finaldummydatabase
  })
  
};

onClick=event=>{
  let newdatabase=this.state.database.slice();
  let currentImage= findTargetImage(event.target.id, newdatabase);
  currentImage.likes=(currentImage.likes+1);
  console.log(currentImage.likes);
  let updatedDatabase=newdatabase.map(
    (image)=>{
      if(image.imageUrl===currentImage.imageUrl){
        return(currentImage);
      }else{return(image)}
    }
  )

  this.setState({
    controlledComment:'',
    controlledSearch:'',
    database: updatedDatabase
  })
}

onSearch=event=>{
  event.preventDefault();
  console.log("onSearchCalled");
  let newdatabase=this.state.database.slice();
  console.log(newdatabase);
  console.log(this.state.controlledSearch);
  let filteredImages=newdatabase.filter(
   (image)=>image.username===this.state.controlledSearch
  )
  console.log(filteredImages)
  this.setState({
    controlledComment:'',
    controlledSearch:event.target.id,
    database: filteredImages,
  })
}

onSearchChange=event=>{
  console.log("onSearchChange");
  this.setState({
    controlledSearch:event.target.value
  })
}

onLogin=event=>{
  console.log("onLoginTriggered");
  localStorage.setItem("username", this.state.controlledSearch);
  window.location.reload();
  //remember to pass down this function when we add a render of this
  //he will need an onChange prop (just use the controlledSearch state spot and function) and a onSubmit prop(which is this onLogin func) also

}



  render() {
    return(
      <PostsPage 
   
      //search bar
      SBval={this.state.controlledSearch}
      onSearch={this.onSearch} 
      onChange={this.onSearchChange}
   
      //post container
      onClick={this.onClick} 
      posts={this.state.database} 
      handleChange={this.handleChange} 
      handleNew={this.handleNew} 
      PCval={this.state.controlledComment}
      
      />


    )

  }
}

export default App;
