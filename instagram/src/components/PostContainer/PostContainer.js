import React from 'react'; 

import PropTypes from 'prop-types';
import {Posting, Likes, PostIcons, Icon, PostHeader,
    ThumbNail, PostUserName,PostImage, FlipIcon} from './PostStyled.js';

class PostContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {likes: this.props.likes, cmdCalled: false, liked: []}
    }

    componentDidMount (){
        this.setState({cmdCalled:true});
    }

    handleLikeClick = event => {
        
        if(!this.state.liked.includes(this.props.userIn)){
            const liked = this.state.liked.slice();
            liked.push(this.props.userIn);
            event.target.style.color = 'red';
            
            
            
            this.setState({likes: this.state.likes + 1, liked:liked}); 
        } else if (this.state.liked.includes(this.props.userIn)){
            let liked = this.state.liked.slice();
            event.target.style.color = 'black';
            
            liked = liked.filter(user => user !== this.props.userIn);
            this.setState({likes:this.state.likes - 1, liked:liked})
        }
        
    }
    handleHover = event => {
        event.target.style.cursor = 'pointer';
    }

    render() {

        let likes;
        this.state.cmdCalled ? likes = this.state.likes : likes = 0; 
        return(
            
            <Posting >
                
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
    likes: PropTypes.number,
    
}


export default PostContainer; 