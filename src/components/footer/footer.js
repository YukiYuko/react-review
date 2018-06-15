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
import "./footer.less"

const styles = {
  root: {
    width: '100%'
  },
  footBox:{
    bottom: 0,
    top: 'auto',
    fontSize: '0.3rem'
  },
  label: {
    fontSize: '0.3rem !important'
  },
  wrapper: {
    fontSize: '0.3rem'
  },
  iconOnly: {
    fontSize: '0.3rem'
  },
  selected: {
    fontSize: '0.3rem'
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
          <BottomNavigationAction className="btn_label" label="首页" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction className="btn_label" label="西瓜视频" value="video" icon={<PlayCircleFilledIcon />} />
          <BottomNavigationAction className="btn_label" label="关注" value="favorite" icon={<FavoriteIcon />} />
          <BottomNavigationAction className="btn_label" label="个人中心" value="PersonPin" icon={<PersonPinIcon />} />
        </BottomNavigation>
      </AppBar>
    );
  }
}

PublicFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PublicFooter));