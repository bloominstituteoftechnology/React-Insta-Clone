import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input/Input';

import Comment from './Comment'
import OptionsModal from './OptionsModal'

const styles = theme => ({
  flexGrow: {
    flex: '1 1 auto'
  },
  input: {
    margin: theme.spacing.unit
  },
  cardText: {
    marginLeft: '0.5em',
    marginRight: '0.5em'
  },
  inputArea: {
    marginLeft: '0.5em'
  }
})

class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentInput: null,
      expanded: false,
      optionsOpen: false,
      iLike: false,
      likes: 0,
      comment: '',
      initialComment: '',
      comments: []
    }
  }

  componentWillMount = () => {
    let { likes, comments } = this.props
    const initialComment = comments[0].text
    comments = comments.slice(1, comments.length)
    const newState = Object.assign({}, this.state, {
      likes, initialComment, comments
    })
    this.setState(() => newState)
  }

  onKeyUp = (e) => {
    let newState = {}
    const charCode = (typeof e.which === "number") ? e.which : e.keyCode;
    if (charCode === 13) {
      let { comments, comment } = this.state
      if (comment) {
        comments = Array.from(comments)
        comments.push({username: 'phytertek', text: comment})
        newState = {comments, comment: ''}
        e.target.value = ''
      }
    } else {
      const { name, value } = e.target
      newState = {[name] : value}
    }
    newState = Object.assign({}, this.state, newState)
    this.setState(() => newState)
  }

  onExpand = () => {
    const expanded = this.state.expanded
    const newState = Object.assign({}, this.state, {expanded: !expanded})
    this.setState(() => newState)
  }

  onOptions = () => {
    const optionsOpen = this.state.optionsOpen
    const newState = Object.assign({}, this.state, {optionsOpen: !optionsOpen})
    this.setState(() => newState)
  }
  onLike = () => {
    let { iLike, likes } = this.state;
    !iLike ? likes++ : likes--
    const newState = Object.assign({}, this.state, {iLike: !iLike, likes})
    this.setState(() => newState)
  }

  setCommentInput = input => {
    const newState = Object.assign({}, this.state, {commentInput: input})
    this.setState(() => newState)
  };

  focusCommentInput = () => {
    this.state.commentInput.focus()
  }
  
  render() {
    const { 
      onKeyUp, 
      onExpand,
      onOptions,
      onLike,
      setCommentInput, 
      focusCommentInput,
    } = this
    const { classes } = this.props
    const { 
      iLike, 
      likes, 
      initialComment,
      comments, 
      expanded,
      optionsOpen
    } = this.state
    return (
      <div>
        <CardContent>
          <CardActions>
            <IconButton aria-label="liked" onClick={onLike}>
              {iLike ? 
                <Icon color="error">favorite</Icon>
                :
                <Icon>favorite_border</Icon>
              }
            </IconButton>
            <IconButton aria-label="like" onClick={focusCommentInput}>
              <Icon>chat_bubble_outline</Icon>
            </IconButton>
          </CardActions>
          <Typography type="body1" gutterBottom className={classes.cardText}> 
            {likes} likes
          </Typography>
          <Typography type="body2" gutterBottom className={classes.cardText}>
            {initialComment}
          </Typography>
          <Button dense onClick={onExpand}>{expanded ? 
            'Hide Comments' 
            : 
            `View all ${comments.length} comments`
          }</Button>
          <Collapse in={expanded} transitionDuration="auto" unmountOnExit>
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </Collapse>
          <div className={classes.inputArea}>
            <Input  
            style={{width: '90%'}}
              placeholder="Add a comment..."
              name="comment"
              inputRef={setCommentInput}
              onKeyUp={onKeyUp}
            />
            <IconButton 
              aria-label="more options" 
              style={{float: 'right'}} 
              onClick={onOptions}
            >
              <Icon>more_horiz</Icon>
            </IconButton>
          </div>
        </CardContent>
        <OptionsModal open={optionsOpen} onRequestClose={onOptions}/>
      </div>
    )
  }
}
export default withStyles(styles)(CommentSection)
