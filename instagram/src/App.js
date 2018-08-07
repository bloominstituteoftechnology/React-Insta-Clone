
// import React, { Component } from 'react';
// import './App.css';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import SearchBar from './components/SearchBar/SearchBar';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: []
//     };
//   }

// componentDidMount() {
//   this.setState({posts: dummyData})
// }



//   render() {
//     return (
//       <div className='App">
//         <SearchBar />
//         <PostContainer posts={this.state.posts} />
        
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
 constructor(){
   super();
   this.state = {
     postList:[]
   };

 }
 componentDidMount() {
   this.setState({postList: dummyData})
 }
 render() {
   return (
     <div className='App'>
       {/* <SearchBar /> */}
       <PostContainer postList={this.state.postList} />
     </div>
   );
 }
}

export default App;