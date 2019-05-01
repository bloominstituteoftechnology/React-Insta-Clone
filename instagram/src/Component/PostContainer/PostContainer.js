
import React from "react";
import heart from '../../images/Instagram-Heart.png';
import './PostContainer.css';
import PropTypes from 'prop-types';
import { CommentSection } from "../CommentSection/CommentSection"

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.item.likes,
            comments: this.props.item.comments,
            input: ''
        }
    }


    incrementLike = () => {
        this.setState({ likes: this.state.likes + 1 });
    };

    submitComment = (e) => {
        e.preventDefault()
        this.setState({
            comments: [...this.state.comments, {
                username: 'Manju',
                text: this.state.input
            }],
            input: ''
        })

    }

    updateInput = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div className="mainpart" >
                <div className="headerbar">
                    <img className="secondimg" src={this.props.item.thumbnailUrl} alt="this.props.item.username" />
                    <span className="username">{this.props.item.username} </span>
                </div>
                <img className="firstimg" src={this.props.item.imageUrl} alt="insta image"/>

                <div>
                    <span onClick={this.incrementLike}>
                        <img className="likepic" src={heart} alt="" />
                    </span>
                    <span className="commenttext"><i className="far fa-comment "></i></span>
                </div>
                <span>{this.state.likes}<span className="text">likes</span></span>

                <CommentSection comments={this.state.comments} />
                <form onSubmit={this.submitComment}>
                    <input className="footer"
                        type='text'
                        placeholder='Add a comments ..'
                        value={this.state.input}
                        onChange={this.updateInput} />
                </form>
            </div>
        )
    }

}

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default PostContainer



// {
//     username: "philzcoffee",
//     thumbnailUrl:
//       "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

//     imageUrl:
//       "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
//     likes: 400,
//     timestamp: "July 17th 2017, 12:42:40 pm",
//     comments: [
//       {
//         username: "philzcoffee",
//         text:
//           "We've got more than just delicious coffees to offer at our shops!"
//       },
//       {
//         username: "biancasaurus",
//         text: "Looks delicious!"
//       },
//       {
//         username: "martinseludo",
//         text: "Can't wait to try it!"
//       }
//     ]
//   }




