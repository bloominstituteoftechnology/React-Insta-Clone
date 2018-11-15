import React from 'react';
import CommentSection from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection';
import './PostContainer.css'
import FeatherIcon from 'feather-icons-react';
import SearchBar from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar';


class PostContainer extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            commentSection: props.propsInPC.comments,
        }
    }
    
    render() {
        return (
            <div className="instagram-posts">
                <SearchBar />
                <div className="post-container"> 
                
                    <div className="user">   
                        <img className="logo" src={this.props.propsInPC.thumbnailUrl}></img>
                        <div className="username">
                            {this.props.propsInPC.username}
                        </div> 
                    </div>

                    <img className="img" src={this.props.propsInPC.imageUrl}></img>

                    <div className="lower-half">
                        <div className="symbols">
                            <div>
                            <FeatherIcon className="message" icon="message-circle" />
                            </div>
                            <div>
                                <FeatherIcon icon="heart" />
                            </div>
                            
                        </div>
                        <div className="likes">
                            {this.props.propsInPC.likes}
                        </div>
                        <div className="comments">
                            {<CommentSection commentSection={this.props.propsInPC.comments}/> }
                        </div>         
                    </div>
                    
                </div>
            
            </div>

            
        
        )
    }  
}



export default PostContainer;