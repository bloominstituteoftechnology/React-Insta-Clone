import React from 'react';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
// import PostContainer from './components/PostContainer/PostContainer'


import './App.css';


class App extends React.Component {

    constructor(){
      super();
      this.state = {
        posts: []
        
      }
      
    }

    async componentDidMount (){

      await this.setState({posts: dummyData});

    }


render() {
  return (
    <div className="App">
      <Header />
      {/* <PostContainer post={this.state.posts} /> */}
    </div>
  
  );
  
}

}

export default App;
