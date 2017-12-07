import React, { Component } from 'react';
import './App.css';
import { dummyData } from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/Searchbar/Searchbar';


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       postData: [],
//     };
//   }

//   componentDidMount() {
//     this.setState({postData: dummyData}); // pull list objects from dummyData file
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Instagram</h1>
//         <div>
//           {this.state.postData.map(((post, index) => {
//             return <PostContainer key={index} postData={post}/>
//           }))}
//         </div>
//       </div>
//     );
//   }

const App = () => {
  return (
    <div className="App">
      <Searchbar />
      {dummy.map((post,i) => <PostContainer key={i} postData={post} />)}
    </div> 
  );
}



}

export default App;
