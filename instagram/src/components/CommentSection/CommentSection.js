import React from 'react';
import dummyData from '../../dummy-data';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {

    constructor(){
        super();

        this.state = {

            data: dummyData

        }
    }

    // const {username, timestamp} = props.Data;
 

    addNewComment = (event, index) => {

       const newComment = this.data.comments.slice() ;

       this.setState({
            data: this.data.comment.concat([newComment])
       })
       if (newComment.index !== this.data.comments.index){
           newComment.map(() => {
               
           return {username: this.data.comments.username,
            text: event.target.value }})
       }

        

      //  index ??? event.target.value

    }

    commentUpdater = () => {
this.addNewComment();


    }

    //c

    // addNewComment
    render(){
        const LikeButton = () => (
        <i className="fa fa-heart like-button" />
    );

        const Comment = () => (
        <i className="fa fa-comment comment "/>
    );

    return(
        <div className="cmntSectDiv">
        {dummyData.map(item => <div key={item.timestamp}>
            {item.username}

            <img alt="" src={item.thumbnailUrl} />
            <img alt="" src={item.imageUrl} />
            <div>{item.likes}</div>
            <div>{item.timestamp}</div>
            <LikeButton />
            <Comment />
            <form ></form>
            <input />
            
            <div>{item.comments.map(item =>
            
            <div key={item.text}>
                {item.username}
                {item.text}
            </div>
            )}</div>

            {/* In theory I feel like I should be able to nest a map method
            within a map method, so long as the parameters match and the values resolve correctly.
            
             */}

        </div>)}
        <input />
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

// CommentSection.propTypes = {

//     dummyData: PropTypes.shape({
//                         username: PropTypes.string.isRequired,
//                         likes: PropTypes.number.isRequired,
//                         comments: PropTypes.array.isRequired,
                        
//                     })

// }
export default CommentSection