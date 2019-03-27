import React, {Component} from 'react';
import Comments from './Comments'

class CommentSection extends Component {
constructor(props){
    super(props);
    this.state = {
        comments: [],
        comment: '',
    }
}

componentDidMount(){
    this.setState({comments: this.props.comments})
}

addNewComment = event => {
    event.preventDefault(); 
    this.setState({
        comments: [
            ...this.state.comments, 
            {
                text: this.state.comment,
                username: 'ilovedoggos'
            }
        ]
    })
}

handleChanges = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

render(){
    return(
    <div>
    {this.state.comments.map((comments, index) =>
    <Comments username={comments.username} key={index} text={comments.text} 
    />)}
    <form onSubmit={this.addNewComment}>
        <label>
            <input className="add"
                type="text"
                name='comment'
                value={this.state.comment}
                onChange={this.handleChanges}
                placeholder = 'Add a Comment'
            />
        </label>
    </form>
    </div>);
}
}


export default CommentSection;