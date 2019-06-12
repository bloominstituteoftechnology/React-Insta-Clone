import React from 'react'
import PropTypes from 'prop-types'

class CommentSection extends React.Component {
        constructor(props){
        super(props)
        
        this.state ={
            comment: ''
          }
    
        
    }
   render(){     
    return (
        this.props.comment.map( (feedBack) => (
            <div key={feedBack.id}>
                <h3>{feedBack.username}</h3>
                <p>{feedBack.text}</p>
            </div>
        ))
        
    )
}

}
/// propTypes start here ///
CommentSection.propTypes ={
    comment: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection