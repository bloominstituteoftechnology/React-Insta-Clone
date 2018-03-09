import React, {Component} from 'react';


export default class CommentSection extends Component {
    constructor(){
        super();
        this.state = {
            userName:'',
            text:'',
            newComment: '',
        };
    }
    componentDidMount(){
        this.setState({
            userName:this.props.comment.username,
            text:this.props.comment.text,
        })

    }
    render () {
        return(
            <div className ='comments-text'>
                <div className = 'commenter-name'>
                    {this.state.userName}: 
                </div>
                <div>
                    {this.state.text}
                </div>
            </div>
        );
    }
}