import React from 'react';
import PostContainer from './PostContainer.js';
import dummyData from '../../dummy-data.js';
import fuzzy from 'fuzzy';
import SearchBar from '../SearchBar/SearchBar.js';

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
      this.setState({posts:dummyData});
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
        <div className="App">
          <SearchBar searchValue={this.searchBarValue} handleInputChange={this.handleSearchBarChange}/>
          {this.state.searchBarValue.length===0 ?
          this.state.posts.map((e)=><PostContainer data={e} key={e.imageUrl}/>):
          this.state.filteredPosts.map((e)=><PostContainer data={e} key={e.imageUrl}/>
          )}
        </div>
      );
    }
  };

export default PostsPage;