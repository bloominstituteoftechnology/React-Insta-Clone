import React from 'react';
import Comment from './Comment';

// class CommentSection extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                 hello
//             </div>
//         )
//     }
// }


class CommentSection extends React.Component {
    render() {
        const {likes, timestamp, comments} = this.props.user;
        return (
            <div>
                <div className="post-buttons">
                    <i class="far fa-comment"></i>
                    <i class="far fa-heart"></i>
                </div>
                <div>
                    {likes}
                </div>
                <div>{comments && comments.map((comment, i) => 
                    <Comment comment={comment} key={i}/>)}
                </div>
                <div>
                    {timestamp}
                </div>
                <form>
                    <input type="text" placeholder="Add a comment..."/>
                </form>

            </div>
        )
    }
}

export default CommentSection;



