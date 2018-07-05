import React from 'react' ;
// import CommentInput from './CommentInput' ;
import './comment-section.css' ;

//{/*
class CommentContainer extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {            
            postDefaultComments: props.postDefaultComments,
            userInput: ''
        }
    
    }
    componentDidMount() {
        const workingId = this.props.postId ;
        if (localStorage.getItem(workingId)) {
            this.setState({
                postDefaultComments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        }else{
            this.storeComments() ;
        }
    }
    componentWillUnmount() {
        this.storeComments() ;
    }
    storeComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.postDefaultComments)
        )
    }
    grabCommentInput= (event) => {
        this.setState({
            userInput: event.target.value
        });
    }
    submitComment = (event) => {
        event.preventDefault() ;
        const userComment = {
            text: this.state.userInput,
            username: localStorage.getItem('user') 
        }
        /////////////////////////////////////////////////////////////////////////
        // NEED BELOW EXPLAINED!!!! var NAMES
        /////////////////////////////////////////////////////////////////////////

        const postDefaultComments = this.state.postDefaultComments.slice() ;
        postDefaultComments.push(userComment) ;
        this.setState({ postDefaultComments, userInput: '' });
        setTimeout(() => {
            this.storeComments() ;
        }, 350) 
    }

    render() {

        return(
            <div>
            
                {this.state.postDefaultComments.map((mapComment, index) => <Comment key={index} comment={mapComment} />)}
                
                
                <CommentInput 
                    propUserInput={this.state.userInput}
                    propSubmitComment={this.submitComment}
                    propGrabCommentInput={this.grabCommentInput}
                />
               </div> 
        
        )
        //{/*
            // <div className="">
            //     <Comment postDefaultComments={this.props.postDefaultComments} 
            //     userInput={this.state.userInput}
            //     />
            // </div>
            //*/}
    }
}
const Comment = (props) => {
    return(
        <div className="comment-container">
            
            <em><span>{props.comment.username}</span></em>
            <span>
                <b>{`- "${props.comment.text}"`}</b>
            </span>
            

            {/* {props.propComments.map((comment, index) => { */}
            {/* {props.postDefaultComments.map((comment, index) => {
                return(
                    <div className="comment" key={index}>
                        <p>{comment.username + '- '}{comment.text}</p>
                    </div>
                )                
            })}
            <CommentInput userInput={props.userInput}/> */}
        </div>
    )
}

const CommentInput = (props) => {
    return(
        <form onSubmit={props.propSubmitComment}>
            <input 
                type="text"
                placeholder="Add a comment..."
                value={props.propUserInput}
                onChange={props.propGrabCommentInput}
            />
        </form>
    )
}
export default CommentContainer ;