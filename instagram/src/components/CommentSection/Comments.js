import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 



class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render () {


        return (
            <div>
                <h3>{this.props.userName}</h3>
                <p>{this.props.text}</p>
            </div> 
        ); 
    }
}

export default Comments 