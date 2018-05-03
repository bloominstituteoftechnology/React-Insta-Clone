import React from 'react';
import CommentSection from '/Users/samar/Documents/js/lambdaschool/course/React-Insta-Clone/src/components/CommentSection/CommentSection.js'
import { Card, CardBody } from 'reactstrap';

const PostContainer = props => {
    return(
        <div>
            <Card>
                <CardBody>
                    <CommentSection key={props.boo.timestamp} boo={props.boo.comments} />
                </CardBody>
            {/* ask about props.boo . why boo? */}
            </Card>
        </div>
    );
}


export default PostContainer;
