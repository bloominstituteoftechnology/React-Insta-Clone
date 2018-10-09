import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchContainer from './components/SearchContainer/SearchContainer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    this.setState({data:dummyData})
  }
  render() {
    return (
      <div className="app">
        <SearchContainer className='app-search-container' />
        <div className='app-post-container'>
        {
          this.state.data.map((element,index) => {
            return(
              <div>
                <PostContainer key={index} id={index} postId={index} data={element}/>
                <div className='spacer'>&nbsp;</div>
              </div>
                )
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
