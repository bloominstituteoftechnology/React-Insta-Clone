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
                {/* <img className ="thumbNail" src={this.props.thumbNail} alt="" /> */}
                <ThumbNail src = {this.props.thumbNail} alt=""></ThumbNail>
                {/* <div className ="postUserName">{this.props.userName}</div> */}
                <PostUserName>{this.props.userName}</PostUserName>
                </PostHeader>
                
                {/* <img className ="postImage" src={this.props.image} alt="" /> */}
                <PostImage src={this.props.image} alt=""/>
               <PostIcons>
                    {/* <i className="far fa-heart" onClick = {this.handleLikeClick}></i> <i className="far fa-comment"></i> */}
                    <Icon className ="far fa-heart" onMouseEnter ={this.handleHover} onClick = {this.handleLikeClick}></Icon><FlipIcon className= "far fa-comment"></FlipIcon>
               </PostIcons>
               {/* <h3 className = "likes" >{likes} likes </h3> */}
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