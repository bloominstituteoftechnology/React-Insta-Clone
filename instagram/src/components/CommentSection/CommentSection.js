import React, {Component} from 'react';
import Moment from 'react-moment';
import './CommentSection.css'


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes, 
            comments: props.comments,
            value: "",
            Arr: [],
            commentsArr: [] 
        }
        console.log(this.state.commentsArr)
        // console.log(this.state.Arr)
    }
   
    componentDidMount() {
        this.state.Arr.push(this.state.likes)
        this.state.commentsArr.concat(this.state.comments)
        this.setState({Arr: this.state.Arr, commentsArr: this.state.comments})
        // console.log(this.state.commentsArr)
    }
    
    handleNewComment = (e) => {
        // e.preventDefault;
        // let comments = this.state.comments.slice();
        // comments.concat(e.target.value)
        // this.setState({comments})
        // console.log('test')

        this.setState({[e.target.name]: e.target.value});

    }

    handleCommentSubmit = () => {
        const comments = this.state.comments.slice();
        const newComment = this.state.value;
        comments.push(newComment);
        this.setState({comments: comments, value: ""})
        // console.log(comments) //array of 3 objects
    }


    handleUpdateLikes = (e) => {
        let x = e.target;
        e.target.style.color = "red";
        // setInterval((e) => {return x.style.color = "black"},500)

        // this.setState({Arr: this.state.Arr.map((num) => {return num + 1})})

        this.setState({Arr: this.state.Arr.map((num) => {
           
            let count = 0;

            if (count === 0) {
               
                return (
                    
                    count++,
                    num = num + 1,
                    console.log(count)
                )
               
            } else {
                return num = num -1,
                e.target.style.color = "black";
            }

         
        }
        )})
       
    }
        
     
    
    
    render() {
        const dateToFormat = '1976-04-19T12:59-0500';
      
        return (
            
                <div> 
                    <div className="comment-icons">
                        <i onClick={this.handleUpdateLikes} class="fas fa-heart"></i>
                        <i class="far fa-comment"></i>
                        <i class="far fa-bookmark bookmark"></i>
                    </div>

                    <div className="likes">{`${this.state.Arr} likes`}</div>
                    
                    {this.state.comments.map((comment, index) => {
                     
                        return (
                            
                            <div key={comment.username + index} className="comment-username">
                                {comment.username}
                                <span className="comment-text" >{comment.text}</span>
                            </div>
                                )})}
                    {/* <Moment className="moment"></Moment> */}
                    <div className="comment-container">
                       <input onChange={this.handleNewComment} name='value' value={this.state.value} className="comment-input" type="text" placeholder="Add a comment..."></input><span><button onClick={this.handleCommentSubmit} className="commentBtn">...</button></span>
                    </div>
                </div>

                ) 

            } 
            
}


//########Previous Code when CommentSection was Functional Component and Did not have likes updating function  ########

// const CommentSection = props => {
    
   
    
//     const handleUpdateLikes = (e) => {
      
        
//         let x = e.target;
//         e.target.style.color = "red";
//         setInterval((e) => {return x.style.color = "black"},2000)
         
//         props.updateL();
        
        
//     }
    
    
//     return (

//        <div> 
//             <div className="comment-icons">
//                 <i onClick={handleUpdateLikes} class="fas fa-heart"></i>
//                 <i class="far fa-comment"></i>
//             </div>
//             <div className="likes">{`${props.likes} likes`}</div>
//             {props.comments.map((comment) => 
//                     {return (
                        
//                         <div className="comment-username">
//                             {comment.username}
//                             <span className="comment-text" >{comment.text}</span>
//                         </div>
                   
//                     )})}
//             <div className="comment-container">
//                 <input className="comment-input" type="text" placeholder="Add a comment..."></input><span><button className="commentBtn">...</button></span>
//             </div>
//        </div>
//     ) 
// }


export default CommentSection;