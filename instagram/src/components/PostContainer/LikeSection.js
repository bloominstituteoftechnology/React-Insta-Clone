import React from 'react';
import { LikeImgs, LikeHeart, LikeComment, Likes } from '../ReusableComponents/PostContainer';

class LikeSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes,
            liked: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem('likes' + this.props.id) && localStorage.getItem('liked' + this.props.id)) {
            this.setState({ likes: JSON.parse(localStorage.getItem('likes' + this.props.id)), liked: JSON.parse(localStorage.getItem('liked' + this.props.id)) })
        } else {
            localStorage.setItem('likes' + this.props.id, JSON.stringify(this.state.likes));
            localStorage.setItem('liked' + this.props.id, JSON.stringify(this.state.liked));
        }
    }

    likeComment = () => {
        let likes = this.state.likes;
        let liked = this.state.liked;

        if (liked) {
            likes--;
            liked = false;
        } else {
            likes++;
            liked = true;
        }
        this.setState({ likes: likes, liked: liked });

        setTimeout(() => {
            localStorage.setItem('likes' + this.props.id, JSON.stringify(likes));
            localStorage.setItem('liked' + this.props.id, JSON.stringify(liked));
        })
    }

    render() {
        return (
            <div>

                <LikeImgs>
                    <LikeHeart style={this.state.liked ? { color: 'red' } : null} onClick={this.likeComment} className={'fa-heart ' + (this.state.liked ? 'fas' : 'far')}></LikeHeart>
                    <LikeComment className={"far fa-comment"}></LikeComment>
                </LikeImgs>

                <Likes>
                    <strong>{this.state.likes} likes </strong>
                </Likes>

            </div>
        );
    }
}

export default LikeSection;