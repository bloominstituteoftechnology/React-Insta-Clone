import React from 'react';

const addComment = () => {
        
        return(
        <div>
            <form type>

                <input 
                value={this.props.newComment}
                onChange={this.props.addComment}
                type="text"
                placeholder="Comment here!"
                /><button onClick={this.props.commentUpdater} ></button>
            </form>
        </div>
        )    
}


export default addComment;