import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super();
        this.state= {
            comments: props.values.text,
            username: props.values.username
        }
    }
    render() {
        return(
        <div>
            <div className="posted">
            <p>{this.state.username}</p> <p>{this.state.comments}</p>    
            </div> 
        </div>
        )
    }
}

export default Comments;