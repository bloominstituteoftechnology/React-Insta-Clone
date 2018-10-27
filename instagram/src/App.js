import React from 'react';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import styled from 'styled-components';
import dummyData from './dummy-data';

const AppStyle = styled.div `
 display: flex ;
  flex-direction: column ;
border: 2px solid red ;
margin: 0 auto ;
`

const SearchBarStyle = styled.div `
  display: flex ;
  flex-direction: row ;
  justify-content: space-around ;
`

class App extends React.Component {
constructor(){
  super()
  this.state = {
    data: [],
    search: []
  }
}
  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }

  handleSearch = event => {
    const comments = this.state.data.filter(item => {
      return (item.username.includes(event.target.value) ? item : null)
      }
    )

    this.setState({
      search: comments 
    })
  }
  render(){
    return(
    <AppStyle>
 <SearchBarStyle >
    <i className="fab fa-instagram"></i>
    <span>|</span>
    <span>Instagram</span>
    <SearchBar handleSearch={this.handleSearch} data={this.state.data} />
    <i className="far fa-compass"></i>
    <i className="far fa-user"></i>
  </SearchBarStyle>
    <PostContainer data={this.state.search.length > 0 ? this.state.search : this.state.data} />

    </AppStyle>
   
    )
  }
}

export default Authenticate(App)
// export default App