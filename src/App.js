import React, { Component } from 'react';
// 引入 store
import { Provider } from 'react-redux';
import store from './redux/store.js'
import PublicHeader from './components/header/header';
import PublicFooter from './components/footer/footer';
import Home from './views/home/home.js'
import Video from './views/video/video.js'
import Center from './views/center/center.js'
import Favorite from './views/favorite/favorite.js'
import './App.css';
import './asset/reset.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import BScroll from 'better-scroll'
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { AnimatedSwitch } from 'react-router-transition'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
class App extends Component {

  state = {
    list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  };

  componentDidMount () {
  }
  render() {
    return (
      <Provider store={store}>
        <Router history = {history}>
          <Route render={ ({location}) => {
            return (
              <div className="App">
                <CssBaseline/>
                <PublicHeader/>
                <div className="warp">
                  <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                      <Switch location={location}>
                        <Route exact path="/home" name="home" component={Home}/>
                        <Route exact path="/video" name="video" component={Video}/>
                        <Route exact path="/favorite" name="favorite" component={Favorite}/>
                        <Route exact path="/PersonPin" name="PersonPin" component={Center}/>
                        <Route render={() => <div>Not Found</div>} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
                <PublicFooter/>
              </div>
            )
          }}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
