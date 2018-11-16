import React from 'react';
import CommentSection from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection';
import './PostContainer.css'
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import CommentForm from '../CommentSection/CommentForm';

class PostContainer extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            commentSection: props.propsInPC.comments,
            inputText: " ",
        }
    }

    handleChange = event => {
        this.setState({
            inputText: event.target.value,
        })
       
    }

    addComment = ev => {
        ev.preventDefault();
        this.setState({
                commentSection: [...this.state.commentSection, {username: "andrewC", text: this.state.inputText}]
            
        })
        console.log("enter clicked", this.state);
    }
    
    render() {
        return (
            <div className="instagram-posts">
                
                <div className="post-container"> 
                
                    <div className="user">   
                        <img className="logo" src={this.props.propsInPC.thumbnailUrl} alt="logo"></img>
                        <div className="username">
                            {this.props.propsInPC.username}
                        </div> 
                    </div>

                    <img className="img" src={this.props.propsInPC.imageUrl} alt="content"></img>

                    <div className="lower-half">
                        <div className="symbols">
                            <div>
                            <FeatherIcon className="message" icon="message-circle" />
                            </div>
                            <div>
                                <FeatherIcon icon="heart" />
                            </div>
                            
                        </div>
                        
                            <h4 className="likes">{this.props.propsInPC.likes} likes</h4>
                        
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