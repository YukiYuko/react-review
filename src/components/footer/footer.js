import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AppBar from '@material-ui/core/AppBar';
import {withRouter} from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
  },
  footBox:{
    bottom: 0,
    top: 'auto'
  }
};

class PublicFooter extends React.Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push('/'+value);
  };
  componentDidMount () {
    console.log(this.props.history.location)
  }
  // goBack(){
  //   this.props.history.goBack();
  // }
  // goDetail(){
  //   this.props.history.push('/detail');
  // }
  // goDetailWithParam(item){
  //   this.props.history.push({pathname : '/cart',state:{item}});
  // }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <AppBar position="fixed" className={classes.footBox}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="首页" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction label="西瓜视频" value="video" icon={<PlayCircleFilledIcon />} />
          <BottomNavigationAction label="关注" value="favorite" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="个人中心" value="PersonPin" icon={<PersonPinIcon />} />
        </BottomNavigation>
      </AppBar>
    );
  }
}

PublicFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PublicFooter));