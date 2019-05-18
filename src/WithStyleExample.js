import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  blueButton: {
    backgroundColor: "#FFFFFF",
    margin: theme.spacing.unit
  }
});

const WithStyleExample = props => (
  <Button
    variant="outlined"
    size="small"
    color="primary"
    className={props.classes.blueButton}
    onClick={() => console.log('on click')}
  >
    {props.text}
  </Button>
);

export default withStyles(styles)(WithStyleExample);
