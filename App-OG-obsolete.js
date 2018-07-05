// {/**/}
// import React, { Component } from 'react';
// import './App.css';
// import Search from './components/SearcgBar/Seach' ;
// import PostContainer from './components/PostContainer/PostContainer' ;
// import dummyData from './dummy-data' ;


// class App extends Component {
//   constructor(props) {
//     super(props) ;
//     console.log('constructor called') ;
//     this.state = {
//       userData: []      
//     } ;
//   }
//   componentDidMount() {
//     console.log('componentDidMount/setState called') ;
//     this.setState({
//       userData: dummyData
//     });
//   }
//   addNewComment = (event, index) => {
//     alert('greeting from App.js') ;
//   }
//   render() {
//     console.log('rendered called') ;
//     return (
//       <div className="App">
//         <Search />

           
//         {/* passing each obj(post) one-by-one to PostContainer */}
//         {/* {this.state.userData.map((post, index) => {
//           return (
//             <PostContent key={index} post={post} />
//           )
//         })} */}
//         <PostContainer propUserData={this.state.userData} />

//         {/* <PostContainer propUserData = {this.state.userData} /> */}
//       </div>
//     );
//   }
// }

// export default App;

