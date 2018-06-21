import React from 'react' ;
// import CommentInput from './CommentInput' ;
import './comment-section.css' ;

//{/*
class CommentContainer extends React.Component {
    constructor(props) {
        console.log('child CommentSection called constructor') ;
        super(props) ;
        this.state = {
            postDefaultComments: props.postDefaultComments,

        }
    }
    render() {
        return(
            <div className="">
                <Comment postDefaultComments={this.props.postDefaultComments}/>
            </div>
        )
    }
}
//*/}

//{/*
const Comment = (props) => {
    return(
        <div className="comment-container">
            Placeholder: "CommentSection"

            {/* {props.propComments.map((comment, index) => { */}
            {props.postDefaultComments.map((comment, index) => {
                return(
                    <div className="comment" key={index}>
                        <p>{comment.username + '- '}{comment.text}</p>
                    </div>
                )                
            })}
            <CommentInput />
        </div>
    )
}
//*/}

const CommentInput = (props) => {
    // console.log(props);
    
    return(
        <form action="">
            <input type="text" placeholder="Add a comment..."/>
        </form>
    )
}
export default CommentContainer ;