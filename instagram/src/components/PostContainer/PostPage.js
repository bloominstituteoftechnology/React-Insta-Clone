import React, { Component } from 'react';
import dummyData from "../data";
import Search from "../SearchBar/Search";
import Posts from "./Posts";
import styled from "styled-components";


const Header = styled.div`
  height: 77px;
  background-color:white;
  border-bottom:1px solid rgba(0,0,0,.0975);
  width: 100%;
`;

const Container = styled.div`
  display:flex;
  justify-content:row;
  width:100%;
  max-width:940px;
  margin:0 auto;
  /border:1px dotted darkgray;*/
`;



class PostPage extends Component {
  constructor(){
    super();
    this.state = {
      data :[],
      query:''
    }
  }

  componentDidMount(){
      this.setState(
      { 
      data :dummyData,
      }
    )
  }

  handleChange =(event)=>{
    this.setState({
      query:event.target.value
    })
  }

  handleReload = () => {
    this.setState({
      data:dummyData
    })
  }


  handleSearch = (event)=>{
    event.preventDefault();
    const posts = this.state.data
    const arr = posts.filter(post => {
      return post.username.includes(this.state.query);
    })
    this.setState({
      query:'',
      data: arr
    })
  }

  render() { 
    if(this.state.data.length === 0){
      return (
        <Header>
          <Search 
          value={this.state.query} 
          reload={this.handleReload} 
          change={this.handleChange} 
          submit={this.handleSearch}
          logout={this.handleLogout}
          />
          <Container>
            <div className="notice">
              <p> username doesn't exist </p>
            </div>
          </Container>
        </Header>
      );
    }
    return (
      <Header>
        <Search value={this.state.query} change={this.handleChange} submit={this.handleSearch}/>
        <Posts posts = {this.state.data}/>
      </Header>
    );
  }
}
 
export default PostPage;