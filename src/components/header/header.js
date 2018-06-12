import React, { Component } from 'react';
import actions from '../../redux/actions/com'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
    fontSize: '0.32rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class PublicHeader extends Component {
  // constructor (props) {
  //     super(props)
  // }
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
const component =  withStyles(styles)(PublicHeader);

export default connect(
  state=>state,
  actions
)(component);