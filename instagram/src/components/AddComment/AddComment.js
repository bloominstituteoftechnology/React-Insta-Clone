import React from 'react';
import './AddComments.css';

class AddComments extends React.Component {
   
    render() {

        return (
            <div>
                <form onSubmit={this.props.submitHandler} id={this.props.id}>
                <input 
                    type="input" 
                    placeholder="Add a comment..." 
                    className="commentInput" 
                    onChange={this.props.inputHandler}
                    value={this.props.commentInputValue}
                >
                    
                    
                    </input>
                    </form>
            </div>
        )
    }
}

export default AddComments;