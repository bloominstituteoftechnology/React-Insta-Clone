import React from 'react'; 

import PropTypes from 'prop-types';
import {Posting, Likes, PostIcons, Icon, PostHeader,
    ThumbNail, PostUserName,PostImage, FlipIcon} from './PostStyled.js';

class PostContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {likes: this.props.likes, cmdCalled: false}
    }

    componentDidMount (){
        this.setState({cmdCalled:true});
    }

    handleLikeClick = () => {
        this.setState({likes: this.state.likes + 1}); 
    }
    handleHover = event => {
        event.target.style.cursor = 'pointer';
    }

    render() {

        let likes;
        this.state.cmdCalled ? likes = this.state.likes : likes = 0; 
        return(
            
            <Posting>
                
                <PostHeader>
                
                <ThumbNail src = {this.props.thumbNail} alt=""></ThumbNail>
            
                <PostUserName>{this.props.userName}</PostUserName>
                </PostHeader>
                
                
                <PostImage src={this.props.image} alt=""/>
               <PostIcons>
                    
                    <Icon className ="far fa-heart" onMouseEnter ={this.handleHover} onClick = {this.handleLikeClick}></Icon><FlipIcon className= "far fa-comment"></FlipIcon>
               </PostIcons>
               <Likes>{likes} likes</Likes>
            </Posting>

        );
    }

}



PostContainer.propTypes = {
    userName: PropTypes.string,
    thumbNail: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number
}


export default PostContainer; 