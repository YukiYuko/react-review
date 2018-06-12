import React, { Component } from 'react'
import BScroll from 'better-scroll'
import Body from './body/body'
import 'react-bscroll/lib/react-scroll.css'
import './home.less'
import api from '../../api/index'
class Home extends Component {
  // constructor (props) {
  //     super(props)
  // }
  state = {
    nav:[
      {id:1, name: '推荐'},
      {id:2, name: '视频'},
      {id:3, name: '热点'},
      {id:4, name: '社会'},
      {id:5, name: '娱乐'},
      {id:6, name: '军事'},
      {id:7, name: '科技'},
      {id:8, name: '汽车'},
      {id:9, name: '体育'},
      {id:10, name: '财经'},
      {id:11, name: '国际'},
      {id:12, name: '时尚'},
    ],
    current_id: 1
  };
  componentDidMount () {
    api.getNews().then((res) => {
      console.log(res);
    });

    // 初始化宽度
    this.init_width();
    // 初始化滚动
    this.scroll = new BScroll('.navigator',{
      scrollX: true,
      click: true
    });

  }
  init_width () {
    let len = document.querySelectorAll('.nav_link').length;
    let w = document.querySelectorAll('.nav_link')[0].clientWidth;
    document.querySelector('.navigator-scroll').style.width = len * w + 'px';
  };
  // 点击导航
  nav_link_click = (tabId) => {

    this.setState({
      current_id: tabId
    });
    this._adjust(tabId);
  };
  // 自适应导航
  _adjust (tabId) {
    const viewportWidth = this.refs.viewport.clientWidth;
    const tabListWidth = this.refs.tabList.clientWidth;
    const minTranslate = Math.min(0, viewportWidth - tabListWidth);
    const middleTranslate = viewportWidth / 2;
    const items = this.refs.tabList.children;
    let width = 0;
    this.state.nav.every((item, index) => {
      if (item.id === tabId) {
        return false
      }
      width += items[index].clientWidth;
      return true
    });
    let translate = middleTranslate - width;
    translate = Math.max(minTranslate, Math.min(0, translate));
    this.scroll.scrollTo(translate, 0, 300)
  }

  render () {
    const {nav, current_id} = this.state;
    return (
      <div className="home">
        <div ref="viewport" className="navigator">
          <div className="navigator-scroll" ref="tabList">
            {
              nav.map((item,index) => (
                <a href="javascript:;" onClick={() => this.nav_link_click(item.id)}
                   className={["nav_link", item.id === current_id?"active":null].join(' ')} key={index}>{item.name}</a>
              ))
            }
          </div>
        </div>
        {/*<Body/>*/}
      </div>
    )
  }
}

export default Home