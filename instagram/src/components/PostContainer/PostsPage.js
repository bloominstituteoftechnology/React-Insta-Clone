import React from 'react';
import './PostContainer.css'; 
import dummyData from '../dummy-data.js'
import SearchBar from '../SearchBar/SearchBar.js'; 
import PostContainer from './PostContainer.js'; 
import CommentSection from '../CommentSection/CommentSection';



class PostsPage extends React.Component{
    constructor(){
        super();
        this.state = {dummyData: dummyData, searchText: "", prevDummyData: dummyData}; 
    }

    
    
    handleSearchChange = event => {
    
        const dummyData = this.state.prevDummyData.slice(); 
        const prevDummyData = this.state.prevDummyData.slice(); 
        //fd === filteredData 

        const fd  = dummyData.filter(post => post.username.includes(event.target.value))
        
        this.setState({dummyData: fd, searchText:event.target.value}) 

        if(event.target.value === 0){
            this.setState({dummyData: prevDummyData});
        }
    
    }

    render() {
        let dummyData = this.state.dummyData.slice(); 
        

        return(
        <div>
            <SearchBar  value ={this.state.searchText} onChange = {this.handleSearchChange}/>
            {dummyData.map((post, i) => <div key = {i} className = "post">
            <hr className ="hrLine"/> <div className = "containerPost">
            <PostContainer key = {Date.now()} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
            likes = {post.likes}/> 
            
            <CommentSection key ={i} comments = {post.comments} time = {post.timestamp}/> 

            </div></div>) }
        
        </div>
        );
    }
}

export default PostsPage; 