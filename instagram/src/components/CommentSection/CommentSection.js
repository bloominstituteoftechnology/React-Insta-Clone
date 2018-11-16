import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import CommentInput from './CommentInput';
import moment from 'moment';
import './CommentSection.css';



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentInput: '',
        }
    }

    componentDidMount () {
        console.log(this.props.comments)
        this.setState({comments: this.props.comments})





    }

componentWillUnmount () {
    this.setComments({})
}
    setComments = () => {
        localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments))
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    addComment = event => {
        
        event.preventDefault();
        const newComment= {text: this.state.commentInput, username: 'cosmicChocolate'}
        const brandNewComments = this.state.comments.slice();
        
        brandNewComments.push(newComment)
        this.setState({
          comments: brandNewComments , commentInput: ''
        }) 
      }


    render () {
        console.log(this.state.comments)
        // let newComments= Array.from(this.state.comments)
        return (

            <div>
                {this.state.comments.map((comment, index) =>
                   
                   <Comments 
                        comment={comment}
                        key={index}
                    />
                )}

               
               <h5 className='timestamp'>
                    { moment(this.props.timestamp, 'MMMM-Do-YYYY h:mm:ss a').fromNow() }
                </h5>

                <CommentInput 
                    commentInput={this.state.commentInput}
                    addComment={this.addComment}
                    handleChange={this.handleChange}
                    onKeydown={this.onKeydown}
                />
                     
            </div>     
        );
        
    //}
}}


// const CommentSection = (props) => {

//     let comments = props.post.comments.map ((comment, index) => {
//         return <Comment 
//         comment={comment} 
//         key={index}
        
//         />
//     })

//     return (
//         <div className='comment-section'>
//             <div className='comment-header'>
//                 <img src={props.post.thumbnailUrl} alt='thumbnail' className='thumbnail' />
//                 <h4>{props.post.username}</h4>
//             </div>
            
//             <div className='main-image'>
//                 <img src={props.post.imageUrl} alt='main ' />
//             </div>
           
//             <div className='main-content'>
                
//                  <div className='likes'>
//                     <i className="far fa-heart fa-2x comment-icons"></i>
//                     <i className="far fa-comment fa-2x comment-icons"></i>
//                     <h4> {props.post.likes} likes </h4>
//                </div> 
               
//                <div > 
//                     { comments }
                
//                     <h5 className='timestamp'>
//                         { moment(props.post.timestamp, 'MMMM Do YYYY hh:mm:ss A').fromNow() }
//                     </h5>
//                 </div>

//                 <div>
//                     <CommentInput />
//                 </div>

//             </div>

//         </div>
//     );
// }
CommentSection.propTypes = {
    post: PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape ({
                username: PropTypes.string,
                text: PropTypes.string,
            }))
    })
}



export default CommentSection;


 
/* <div className='main-image'>
<img src={props.post.imageUrl} alt='main ' />
</div>

<div className='main-content'>

<div className='likes'>
    <i className="far fa-heart fa-2x comment-icons"></i>
    <i className="far fa-comment fa-2x comment-icons"></i>
    <h4> {props.post.likes} likes </h4>
</div>

<div className='comment-content'> 
    { comments }

    <h5 className='timestamp'>
        { moment(props.post.timestamp, 'MMMM Do YYYY hh:mm:ss A').fromNow() }
    </h5>
</div>

<div>
    <CommentInput />
</div>

</div> */