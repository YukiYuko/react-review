import React, { Component } from 'react'
import './news.less'
class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1
    }
  }
  render () {
    const {type} = this.state;
    const temp1 = () => (
      <div className="newsItem_temp1">
        <div className="title">这是标题</div>
        <div className="image">
          <div className="image_item"></div>
          <div className="image_item"></div>
          <div className="image_item"></div>
        </div>
        <div className="text">
          <span className="from">清华社</span>
          <span className="discuss">评论: 10</span>
          <span className="time">2018-5-12</span>
        </div>
      </div>
    );
    const temp2= () => (
      <div className="newsItem_temp2">
        
      </div>
    );
    return (
      <div className="newsItem">
        {
          type === 1 ? temp1 : temp2
        }
      </div>
    )
  }
}

export default NewsItem