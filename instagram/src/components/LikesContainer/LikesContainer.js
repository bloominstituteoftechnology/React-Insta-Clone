import React from 'react';
import PropTypes from 'prop-types';
import './LikesContainer.css';


class LikesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
            clicked: false,
        }
    }

    changeLikes = () => {
        if (this.state.clicked) {
            return this.setState({
                likes: this.state.likes - 1,
                clicked: false,
            })
        } else {
            return this.setState({
                likes: this.state.likes + 1,
                clicked: true,
            })
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <React.Fragment>
                <i className={this.state.clicked ? "fas fa-heart likes-container" : "far fa-heart likes-container"} onClick={this.changeLikes}></i>
                <i className="far fa-comment likes-container"></i>
                <p className='likes-amount'>{this.state.likes} likes</p>
            </React.Fragment>
        );
    }
}

LikesContainer.propTypes = {
    likes: PropTypes.number,
}

export default LikesContainer;