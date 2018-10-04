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

    }
  }
  render(){
    return(

      <div>
       {dummyData.map(item =>
        
        <div key={item.timestamp} > {item.username}</div>
        
        )}
      <SearchBar dummyData={dummyData} />

 

       
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
