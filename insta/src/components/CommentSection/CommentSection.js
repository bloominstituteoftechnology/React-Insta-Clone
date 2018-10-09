import React from 'react';
import AddComment from './addComment'


class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[],
            newComment:'',
            likes:0
        }
    
    }
    componentDidMount(){
        this.setState({
            comments: this.props.commentArray,
            like: this.props.likes})
    }
    addNewComment = e =>{
        if (this.state.newComment) {
            this.setState({
                comments: [...this.state.comments,
                    {
                        username: "EpikIsKaos",
                       text: "stuff"
                    }
                ]
            })
        e.currentTarget.value=null;
        }
    }
    changeHandler= e =>{
        this.setState({newComment: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        if (e.keyCode=== 13 && e.shiftKey === false){
            if(this.state.newComment.length >=1)
            e.preventDefault();
            this.addNewComment(e);
            this.setState({newComment:''})
        }
    }
   render(){
    return(
        <div>
            {this.props.commentArray.map(item =>{
                return(
                    <div key={item.text}>
                        <div>
                            <h3>{item.username}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
            <AddComment submit={this.submitHandler} change={this.changeHandler} value={this.state.newComment} />
        </div>
    )}
}
export default Comments;