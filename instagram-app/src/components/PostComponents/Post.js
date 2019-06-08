import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentComponents/CommentSection'
import PostHeader from './PostHeader'
import LikeSection from './LikeSection'
import './Post.css'

import { Card, CardImg } from 'reactstrap'

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: props.post.likes,
			toggleLike: this.toggleLike.bind(this),
			isLiked: false,
			class: {}
		}
	}

	toggleLike = () => {
		this.setState({
			isLiked: !this.state.isLiked
		})

		if (this.state.isLiked === true) {
			let likes = this.state.likes - 1
			return this.setState({ likes })
		} else if (this.state.isLiked === false) {
			let likes = this.state.likes + 1
			return this.setState({ likes })
		}

	}

	render() {
		return (
			<div className="post-border">
                <Card>
                    <PostHeader
                        username={this.props.post.username}
                        thumbnailUrl={this.props.post.thumbnailUrl}
                    />

                    <CardImg
                        alt="post thumbnail"
                        className="post-image"
						src={this.props.post.imageUrl}
						onDoubleClick={this.toggleLike}
                    />

                    <LikeSection
                        toggleLike={this.toggleLike}
						likes={this.state.likes}
						isLiked={this.state.isLiked}
                    />

                    <CommentSection
                        postId={this.props.post.imageUrl}
                        comments={this.props.post.comments}
                    />
                </Card>
			</div>
		);
	}
}

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
	}),
};

export default Post;