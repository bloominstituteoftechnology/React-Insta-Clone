## Day II
### Objectives (Day II)
* Understand the concept of React component lifecycles, along with the major lifecycle methods such as `render`, `componentDidMount`.

### Daily Setup (Day II)
At this point you should have a working app with a component tree that is setup kind of like this:
![alt tag](/assets/InstaClone-componentStructure.jpg)

* Your data should be imported to `app.js`, and then passed as props to each `PostContainer`.
* Each `PostContainer` should then be passing data to a `CommentSection` via props as well.
* The props being passed to each component should be typed checked using `propTypes` and `defaultProps`.

### Description (Day II)
* For this part of the project you are going to use React's lifecycle methods to get data and to render the components.
* As data comes into the component, you will set it to the component's state, then pass it down to the child components.
* Finally, you will build out the functionality for the 'Add a comment' input by using events to pass data back up to the parent components.

#### Day II MVP Requirements
* In `app.js` use `componentDidMount()` to set your data to the component's state. Use `this.state` to pass data to your `PostContainer` component.
* Create a function in `app.js` called `addNewComment` that takes in an event and an index number. The function will add the comment that is on the event object to the post that is at that index number. 
* Pass th `addNewComment` function down the component tree to where ever you have your 'Add a comment...' input. 
* The 'Add a comment...' input should be wrapped in a `<form></form>` element. Using that form's `onSubmit` event handler, invoke the `addNewComment` function and pass it the required arguments it needs to add a new comment.
* Update your state with the new comment (This should trigger your component tree to "re-render" with your new comment on that post).

#### Day II Stretch Problems
* Persist your data using `localhost`. If done correctly, you will be able to refresh your page and still see your new comments.
* Add the ability to delete a comment from your data. If your data is in `localhost`, make sure to delete it from there as well.

