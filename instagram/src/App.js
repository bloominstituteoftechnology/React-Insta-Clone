import React, { Component } from 'react';
import './App.scss';
import {postList} from './dummyData'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(){
    super()
    this.state = {
        postList:[],
    }
  }
  componentWillMount() {
    // axios.get('/thedata').then(res => {
    //     this.setState({items: res.data});
    // });
    this.setState({postList: postList})
    
  }
  componentDidMount() {
    // this.setState({postList: postList})
  }
  //
  render() {
    return (
      <div className="App">
          <SearchBar />
          <PostContainer postList={this.state.postList}/>
      </div>
    );
  }
}

export default App;
