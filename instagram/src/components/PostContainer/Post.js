import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from './../CommentSection/CommentSection';
// import CommentInput from './../CommentSection/CommentInput'
import PostHeader from './PostHeader'
import LikesPost from './LikesPost'
import moment from 'moment';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }


    increment = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };

    render () {
        
            return (

                <div  className='comment-section'>
                    <PostHeader 
                        thumbnailUrl={this.props.post.thumbnailUrl}
                        username={this.props.post.username}
                    />

                    
                    
                    <div className='main-image'>
                        <img src={this.props.post.imageUrl} alt='main ' />
                    </div> 

                    <div className='main-content'>
                        
                        <LikesPost 
                            likes={this.state.likes}
                            increment={this.increment}
                        />

                           
                        </div>
                    <div > 
                    
                           <CommentSection 
                                comments={this.props.post.comments}
                                timestamp={this.props.post.timestamp}
                            />
                            
{/*                         
                            <h5 className='timestamp'>
                                { moment(this.props.post.timestamp, 'MMMM Do YYYY hh:mm:ss A').fromNow() }
                            </h5> */}
                        
                    
                    </div>
                </div>
        );
    }
}

CommentSection.propTypes = {
    post: PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape ({
                username: PropTypes.string,
                text: PropTypes.string,
            }))
    })
}

export default Post