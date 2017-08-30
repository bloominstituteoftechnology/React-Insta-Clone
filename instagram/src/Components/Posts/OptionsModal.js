import React from 'react'
import Dialog from 'material-ui/Dialog'
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: 550,
    background: theme.palette.background.paper,
    textAlign: 'center'
  },
});

function OptionsModal({open, onRequestClose, classes}) {
  return (
    <Dialog open={open} onRequestClose={onRequestClose}>
      <List className={classes.root}>
      <ListItem button>
        <ListItemText primary="Go to post" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Report inappropriate" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Embed" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Cancel" />
      </ListItem>
    </List>
    </Dialog>
  )
}

export default withStyles(styles)(OptionsModal);