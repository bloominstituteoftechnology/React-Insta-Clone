import React from 'react' ;
import CommentInput from './CommentInput' ;
import './comment-section.css' ;

//{/*
class CommentContainer extends React.Component {
    constructor(props) {
        console.log('child CommentSection called constructor') ;
        super(props) ;
        this.state = {
            comments: props.propComments
        }
    }
    render() {
        return(
            <div className="daily-standup">
                <h1>daily-standup</h1>
                <Comment propPropComments={this.state.comments}/>
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
            {props.propPropComments.map((comment, index) => {

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
export default CommentContainer ;