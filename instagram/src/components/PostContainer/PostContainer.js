import React from 'react';
import CommentSection from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection';
import './PostContainer.css'
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import CommentForm from '../CommentSection/CommentForm';
import dummyData from '../../dummy-data';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData,
            commentSection: props.propsInPC.comments,
            inputText: "",
            likes: props.propsInPC.likes,
            liked: false,
            username: props.username
            
        };
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            inputText: event.target.value,
        })
       
    }
        
        
    addComment = ev => {
        ev.preventDefault();
        this.setState({
                commentSection: [...this.state.commentSection, {username: "andrewC", text: this.state.inputText}]
            
        })
        
    }

    
    toggleLike = ev => {
        ev.preventDefault();
        let likes = this.state.likes;

        if (this.state.liked === false) {
            this.setState({
                liked: true,
                likes: likes +1,
                
            })
        } else {
            this.setState({
                liked: false,
                likes: likes -1,
            })  
        } 
    }

            


   
    
    render() {
        
        return (
            
            <div className="instagram-posts">
                
                <div className="post-container"> 
                
                    <div className="user">   
                        <img className="logo" src={this.props.propsInPC.thumbnailUrl} alt="logo"></img>
                        <div className="username">
                            {this.state.username}
                        </div> 
                    </div>

                    <img className="img" src={this.props.propsInPC.imageUrl} alt="content"></img>

                    <div className="lower-half">
                        <div className="symbols">
                            <div>
                            <FeatherIcon className="message" icon="message-circle" />
                            </div>
                            <div >
                                <FeatherIcon className={this.state.liked ? 'eachHeart' : 'none'}  id="heartIcon" onClick={this.toggleLike}  icon="heart" />
                            </div>
                            
                        </div>
                        
                            <h4 className="likes">{this.state.likes} likes</h4>
                        
                        <div className="comments">
                            <div className="comment">
                                <CommentSection commentSection={this.state.commentSection}/> 
                            </div>  
                        </div>
                        
                        <h5 className="post-time">2 HOURS AGO</h5>
                        <div className="new-comment">
                        <CommentForm inputText={this.state.inputText} handleChange={this.handleChange} addComment={this.addComment}/>
                        
                            <div className="more-button">
                                <FeatherIcon icon="more-horizontal" />
                            </div>
                            
                        </div>       
                    </div>
                    
                </div>
            
            </div>

            
        
        )
    }  
}


PostContainer.propTypes = {
    propsInPC: PropTypes.shape({
        username: PropTypes.string,
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        }))

    })
}
export default PostContainer;