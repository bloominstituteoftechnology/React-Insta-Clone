import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection'
import dummyData from '../../dummy-data'
import PropTypes from 'prop-types';

class PostPage extends React.Component{
    constructor(){
        super()
        this.state = {
        counter: dummyData.likes 
    }}
render(){
    return(
        <div className='cmntSectionDiv'>
            {this.props.data.map(item => 
                <div key={item.username}>
                    <PostHeader 
                    username={item.username} 
                    />
                    <CommentSection  
                    data={this.props.data} 
                    comments={item.comments} 
                    />
                </div>
            )}
        </div>
    )
}

}


export default PostPage 