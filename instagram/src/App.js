import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import Authenticate from './components/Authentication/Authenticate'

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
      <header className="search-bar">
                <SearchBar search={this.search}/>
            </header> 

             <React.Fragment className="App-renderer">
                <PostContainer posts={this.state.dummyDataList}/>
             </React.Fragment>
        
       
      
      </div>
    );
  }
}

export default App;
