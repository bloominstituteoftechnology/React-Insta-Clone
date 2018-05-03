import React, {Component} from 'react';
import './CommentSection.css'


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes, 
            Arr: []
        }
        // console.log(this.state.Arr)
    }
   
    componentDidMount() {
        this.state.Arr.push(this.state.likes)
        this.setState({Arr: this.state.Arr})
    }
    
    handleUpdateLikes = (e) => {
        let x = e.target;
        e.target.style.color = "red";
        // setInterval((e) => {return x.style.color = "black"},500)

        this.setState({Arr: this.state.Arr.map((num) => {return num + 1})})
        
        }
    
    render() {
        
        return (

                <div> 
                    <div className="comment-icons">
                        <i onClick={this.handleUpdateLikes} class="fas fa-heart"></i>
                        <i class="far fa-comment"></i>
                        <i class="far fa-bookmark bookmark"></i>
                    </div>

                    <div className="likes">{`${this.state.Arr} likes`}</div>
                    
                    {this.props.comments.map((comment, index) => {
                        return (
                            <div key={comment.username + index} className="comment-username">
                                {comment.username}
                                <span className="comment-text" >{comment.text}</span>
                            </div>
                                )})}

                    <div className="comment-container">
                        <input className="comment-input" type="text" placeholder="Add a comment..."></input><span><button className="commentBtn">...</button></span>
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