import React, { Component } from 'react';
// 引入 store
import { Provider } from 'react-redux';
import store from './redux/store.js'
import PublicHeader from './components/header/header';
import PublicFooter from './components/footer/footer';
import Home from './views/home/home.js'
import Center from './views/center/center.js'
import Favorite from './views/favorite/favorite.js'
import './App.css';
import './asset/reset.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import BScroll from 'better-scroll'
import {
  Router,
  Route
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
          <div className="App">
            <CssBaseline/>
            <PublicHeader/>
            <div className="warp">
              <Route exact path="/home" name="home" component={Home}/>
              <Route exact path="/favorite" name="favorite" component={Favorite}/>
              <Route exact path="/PersonPin" name="PersonPin" component={Center}/>
            </div>
            <PublicFooter/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
