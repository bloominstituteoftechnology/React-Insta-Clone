import React from 'react';

const AddComment = () => {
    return (
        <div className='add-container'>
            <form>
                <input type='text' placeholder = 'Add a comment...' />
            </form> 
        </div>
    );
};

addNewComment = (event, comment, index) => {
    event.preventDefault();
    const newData = this.state.dummyData.slice();
    newData[index].comments.push({username: this.state.placeHolder, text: comment});
    this.setState({dummyData: newData});
  }

export default AddComment;