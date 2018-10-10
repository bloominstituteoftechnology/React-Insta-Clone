import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.more=''
        this.delete=''

        if(props.data.text.length > 90){
           this.more =' ...more' 
        }

        if(props.data.username === 'Frank-E-B')
        {
            this.delete = ' ...remove'
        }

    }
    render(){
        return (
            <div>
                <div className='comment-container comment-container-text'>
                    <p>
                        <span className='comment-username'>{this.props.data.username} </span>
                        {this.props.data.text} 
                        <span className='comment-more'>{this.more}</span>
                        <span onClick={this.props.removeComment(1)} className='delete-comment'>{this.delete}</span>
                    </p>
                </div>
    
            </div>
        )
    }
}

CommentSection.propTypes = {
    data: PropTypes.shape({
        text:PropTypes.string,
        username:PropTypes.string
    })
}

export default CommentSection;