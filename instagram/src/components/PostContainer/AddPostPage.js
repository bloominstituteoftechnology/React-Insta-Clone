import React from 'react';

export default function AddPostPage({submitPost, addPost}) {

  return (

    <>

      <h1>Add Post</h1>

      <form>

        <input type='file' id='post' accept="image/x-png,image/gif,image/jpeg" />
        <button type='button' onClick={() => submitPost(document.querySelector('#post').files[0])}>Submit</button>

      </form>

      <button onClick={() => addPost(false)}>Go back</button>

    </>

  );

}
