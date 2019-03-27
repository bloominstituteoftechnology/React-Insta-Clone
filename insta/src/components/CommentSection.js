import React, { Component } from 'react';
// import SearchBar from './SearchBar';
// import PostContainer from './PostContainer';

class CommentSection extends Component{
    constructor(props){
        super(props);
        // console.log("inside CommentSection", props)
        this.state = {
            comments: props.passComment,
            commentText: ''
        };
        // console.log('inside comment section', props.updatePost())
    }
    handleInput = (event) => {
        this.setState ( {
            [event.target.name]: event.target.value
        }
        )
    }

    render() {
        return ( <>
                {this.state.comments.map((comments) => {
                    return (
                        <div key={comments.id} className="userComment">
                            <span>{comments.username}</span>
                            <span>{comments.text}</span>

        {/* user userComment to show username & text located in data comments */}
                        </div>
                    )
                    })}
                    <form onSubmit={(event) => this.props.updatePost(event, this.state.commentText)}>
                        <input 
                        placeholder ="Comment"
                        name="commentText" 
                        value={this.state.commentText}
                        onChange={this.handleInput}
                        >
                        </input>
                    </form>
                    
            </>
        )
    }
}


 export default CommentSection;


//  long way func returning func returning 1
//  function getOne() {
//      return  function() {
//          return 1;
//      }
//  }

//  one line arrow func func returning func returning 1
//  const getOne = () => () => 1
// getOne(); 
// returns function()