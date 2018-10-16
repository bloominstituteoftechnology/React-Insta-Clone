import React from 'react';
import './postContainer.css';
import CommentSection from './CommentSection'


const PostContainer = (props) => {
    return(
        <div className='post-container'>
            <section className='top'>{/*User photo and name*/}
                
                <img className ='user-photo' src='http://static1.squarespace.com/static/55de736be4b0ff1e23d63b02/5a9e044ecd84a56e673fb916/5aa9af93f9619ada9282b632/1521069988072/PinkTooth2.0onWhiteLG.jpg?format=1000w'></img>
                <h2>Sweetooth</h2>
            </section>
            <section className='middle'>{/*Photo*/}
                <img src='http://images5.fanpop.com/image/photos/29600000/Sweet-Tooth-sweet-tooth-29645089-500-334.jpg'></img>
            </section>
            <section>
                <CommentSection />
            </section>
    </div>
    )
    
}

export default PostContainer