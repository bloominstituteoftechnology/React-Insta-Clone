import React, { Component } from 'react';
import './App.css';
import Search from './components/SearcgBar/Seach' ;
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';


class App extends Component {
  constructor(props) {
    console.log('constructor called') ;
    super(props) ;
    this.state = {
      userData: dummyData
    } ;
  }
  // componentDidMount() {
  //   console.log('setState called') ;
  //   this.setState({
  //     userData: dummyData
  //   });
  // }
  render() {
    console.log('rendered called') ;
    return (
      <div className="App">
        <Search />
        div.   
        {/* passing each obj(post) one-by-one to PostContainer */}
        {this.state.userData.map((post, index) => {
          return (
            <PostContainer key={index} post={post} />
          )
        })}

        {/* <PostContainer propUserData = {this.state.userData} /> */}
      </div>
    );
  }
}

export default App;

