import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
// import PostContainer from "./components/PostContainer/PostContainer";
// import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData:[],
      authenticate: Authenticate
    };
  }

  componentDidMount() {
        this.setState({dummyData:dummyData});
      }

  render() {
    return (
      <div className="App">
       <PostsPage dummyData={this.state.dummyData} authenticate ={this.state.authenticate}/>
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dummyData: []
//     };
//   }

//   componentDidMount() {
//     this.setState({dummyData:dummyData});
//   }
  

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//         <SearchBar />
//         </header>
//         <div>
//           {this.state.dummyData.map(post => (
//             <PostContainer key={post.timestamp} dummyData={post} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export default App;


// import React, { Component } from 'react';

// import './App.css';
// import dummyData from './dummy';
// import DummyData from './components/DummyData';
// import CommentSection from './components/CommentSection/commentSection';

// class App extends Component {
//   constructor () {
//     super ();
//     this.state = {
//       dummyData: dummyData
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Instagram</h1>
          
          
//           {/* <dummyData /> */}
//         </header>
//         <div>
//           <DummyData dummy={this.state.dummyData}/>
//           <CommentSection dummy={this.state.dummyData}/>
//           </div>
//         {/* {this.state.dummyData.map(post => {
//           return <p className="App-intro" key={post.id}> 
//           Username: {post.username} Likes: {post.likes} </p>
//         })} */}
        
//       </div>
//     );
//   }
// }

// export default App;
