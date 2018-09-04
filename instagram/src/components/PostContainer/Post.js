import React from 'react';
import CommentList from '../CommentSection/CommentList';
import PropTypes from 'prop-types';
import h from './h.png';
import c from './c.png';

import styled from 'styled-components';

const PostSection = styled.div`
	margin-bottom: 20px;
`;

const PostSection1 = styled.div`
	border: solid lightgrey 1px;
	display:flex;
	font-size:1.3rem;
	align-items: center;
	padding: 1% 1% 0 4%;
	> img {
		border-radius: 50%;
	  width:5%;
	  margin-right: 2%;
	};
	> h2 {

	}
`;

const PostImage = styled.img`
	width: 100%;
	display: block;
`;

const PostSection2 = styled.div`
	border: solid lightgrey 1px;
	border-top: none;
	border-bottom: none;
	padding: 1% 4% 0 4%;
	line-height: 1.6;
`;

const PostSection3 = styled.div`
	border: solid lightgrey 1px;
	border-top: none;
	padding: 1% 4% 0 4%;
	line-height: 1.6;
	padding-bottom: 15px;
`;

const StatusIMG = styled.img`
	width: 5%;
	margin-right: 2%;
`

const MakeComment = styled



const Post = (props) => {
	return (
		<PostSection>
			<PostSection1>
				<img src={props.post.thumbnailUrl} alt={"thumb"}/>
				<h2>{props.post.username}</h2>
			</PostSection1>
			<PostImage src={props.post.imageUrl} alt={"post-img"}/>
			<PostSection2>
				<StatusIMG src={h} alt={"heart"} onClick={props.UP} id={props.id}/>
				<StatusIMG src={c} alt={"comment"}/>
				<p>{props.post.likes} Likes</p>
			</PostSection2>
			<PostSection3>
				<CommentList comments={props.post.comments} />
			</PostSection3>
		</PostSection>
	)
}

Post.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		thumbnailUrl: PropTypes.string,
		timestamp: PropTypes.string,
		username: PropTypes.string,
	})
}

export default Post;