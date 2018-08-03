import React from 'react';
import PostContainer from './PostContainer.js';
import dummyData from '../../dummy-data.js';
import fuzzy from 'fuzzy';
import SearchBar from '../SearchBar/SearchBar.js';
import styled from 'styled-components';

const Posts=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 200px;
`
class PostsPage extends React.Component {
    constructor() {
      super();
      this.state={
        posts:[],
        filteredPosts:[],
        searchBarValue:''
      }
    }
    componentDidMount(){
      
     if (typeof localStorage.getItem('posts')==='object') {
      localStorage.setItem('posts',JSON.stringify(dummyData));
      this.setState({posts:dummyData},()=>console.log(this.state.posts));
     } else {
       this.setState({posts:JSON.parse(localStorage.getItem('posts'))},()=>console.log(this.state.posts))
     }
    }
    handleSearchBarChange=(event)=>{
      this.setState({searchBarValue:event.target.value},()=>this.filterPosts());
    }
    filterPosts=()=>{
      let filteredPosts=this.state.posts.slice();
      let itemsToBeFiltered=filteredPosts.map(e=>e.username);
      itemsToBeFiltered=fuzzy.filter(this.state.searchBarValue,itemsToBeFiltered).map(e=>e.string);
      filteredPosts=filteredPosts.filter((e)=>itemsToBeFiltered.indexOf(e.username)!==-1);
      this.setState({filteredPosts:filteredPosts});
    }
    liked=(data)=>{
      const postsCopy=this.state.posts.slice();
      postsCopy.forEach(e=>{
        if(e===data){
          if (e.liked===undefined||e.liked===false){
            e.likes+=1; e.liked=true;
          } else {
          e.likes-=1; e.liked=false;
        }}});
      return this.setState({posts:postsCopy});
    }
    render() {
      return (
        <div>
          <SearchBar searchValue={this.searchBarValue} handleInputChange={this.handleSearchBarChange}/>
          <Posts>
          {this.state.searchBarValue.length===0 ?
          this.state.posts.map((e)=><PostContainer data={e} liked={this.liked.bind(this)} key={e.imageUrl}/>):
          this.state.filteredPosts.map((e)=><PostContainer liked={this.liked.bind(this)} data={e} key={e.imageUrl}/>
          )}
          </Posts>
        </div>
      );
    }
  };

export default PostsPage;