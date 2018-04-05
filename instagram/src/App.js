import React, { Component } from 'react';
import { render } from "react-dom";
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/searchBar';
import CommentSection from './Components/CommentSection/commentSection';
import PostContainer  from './Components/PostContainer/postContainer';


class App extends Component {
 constructor(){
   super()
   this.state = {
     Postes: dummyData.Data, 
             Comments:{},
                    
   }
}
  // componentDidMount() {
  //   const {Postes} = this.state;   
  //   this.setState({ Postes: dummyData.Data,  });      
  // }
  render() {
    return (
      <div>
       <div className="App">
        <SearchBar className="Searchbar" />
        <PostContainer posteProps={this.state.Postes}/>
        <CommentSection commentProps={this.state.Postes} />
       </div>       
      </div>
    );
  }
}

export default App;
