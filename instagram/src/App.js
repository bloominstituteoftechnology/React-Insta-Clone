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
     Postes:[], 
       
                    
   }
}
 
  componentDidMount() {
     
    this.setState({ Postes: dummyData.Data, });      
  }
  render() {
   
    return (
      <div>
        <SearchBar className="Searchbar" />

        <div className="App">
         <PostContainer posteProps = {this.state.Postes}/>
         {/* <CommentSection commentProps = {this.state.Comments} /> */}
        {/* {this.state.Postes.map(p => <CommentSection commentProps={p} />)[0]}       */}
        </div> 

        

      </div>
    );
  }
}


export default App;
