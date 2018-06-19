import React from 'react';

const AddComment = props => {

	  return (
        <div className="">
            <form className="" onSubmit={this.submitComment}>
                <input placeholder="Add a comment..." onChange={props.inputComment} value={props.comment}/>
            </form>
        </div>
      )

    }

export default AddComment;