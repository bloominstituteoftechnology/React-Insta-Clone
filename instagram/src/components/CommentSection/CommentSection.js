import React from 'react';
import dummyData from '../../dummy-data';
import PropTypes from 'prop-types';
import './CommentSection.css';
import addComment from './addComment';

class CommentSection extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            data: props.data

        }
    }

 

    addNewComment = (event, index) => {

       const newComment = this.state.data.comments.slice() ;

       this.setState({
            data: this.state.data.comment.concat([newComment])
       })
       if (newComment.index !== this.state.data.comments.index){
           newComment.map(() => {
               
           return {username: "LorenzoEvans",
            text: event.target.value }})
       }

        


    }

    commentUpdater = () => {
this.addNewComment();


    }


    render(){
       

    return(
        <div className="cmntSectDiv">
        {this.props.data.map(item => <div key={item.timestamp}>
            {item.username}

            <img alt="" src={item.thumbnailUrl} />
            <img alt="" src={item.imageUrl} />
            <div>{item.likes}</div>
            <div>{item.timestamp}</div>
            {this.props.LikeButton()}
            {this.props.Comment()}
          
            <div>{item.comments.map(item =>
            
            <div key={item.text}>
                {item.username}
                {item.text}
            </div>, 
             <addComment data={this.state.data} />
            )}</div>

            {/* In theory I feel like I should be able to nest a map method
            within a map method, so long as the parameters match and the values resolve correctly.
            
             */}

        </div>)}
     
        </div>
    )
    }
}

dummyData.propTypes = {
    dummyData: PropTypes.arrayOf(
        CommentSection.defaultProps ={
            dummyData: PropTypes.shape({
                username: PropTypes.string.isRequired,
                likes: PropTypes.number.isRequired,
                comments: PropTypes.array.isRequired,
                
            })

        }

    )
}

export default CommentSection