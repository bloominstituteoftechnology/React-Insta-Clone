import React from 'react';

function CommentIcons(props) {
    return(
        <div>
            <button>
                <img 
                    className="icon"
                    src="instagram-new.png" 
                    alt="comment heart icon">
                </img>
            </button>

            <button>
                <img 
                    className="icon"
                    src="instagram-new.png" 
                    alt="comment post icon">
                </img>
            </button>
        </div>
    )
}

export default CommentIcons;