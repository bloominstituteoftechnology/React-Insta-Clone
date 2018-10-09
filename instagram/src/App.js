import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchContainer from './components/SearchContainer/SearchContainer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchText:'',
      data:[]
    }
  }
  componentDidMount(){
    this.setState({data:dummyData})
  }

  handleSearchChange = event =>{
    console.log('setting ', event.target.value)
    this.setState({searchText:event.target.value})
  }
  handleSearchSubmit = event =>{
    event.preventDefault();
    this.setState({data:this.state.data.filter(element=>{
      if(element.username === this.state.searchText)
      {
        return element
      }
    })},this.setState({searchText:''}))
    
  }
  render() {
    return (
      <div className="app">
        <SearchContainer 
                        className='app-search-container' 
                        handleSearchSubmit={this.handleSearchSubmit}
                        handleSearchChange={this.handleSearchChange}
        />
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
