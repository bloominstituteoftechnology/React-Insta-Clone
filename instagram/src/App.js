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

class App extends Component {
  constructor(){
    super();
    this.state={
      controlledComment:'',
      database: dummyData
    }
};

handleChange=event=>{
  this.setState({
    controlledComment:event.target.value
  })
  
}

handleNew=event=>{
  event.preventDefault();
  let newdatabase=this.state.database.slice();
  //find the old comment list
  
  let currentimage=newdatabase.filter(entry=>entry.imageUrl===event.target.id)

  console.log(currentimage);
  // add to it

  //replace database

  
};

  render() {
    return (
      <div className="App">
        <header>
<SearchBar/>
        </header>

        { <div>
        <PostContainer posts={this.state.database} handleChange={this.handleChange} handleNew={this.handleNew} val={this.state.controlledComment}/>
            
        </div> }
      </div>
    );
  }
}

export default App;
