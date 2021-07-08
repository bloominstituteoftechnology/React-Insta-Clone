import React from 'react';
import * as post from './postComponents.js';
import * as globalStyles from '../../globalStyles.js';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
    render() {
        return (
            <post.Container>
                <post.Header>
                    <post.HeaderImg
                        src={this.props.thumbnailUrl}
                        alt={this.props.username+' profile'}
                    />
                    <globalStyles.UserName
                        className={this.props.username}
                        href={'https://example.com/users/'+this.props.username}
                    >
                        {this.props.username}
                    </globalStyles.UserName>
                </post.Header>
                <post.Photo>
                    <post.PhotoImg src={this.props.imageUrl} alt="Alt text should be provided by the API" />
                </post.Photo>
                <CommentSection
                    lastActivity={this.props.timestamp}
                    comments={this.props.comments}
                    likes={this.props.likes}
                />
            </post.Container>
        )
    }
}

export default Post;
