import React from 'react';
import PostContainer from './PostContainer.js';
import dummyData from '../../dummy-data.js';
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
          <div className ='posts'>
          {this.state.searchBarValue.length===0 ?
          this.state.posts.map((e)=><PostContainer data={e} liked={this.liked.bind(this)} key={e.imageUrl}/>):
          this.state.filteredPosts.map((e)=><PostContainer liked={this.liked.bind(this)} data={e} key={e.imageUrl}/>
          )}
          </div>
        </div>

        );
    }
}; 
export default PostsPage; 