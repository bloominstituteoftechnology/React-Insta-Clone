import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
// import dummyData from './dummy-data';


class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     postData: []
  //   }
  // }

  // componentDidMount = () => {
  //   this.setState({ postData: dummyData });
  // }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <SearchBar />
              {/* {dummyData.map((post, index) =>
                <PostContainer key={index} postData={post} />)} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
