import React from 'react';
import Comment from '../Comment/Comment';
import '../CommentSection/CommentSection.css'

class CommentSection extends React.Component {
    render() {
        return (
            <div className={'commentsContainer'}>
                <div className={'buttonBar'}>
                    <div className={'commentsButtonBox'}>
                        <img src="https://png.icons8.com/ios/48/000000/hearts.png" alt=""/>
                        <img src="https://png.icons8.com/ios/48/000000/speech-bubble.png" className={'commentBubble'} alt="" />
                        <img src="https://png.icons8.com/ios/48/000000/upload.png" alt="" />
                    </div>
                    <img src="https://png.icons8.com/ios/48/000000/bookmark-ribbon.png" alt="" />
                </div>
                <div className={'likesCount'}>{this.props.post.likes} likes</div>
                {this.props.comments.map(comment => {
                    return (
                        <Comment key={comment.text} comment={comment} dummyData={this.props.dummyData} />
                    )
                })}
                <div className={'dateStamp'}>{this.props.post.timestamp}</div>
                <form>
                    <div className={'moreButton'}></div>
                    <input className={'commentInput'} placeholder={'Add a comment...'} />
                </form>
            </div>
        )
    }
}

export default CommentSection;