import React from 'react'

export default class CommentSection extends React.Component {


    getComment() {
        return this.props.comments.map((comment)  => <Comment {...comment}/>);
    }

    render() {
        return (
            <div>
                {this.getComment()};
            </div>
        );
    }

}

function Comment(props) {
    return(
        <div>{props.username}
            {props.text}
        </div>
    );
}
