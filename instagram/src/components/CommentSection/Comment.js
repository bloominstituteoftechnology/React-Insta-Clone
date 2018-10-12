import React from 'react';
import * as comments from './commentComponents.js';
import * as globalStyles from '../../globalStyles.js';


let Comment = class extends React.Component {
    render() {
        return (
            <comments.Comment>
                <globalStyles.UserName
                    href={'https://example.com/users/'+this.props.username}
                >
                    {this.props.username}
                </globalStyles.UserName> <span>
                    {this.props.children}
                </span>
            </comments.Comment>
        )
    }
}

export default Comment;
