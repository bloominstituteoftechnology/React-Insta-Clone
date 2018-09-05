import React from 'react';
import CommentIcons from './CommentIcons';
import CommentLikes from './CommentLikes';
import Comment from './Comment';
import Timestamp from './Timestamp';
import CommentInput from './CommentInput';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render() {
        //console.log(this.state.comments);
        return(
            <div>
            <CommentIcons />
            <CommentLikes />
                {this.state.comments.map((comment, index) => {
                    return(
                        <div key={index}>
                            <Comment comment={comment} />
                        </div>
                    )
                })}
                <Timestamp />
                <CommentInput />
            </div>
        )

        // return(
        //     <div>
        //         <CommentIcons />
        //         <CommentLikes />

        //         {this.state.comments.map((comment, index) => 
        //         <Comment key={index} comment={comment} />)};

        //         <Timestamp />
        //         <CommentInput />
        //     </div>
        // )
    }
}

{/* function CommentContainer(props) {
    return(
        <div>
            <CommentIcons />
            
            {props.posts.map((post, index) => {
                return(
                    <div key={index}>
                        <CommentLikes 
                            likes = {post.likes}
                        />

                        <Comment 
                            comments = {post.comments}
                        />

                        <Timestamp 
                            timestamp = {post.timestamp}
                        />
                    </div>
                )
            })}

            <CommentInput />
        </div>
    );
} */}

export default CommentContainer;