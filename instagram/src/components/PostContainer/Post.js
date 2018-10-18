import React from 'react'
import ReactDOM from 'react-dom'
import LikeSection from './LikeSection'

class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            likes: props.likes

        }
    }


    render(){
         return(
        <div>
        <img alt="" src={this.props.post} />
        <div>{this.props.timestamp}</div>
        <LikeSection likes={this.state.likes} />
        </div>
    )
    }
}

   
    
export default Post 