import React from 'react';

import { NewCommentSection } from '../Styles/Styles';

function NewComment(props) {
    return <NewCommentSection>
        <form onSubmit={(event) => {props.addComment(event, props.postIndex)}}>
            <input
                className="newcomment"
                name='newComment'
                placeholder="Add a comment..."
                value={props.newComment}
                onChange={props.changeHandler}
            />
        </form>
        <button onClick={(event) => {props.addComment(event, props.postIndex)}}>&#xb7;&#xb7;&#xb7;</button>
      </NewCommentSection>;
}

export default NewComment;