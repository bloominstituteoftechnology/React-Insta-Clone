import React from 'react';

const AddComment = props => {

	  return (
        <div className="">
            <form className="" onSubmit={props.submitComment}>
                <input placeholder="Add a comment..." onChange={props.inputComment} value={props.comment}/>
            </form>
        </div>
      )

    }

export default AddComment;

// // v1.1
// function breadthFirstSearch(obj, searchTerm) {
//   // console.log(obj);
//   let q = Object.values(obj);
//   // console.log(q);
//   while (q.length > 0) {
//     let value = q.shift();
//     // console.log(value);
//     if (value === searchTerm) return true;
//     if (typeof value === 'object' ) q = q.concat(Object.values(value));
//     // console.log(q);
//   }
//   return false;
// }