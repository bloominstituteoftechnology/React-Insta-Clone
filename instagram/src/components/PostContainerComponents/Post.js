import React from 'react';
import Header from './Header';
import CommentSectionContainer from '../CommentSectionComponents/CommentSectionContainer';
import Likes from './Likes';
import './Post.css';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    addLike = ()=> {
        let likes = this.state.likes + 1;
        this.setState({
            likes
        });
    };

    render() {
       return (
           <div className='post-div'>
            <div className='post-header'>
                <Header 
                    username={this.props.post.username}
                    thumbnail={this.props.post.thumbnail}
                />
            </div>
            <div className='post-img'>
                <img className='image' src={this.props.post.imageUrl}/>
            </div>
            <div className='likes-div'>
                <Likes 
                    addLike={this.addLike}
                    likes={this.state.likes}
                />
            </div>
            <CommentSectionContainer
                comment={this.props.post.comments}
                postIdentifier={this.props.post.imageUrl}
            />
           </div>
       );
    }
}

export default Post;