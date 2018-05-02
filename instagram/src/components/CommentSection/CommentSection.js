import React from 'react';

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: [],
            newCom: ''

        }

    }
    componentDidMount() {
        this.setState({
            comment: this.prop.comment
        })
    }

    handleAddComment = x => {
        this.setState({
            [x.target.name]: x.target.value
        })
    }

    handleSubmitComment = () => {
        const comment = this.state;
        comment.push({
            user: 'Joe_Dirt',
            text: this.state.newCom
        })
        this.setState({
            comment, newCom: ""
        })
    }
    //render()
}
export default CommentSection;