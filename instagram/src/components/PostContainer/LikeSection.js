import React from 'react'
import ReactDOM from 'react-dom'

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
                {this.props.likes} likes
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