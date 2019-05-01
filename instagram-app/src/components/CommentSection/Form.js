import React from 'react';
import PropTypes from 'prop-types'
const Form = props => {
    return (
        <form onSubmit={props.addComment}>
            <input className="add-comment" type="text" placeholder="Add Comment" />    
        </form>
    );
}

Form.propTypes = {
    addComment: PropTypes.func
}

export default Form;