import React, { Component } from 'react';
import Home from '../views/home/home.js'
import Video from '../views/video/video.js'
import Center from '../views/center/center.js'
import Favorite from '../views/favorite/favorite.js'
import '../asset/reset.css'
import {
  Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
class RouterRoute extends Component {
  render() {
    return (
      <Router history = {history}>
        <div>
          <Route exact path="/" render={() => <Redirect to="/home" />}/>
          <Route exact path="/home" name="home" component={Home}/>
          <Route exact path="/video" name="video" component={Video}/>
          <Route exact path="/favorite" name="favorite" component={Favorite}/>
          <Route exact path="/PersonPin" name="PersonPin" component={Center}/>
          <Route render={() => <div>Not Found</div>} />
        </div>
      </Router>
    );
  }
}

export default RouterRoute;
