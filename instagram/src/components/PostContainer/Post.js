import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            likes: props.post.likes
        }
    }

    addLikes = () => {
        let likes = this.state.post.likes;
        likes++;
        this.setState({ likes: likes})
        console.log(this.state)
    }



    render () {
        return (
            <div>
                <div className="insta-top">
                    <img src={this.state.post.thumbnailUrl} />
                    <h1>{this.state.post.username}</h1>  
                </div>
                <img className="insta-pic" src={this.state.post.imageUrl} />
                <div className="below-insta-pic">
                    <i
                    onClick={this.addLikes} 
                    className="far fa-heart" 
                    style={{ fontSize: '25px' }}
                    ></i>
                    <i className="far fa-comment" style={{ fontSize: '25px' }}></i>
                </div>
                <p className="likes"><strong>{this.state.likes}</strong> likes</p>
            </div>
        
            )     

    }
}

export default Post;



