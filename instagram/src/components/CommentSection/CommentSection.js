import React, {Component} from 'react';
class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments,
        }
        
    }
    componentDidMount() {
        this.setState({ comments: this.props.comments });
}
    render() {
        return (
        <div>
            {this.state.comments.map((comment,index)=>
            <div key={index}>  
                <div>
                    {comment.username}
                    <div>
                        {comment.text}
                    </div>
                </div>
            }
            </div>
           )}
           <form>
               <input type="text" placeholder="Enter new Comment"/>
           </form> 
           </div>
       )
   }
}

export default CommentSection;