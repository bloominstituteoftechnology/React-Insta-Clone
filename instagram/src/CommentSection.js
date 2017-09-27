
import React, { Component } from 'react';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            currentComment: '',
            comments: []
        }
    }
    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const store = this.state.comments;
        store.push({
            username: "Hussain",
            text: this.state.currentComment
        });
        this.setState({
            comments: store,
            currentComment: ''
        })
    }
    handleChange(event) {
        console.log(this.state.currentComment)
        this.setState({
            currentComment: event.target.value
        });
    }
    render() {return (<div><div>
                {this.state.comments.map((comment, index) => {
                            return (
                                <div>
                                    <ul><div className="commentUsername">{comment.username}</div> {comment.text} </ul>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div>
                        <form onSubmit={this.handleSubmit} >
                            <input type="text" onChange={this.handleChange} value={this.state.currentComment}/> 
                        </form>
                    </div>
                </div>
        )
    }

}

export default CommentSection;