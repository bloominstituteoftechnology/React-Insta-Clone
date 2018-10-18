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

class App extends Component {
  constructor(){
    super();
    this.state={
      controlledComment:'',
      database: []
    }
};

componentDidMount(){
this.setState(
  {controlledComment:'',
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
    conrolledComment:'',
    database: updatedDatabase
  })
}

// onSearch=event=>{
//   let newdatabase=this.state.database.slice();
//   let filteredImages=newdatabase.map(

//   )
// }




  render() {
    return (
      <div className="App">
        <header>
<SearchBar/>
        </header>

        { <div>
        <PostContainer onClick={this.onClick} posts={this.state.database} handleChange={this.handleChange} handleNew={this.handleNew} val={this.state.controlledComment}/>
            
        </div> }
      </div>
    );
  }
}

export default App;
