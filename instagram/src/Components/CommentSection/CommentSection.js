import React from 'react'
import Comments from './Comments'
import './CommentSection.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newComments: "",
            currentIndex: this.props.index
        }
    }

    commentChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        const index = this.state.currentIndex
        const message = this.state.newComments
        this.props.commentSubmit(message, index)
        
    }

    render () {
        return (
            <div className="comment-section">
                <div className="top">
                    {props.comments.map(item => {
                        return (
                            <Comments 
                                comments={item}
                            />
                        )
                    })}
                </div>
                <hr></hr>
                <form 
                action="" 
                className="bottom" 
                onSubmit={(event, index)=> {
                    this.props.commentSubmit
                }}>
                    <input 
                        onChange={this.commentChange}
                        name="newComments"
                        type="text"
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <i class="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
    
}

const CommentSection = props => {
    console.log('comment section props', props)
    
}

export default CommentSection