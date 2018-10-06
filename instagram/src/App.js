import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'




class App extends React.Component {
  constructor(){
    super();

    this.state = {

      text: '',
      // empty array, should be able to link existing comments here and push user object.
      newComment: []
    }
  }

  // todo: add buttons, synthetic click for search

  inputText = (event) => {
    this.setState({
      text: event.target.value
      // prope
    })

  }
  render(){
    return(

      <div> 
     
      <SearchBar inputText={this.inputText} dummyData={dummyData} text={this.state.text} />
       {dummyData.map(item =>
        
        <div key={item.timestamp} ></div>
        
        )}
     

      {/* check to see if these props are being passed, use console. */}

 

       
 <PostContainer newComment={this.state.newComment} dummyData={dummyData} /> 
      </div>
    )
  }
}



// class App extends React.Component {

//   constructor(){
//     super()

//     this.state = {

//     }
//   }
//   render() {
//     return (
//       <div>
//       {dummyData.map(item => <div key={item.timestamp}>  {item.username}</div>)}
//      
//      
//       <div/>
//     );
//   }
// }

export default App;
