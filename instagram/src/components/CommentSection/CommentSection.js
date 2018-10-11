import React from 'react';
import dummyData from '../../dummy-data';
import PropTypes from 'prop-types';
import './CommentSection.css';
import AddComment from './addComment';

class CommentSection extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            data: props.data,

            newData: [],

            comment: ''

        }
    }

 

//     addNewComment = (event, index) => {

//        const newData = this.state.data.comments.slice() ;
// D: this.state.data.comment.concat([this.newData])
//        this.setState({
            
//        })

//        }

        
    AddComment = (event) => {
        const dataCopy = this.state.data.comments.slice() ;

        dataCopy.push({username: 'LorenzoEvans', text: this.state.newComment })

        this.setState({
            data: dataCopy 
        })
    }

    HandleAdd = (event) => {
        this.state({
            comment: event.target.value 
        })
    }

    SubmitComment = () => {
        this.setState({
        data: this.state.data.comments.map( comment => {
            if (comment.text === this.text){
                return {
                    username: comment.username,
                    text: comment.text
                }
            }

            else {
                return comment 
            }
        })

        })
    }

    // }

    // addNewComment = (event, index) => {
    //     const newComment = this.state.data.comments.slice();

    //     this.setState({
    //         data: this.state.comments.concat([newComment]),
    //     })
    // }

    // commentUpdater = (event) => {

    //     this.setState({
    //         newData: this.newData.push({username: 'LorenzoEvans', text: event.target.value  })
    //     })


    // }


    render(){
       

    return(
        <div className="cmntSectDiv">
        {this.props.data.map(item => <div key={item.timestamp}>
           
            <img className="thumbnailImg" alt="" src={item.thumbnailUrl} /> 
            {item.username}
<AddComment addComment={this.AddComment} commentUpdater={this.CommentUpdater} data={this.state.data} />
            <div className="imageUrl" > <img  alt="" src={item.imageUrl} /> </div>
            
            <div>{item.likes} likes</div>
            <div>{item.timestamp}</div>
            {this.props.LikeButton()}
            {this.props.Comment()}
           
            <div className="commentMap">{item.comments.map(item =>
            
            <div key={item.text}>
                {item.username}
                {item.text}
            </div>, 
            
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