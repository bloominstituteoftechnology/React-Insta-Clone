import React from 'react';
import './PostContainer.css';


class PostLikes extends React.Component{
    constructor(props){
        super(props);
        this.state={

            likes: props.likes,
        };
        console.log(this.state);
}

increment = prevState =>{
    this.setState(prevState => (
        {likes: prevState.likes +1}
        ));
};

    render(){
        return(
            <div>
                 <div className='icons-comment'>
                    <div className="icons-c">
                        <i className="fa fa-heart-o" onClick= {this.increment} />
                    </div>
                    <div className="icons-c">
                        <i className="fa fa-comment-o" />
                    </div>
                </div> 
                <div className ='likes'>
                    <p>{this.state.likes} likes</p>
                </div>
            
            

            </div>
        );
    }

}



// const PostLikes = props =>{
//     return(
//         <div>
//          {props.likes}
//         </div>
//     );
    
// };



export default PostLikes;