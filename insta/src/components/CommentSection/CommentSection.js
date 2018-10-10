import React from 'react';
import AddComment from './addComment'
import "./CommentSection.css"


class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[],
            newComment:'',
            likes:0,
            liked: false
        }
    
    }
    componentDidMount(){
        this.setState({
            comments: this.props.commentArray,
            likes: this.props.likes})
    }
    addNewComment = e =>{
        if (this.state.newComment) {
            this.setState({
                comments: [...this.state.comments,
                    {
                        username: "EpikIsKaos",
                       text: this.state.newComment
                    }
                ]
            })
        }
    }
    changeHandler= e =>{
        this.setState({newComment: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
            this.addNewComment(e);
            this.setState({newComment:''})
    }
    likeMore =(e)=>{
        this.setState({liked:!this.state.liked})
        
    }
   render(){
    return(
        <div>
             <>

                 <i className="far fa-heart fa-2x like-icon" onClick={this.likeMore} ></i>
                 <i className="far fa-comment fa-2x fa-flip-horizontal"></i>
             </>
             <>
             <h1>{this.state.liked?this.state.likes+1:this.state.likes} likes</h1>
             </>
            {this.state.comments.map(item =>{
                return(
                    <div key={item.text}>
                        <div>
                            <h3>{item.username}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
            <AddComment submit={this.submitHandler} change={this.changeHandler} val={this.state.newComment}/>
        </div>
    )}
}
export default Comments;