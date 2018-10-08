import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props)

        this.more=''
        if(props.data.text.length > 90){
           this.more =' more' 
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
                    </p>
                </div>
    
            </div>
        )
    }
}

export default CommentSection;