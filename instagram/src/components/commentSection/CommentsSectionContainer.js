import React from 'react';

class CommentsSectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.comments,
            comment:''
         };
    }
    componentDidMount(){
        const id = this.props.postId;
        if (localStorage.getItem(id)){
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        }else{
        
        }
    }
    render() { 
        return (  );
    }
}
 
export default CommentsSectionContainer;