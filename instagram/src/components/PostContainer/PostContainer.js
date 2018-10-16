import React from 'react';
import '../ig.css';
import CommentSection from '../Comments/CommentSection.js';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.postObjectArray.likes
        }
    }

    addLikes = (event) => {
    
    }

    render() {
    return (
        // postCard
        <div className="postCard">
            <div className="card-header">
                <img src={this.props.postObjectArray.thumbnailUrl} alt="thumbImage" className="card-thumbnail"/>
                {this.props.postObjectArray.username}
            </div>

            <div className="card-body">
                <img src={this.props.postObjectArray.imageUrl} alt="bodyImage" className="card-image"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANCSURBVGhD7dlZyA1hHMfx176UJSER2ZIoFyQSsl9wwZ2ilCVvFMkF4kLEHSk33EhZk6WQRJKdCyWyXFiylzVLRNbvT0ZPz/mfc2aemfedML/6XLzTPP8z78yZmf/znJoiRYoU+SfSBOOwDntwFFuwEF2QJI0wAaq1H0ewFfPRFXWSBpiBB/hRxjfsQm9USmPMxmNYdUS1tiPTf6gFdIDWB1o+QmdV/7yf7jgPa5zlFcYjdRriIKwPqWYz9PWJMgjPYO1byWeMQKoshVU8Lt1HTTESb39vC6ET0A5B6YA0Hx45hDfethDrEZRFsArmRSdDT83EOQGrYJ7GInEewSqWp7lIHD0trGJ5WobEeQ6rWJ5mIXFuwCqWp6CX425YxfLyFW2ROHNgFczLBQRF3ewXWEXrwktcxkNnm+ssFLU9g6EnmDqPeRiGZiibvbCKZukFpsJtMifjNfx9d+Cpty2ih9MqqMktyXBYg7KiKz4EVsYg5BVwE+ZUYh+sAVnQ9KBSlsAaV41e5iUTvR74AGtAWtNRKeqtbsEaq6t5HXedba5jKIluKGvntIaiWqYh2v87jmMKWiHKQFyBW1tKejPdiAfg75iWJlvVoptXne9V6GlVLm1wB25986vbGtfg7pjWRMSJbvw4LfxMuPXvw4wWA8o950MsR5bpA/8zykY3v/5Tf0CIU8gy/eDW1z1VMVoNuQd3UAgt+2S55KP1Nbe+7pmq6YbbcAeGUJuRRZrDP7nbECvtcRLu4KT08tJBpM0G+LXVg8WOVg43wi+ShBY60mQB/JqnERQ9+kI7AK1b6T2QNDqJq+HXU4/WH8HpC7XifmHXO2ix2t++CUnSC+WWX2uROnpxrYE1l9GcQgegTsE/CD0qR6Fa9GJeifdwx0fWItMMwDmouBa29XRy14J16T/BPYgn0Aqnlc5YAU3A3DERnYisX7B/ojOvpq/nr79Kow/2D+gSWkJRn6Xx+u1Ec3Z/34gmZ5OQW3SzXoR/YPranYF/xXy6CmoMOyL36M0esoZ2GHG653rNaMSZ1uoK7USceUxu0WxRXxX/4NWP6auml17wbyT1ncXQweu3SvVJ+q2xE/7KBK0mFilS5L9OTc1PNX7bTSbdDT0AAAAASUVORK5CYII=" 
                alt="likesbutton" className="card-likes" onClick={this.addLikes}/> {this.state.likes}
                <CommentSection comments = {this.props.postObjectArray.comments}/>
            </div>
        </div>
    )
}
}

PostContainer.propTypes = {
    dummyData: PropTypes.array.isRequired
};

export default PostContainer;