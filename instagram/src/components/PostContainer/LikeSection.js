import React from 'react'
import ReactDOM from 'react-dom'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LikeSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes: this.props.likes
        }
    }
    addLike = () => {
        let likes = this.state.likes + 1
        this.setState({
            likes: likes 
        })
    }
    render(){
        return(
        <div>
        <span onClick={this.addLike}>
        <FontAwesomeIcon icon={faHeart} />
        {this.state.likes} likes
        </span>
        </div>
        )
    }
}

// const LikeSection = (props) => {

    
//     return(
//         <div>
//         {props.likes} likes
//         </div>
//     )
// }

export default LikeSection