import React from 'react';
import PostContainer from './PostContainer.js';
import dummyData from '../../dummy-data.js';
import fuzzy from 'fuzzy';
import SearchBar from '../SearchBar/SearchBar.js';
import styled from 'styled-components';
import ImageParser from '../ImageParser/ImageParser.js';

const Posts=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const ImgInput=styled.div`
padding-top: 120px;
width: 290px;
display: inline-block;
margin: 0 auto;
margin-bottom: 30px;
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
      
      if (localStorage.getItem("posts") == null || localStorage.getItem("posts") == undefined) {
        let data=JSON.stringify(dummyData);
        localStorage.setItem('posts',data);
        this.setState({posts:dummyData});
        
       } else {
        
        const posts=JSON.parse(localStorage.getItem('posts'));
        this.setState({posts:posts});
        
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
          <ImgInput>
          <ImageParser/>
          </ImgInput>
          <Posts>
          {this.state.searchBarValue.length===0 ?
          this.state.posts.map((e,i)=><PostContainer index={i} data={e} liked={this.liked.bind(this)} key={e.imageUrl}/>):
          this.state.filteredPosts.map((e,i)=><PostContainer index={i} liked={this.liked.bind(this)} data={e} key={e.imageUrl}/>
          )}
          </Posts>
        </div>
      );
    }
  };

export default PostsPage;