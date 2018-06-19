import React from 'react';
import './style.css';
import InputSection from './InputSection';

const CommentSection = (props) => {

    console.log('comments sections: ', props)
    return (
        <div className='commentArea'>
            {props.passedItem.map((item, i) => {
                return (
                    <div key={i} className='postArea'><strong>{item.username}</strong> {item.text}</div>
                )
            })}
            
            <hr />
             <div className='footerCom'>
                <InputSection comments={props.comments} changeInput={props.onchangeProps}  clickButton={props.onclickProp}/>
            </div>
            
        </div>
    )
}

export default CommentSection;

