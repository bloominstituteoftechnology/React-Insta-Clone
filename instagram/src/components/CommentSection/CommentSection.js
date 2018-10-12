import React from 'react';
import dummyData from '../../dummy-data';
import PropTypes from 'prop-types';
import './CommentSection.css';
import AddComment from './addComment';
import styled from 'styled-components'

const Img = styled.img`
border: 5px solid pink ;
	display: flex ;
	justify-content: center ;

`



class CommentSection extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            data: props.data,

            newData: [],

            comment: '',

            likes: dummyData.likes,
            

        }
    }

 
            

//     addNewComment = (event, index) => {

//        const newData = this.state.data.comments.slice() ;
// D: this.state.data.comment.concat([this.newData])
//        this.setState({
            
//        })

//        }

        
    AddComment = (event) => {
        event.preventDefault();
        const dataCopy = this.state.data.comments.slice() ;

        dataCopy.push({username: 'LorenzoEvans', text: event.target.value })

        this.setState({
            data: dataCopy 
        })
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.state({
            newData: event.target.value 
        })
    }

    handleComment = (commentText) => {
        // event.preventDefault()
        this.setState({
        data: this.state.data.comments.map( comment => {
            if (comment.text === commentText){
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



    render(){
       

    return(
        <div className="cmntSectDiv">
        {this.props.data.map(item => <div key={item.timestamp}>
            <img className="thumbnailImg" alt="" src={item.thumbnailUrl} /> 
            {item.username}

            <div className="imageUrl" > <img  alt="" src={item.imageUrl} /> </div>
            
            <div>{item.likes} likes</div>
            
            <i className="far fa-heart"/>
            <i className="far fa-comment"></i>
            <div>{item.timestamp}</div>
           
            <div className="commentMap">{item.comments.map(item =>
            
            <div key={item.text}>
            {' '}
                {item.username}
                {' '}
                {item.text}
            </div>,
           
            )}
            <AddComment addComment={this.AddComment} commentUpdater={this.CommentUpdater} data={this.state.data} />
            </div>
 
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