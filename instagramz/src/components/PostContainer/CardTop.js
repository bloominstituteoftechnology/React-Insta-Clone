import React from 'react';

import HeaderName from './HeaderName';
import ImageThumb from './ImageThumbnail';

import CommentSection from '../CommentSection/CommentSection';
import CardContent from './CardContent';

function CardTop(props) {
    
    return (
      <div>
      
        <div>
          
          <div className='athing'>
            <ImageThumb thumb={props.thumb} />
          </div>
          <div className='bthing'>
            <HeaderName name={props.name} />
          </div>

        </div>

        <div>

          <div className ='cthing'>
                      
            <CardContent contenty={props.contenty} likes={props.likes} />
          </div>

        </div>

        <div>

          <div className ='dthing'>
                      
            <CommentSection 
              comments={props.comments} 
              textadd={props.textadd} 
              changeIt={props.changeIt}
              addComment={props.addComment}
              />
            
          </div>

        </div>

      </div>
    );
  }
  
  export default CardTop;