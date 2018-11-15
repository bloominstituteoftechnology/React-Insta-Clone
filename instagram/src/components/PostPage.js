import React from 'react';
import styled from 'styled-components';
import dummyData from '../dummy-data';
import PostContainer from './PostContainer/PostContainer';
import SearchForm from './SearchBar/SearchBar';
import Fuse from 'fuse.js';
import Authenticate from './Authentication/Authenticate';

const AppContainer = styled.div`
  margin-top: 80px;
`
const LogOutButton = styled.button`
  background-color: white;
  font-size: 20px;
  padding: 3px 10px;
  position: fixed;
  top: 55px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
`

class PostPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
        searchText: ''
      }
    }
  
    componentDidMount() {
      this.setState({
        posts: dummyData.map(item => {return {...item, display: true}})
      })
    }
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    clearSearch = ev => {
      ev.preventDefault();
      this.setState({
        posts: this.state.posts.map(item=> {
          return {...item, display: true};
        })
      })
    }
  
    searchItems = ev => {
      ev.preventDefault();
      if(this.state.searchText === ''){
        this.setState({
          posts: this.state.posts.map(item=> {
            return {...item, display: true};
          })
        })
      }
      
      else{
      const options = {threshold: 0.5, keys: ['username'],minMatchCharLength: 2,shouldSort: true};
      const fuse = new Fuse(this.state.posts,options);
      this.setState({
        posts: this.state.posts.map(item => {
          // if(!item.username.toUpperCase().includes(`${this.state.searchText.toUpperCase()}`)){
          if(!fuse.search(`${this.state.searchText.toUpperCase()}`).includes(item)){
            return{...item, display: false}
          }
          else{
            return {...item, display: true};
          }
        })
      });
    }
    };
  
  
    render() {
      return (
        <AppContainer className="App">

        <LogOutButton onClick={this.props.logout}>LogOut</LogOutButton>

          <SearchForm searchText={this.state.searchText}
          handleChange={this.handleChange}
          searchItems={this.searchItems}
          // logOut={this.props.logout}
          // clearSearch={this.clearSearch}
          />
  
        {this.state.posts.map( (item,index) => {
           return <PostContainer thisPost={item} key={index} index={index} userName={this.props.userName} />
        })}
  
        </AppContainer>
      );
    }
  }

  export default Authenticate(PostPage);