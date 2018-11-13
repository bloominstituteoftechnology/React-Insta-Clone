import React from 'react';
import Post from './Post';
import '../../less/Post.less';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
	return (
		<main className='container'> 
			{props.posts.map((post) => (
				<section className="post">
					<Post key={post.id} posts={post} />
					<CommentSection 
					AddComment={props.AddComment}
					commentInput={props.commentInput}
					handleChange={props.handleChange}
					posts={post} 
					/>
				</section>
			))}
		</main>
	);
};

export default PostContainer;
