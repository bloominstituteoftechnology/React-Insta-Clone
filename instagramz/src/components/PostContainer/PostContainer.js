import React from 'react';
import ContainerParts from './ContainerParts';

import PropTypes from 'prop-types';

function PostContainer (props) {
    
        return (
            <div>
                

                <div className='postmain'>
                    
                    <h1>Current Posts</h1>
                    <h1>{props.content.map((stuff, index) => {
                        return <ContainerParts key={index} 
                        stuff={stuff}  
                        textadd={props.textadd} 
                        changeIt={props.changeIt}
                        addComment={props.addComment}
                        />
                    })}</h1>

                    

                </div>
            
            </div>

        )
    
}

PostContainer.propTypes = {
    content: PropTypes.array
  }


export default PostContainer;