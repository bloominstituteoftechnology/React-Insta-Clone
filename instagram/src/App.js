import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer/PostContainer';
import SearchBar from './SearchBar/SearchBar';
import dummyData from './dummy-data';

// file with import dummyData from './dummy-data';
// and iterate over said data,
// passing each individual object as a prop to an instance of PostContainer.


const App = () => {
  return(
    <div className= "App">
  <SearchBar/>
  {dummyData.map((post, i) => <PostContainer key= {i} postData={post} />)}
  </div>
  );
}
  
export default App;
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/


