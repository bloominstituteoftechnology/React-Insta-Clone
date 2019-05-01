import React from 'react';
import PropTypes from 'prop-types'
const Form = props => {
    return (
        <form onSubmit={props.addComment} index={props.index}>
            <input className="add-comment" type="text" placeholder="Add Comment" onChange={props.handleChange}/>  
              
        </form>
    );
}

Form.propTypes = {
    addComment: PropTypes.func,
    handleChange: PropTypes.func,
    index: PropTypes.number
}

export default Form;