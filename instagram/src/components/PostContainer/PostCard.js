import React from 'react' ;
import './post-container.css' ;
import CommentContainer from '../CommentSection/CommentContainer';



class PostCard extends React.Component {
    // console.log(props.post.username);
    constructor(props) {
        super(props) ;
        this.state = {}
    }
    render() {
        return(
            <div className="post-content">
                <header className="post-header">
                    <div className="post-username">

                        {this.props.post.username}
                    
                    </div>
                    <div className="post-user-thumb">

                        <img 
                        src={this.props.post.thumbnailUrl} 
                        alt=""
                        />

                    </div>
                </header>
                <div className="post-img">

                    <img 
                    src={this.props.post.imageUrl} 
                    alt=""
                    />

                </div>
                <div className="post-bottom">
                    <div className="likes">

                        Likes: {this.props.post.likes}

                    </div>


                    <CommentContainer 
                    postDefaultComments={this.props.post.comments}
                    postId={this.props.post.imageUrl}
                    />
                    {/* {console.log(props.post.comments)} */}


                </div>
            </div>
        )
    }
}
export default PostCard ;