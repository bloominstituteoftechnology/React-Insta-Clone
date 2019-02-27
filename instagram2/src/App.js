    // src.App.js
import React, { Component } from 'react';
import '../src/App.css';
import "../src/components/Header/Header.css";
import "../src/components/Header/Header";
import ReactDOM from 'react-dom';
import Header from '../src/components/Header/Header';
import logo from '../sprite.png';

// import Header from '../components/Header/Header';


// import dummyData from './dummy-data';
// import PostsContainer from './components/PostsContainer/PostsContainer';
// import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Header />

        {/* <SearchBar /> */}
        {/* <PostsContainer posts={this.state.posts} /> */}
        
      </div>
      
    );
  }
}



export default App;






// import React, { Component } from 'react';
// import './App.css';
// // import dummyData from '../dummy-data';
// // import instagram2 from '../dummy-data.js'



// class App extends Component {
//   constructor() {
//     // responsible for setting up the component's state
//     super();
//     this.state = {
//       // instagram2: instagram2
//       // instagram2: dummyData
//   };
// }


// // render() {
// //   return (
// //     <div className="App">
// //       <PostContainer instagram2={this.state.instagram2} />
// //     </div>
// //   );
// // }
// // }

// export default App;
