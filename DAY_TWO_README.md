## Day II
### Objectives (Day II)
* Describe the component life-cycle and demonstrate the ability to use the built in life-cycle methods

### Daily Setup (Day II)
At this point you should have a working app with a component tree that is setup kind of like this:
![alt tag](/assets/InstaClone-componentStructure.png)

Your data should be imported to `app.js`, and then passed as props to each `PostContainer`, and then eventually down to a `CommentSection`. This means that `app.js` is handling the "state" (data) of the app. Any changes we make to the data needs to happen where the state handler is, not necessarily where the data is being displayed. For this part of the project, we will work on sending data up and down the component tree, and then reacting to data changes in a component's life-cycle methods.

### Description (Day II)
*
