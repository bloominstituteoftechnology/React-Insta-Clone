import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostPage from './components/PostContainer/PostPage'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dummyDataList: [],
      inputText:''
    }
  }


    componentDidMount() {
      this.setState({ dummyDataList: dummyData })
    }

    search = (term) => {
      let dummyDataList = dummyData.filter(post  => post.username.includes(term))
      this.setState({ dummyDataList })
    }


  render() {
    return (
      <div className="App">
        
        <PostPage />
      
      </div>
    );
  }
}

export default App;
