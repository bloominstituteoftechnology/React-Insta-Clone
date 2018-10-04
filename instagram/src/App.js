import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'



class App extends React.Component {
  constructor(){
    super();

    this.state = {

      text: '',

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
       {dummyData.map(item =>
        
        <div key={item.timestamp} > {item.username}</div>
        
        )}
      <SearchBar inputText={this.inputText} dummyData={dummyData} text={this.state.text} />

      {/* check to see if these props are being passed, use console. */}

 

       
 <PostContainer dummyData={dummyData} /> 
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
