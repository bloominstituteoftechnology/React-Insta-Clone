import React from 'react';

import CardTop from './CardTop';

function ContainerParts (props) {

    
    return(
        <div className="contspacing">
            <CardTop
            name = {props.stuff.username} 
            thumb={props.stuff.thumbnailUrl}
            likes={props.stuff.likes}

            contenty={props.stuff.imageUrl} 
            comments={props.stuff.comments}
            textadd={props.textadd}
            changeIt={props.changeIt}
            addComment={props.addComment}
            />
            
            
        </div>
    )
    
}



export default ContainerParts;