import React from 'react';
import './AddComments.css';

class AddComments extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <input type="input" placeholder="Add Comment" className="commentInput"></input>
            </div>
        )
    }
}

export default AddComments;