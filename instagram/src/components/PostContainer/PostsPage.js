import React from 'react';

import dummyData from '../dummy-data.js'
import SearchBar from '../SearchBar/SearchBar.js'; 
import PostContainer from './PostContainer.js'; 
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'; 
import {HRLine} from  './PostStyled.js';

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
            <SearchBar  value ={this.state.searchText} onChange = {this.handleSearchChange} logOut = {this.props.handleLogOut}/>
            {dummyData.map((post, i) => <div key = {i} className = "post">
            <HRLine /> <div className = "containerPost">
            <PostContainer key = {Date.now()} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
            likes = {post.likes}/> 
            
            <CommentSection key ={i} comments = {post.comments} time = {post.timestamp} userIn = {this.props.userIn}/> 

            </div></div>) }
        
        </div>
        );
    }
}


PostsPage.propTypes = {
    userIn: PropTypes.string, 
    logOut: PropTypes.func
}

export default PostsPage; 

