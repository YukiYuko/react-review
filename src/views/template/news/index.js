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
    const {item} = this.props;
    const Temp1 = () => (
      <div className="newsItem_temp1">
        <div className="title">{item.title}</div>
        <div className="image">
        {
          item.images.map((url) => (
            <div className="image_item"><img src={url}/></div>
          ))
        }
        </div>
        <div className="text">
          <span className="from">来源: {item.source}</span>
          <span className="discuss">评论: {item.comment}</span>
          <span className="time">{item.time}</span>
        </div>
      </div>
    );
    const Temp2 = () => (
      <div className="newsItem_temp2">
        <div className="title">{item.title}</div>
        <div className="image">
          <div className="image_item image_item_big"><img src={item.images[0]}/></div>
        </div>
        <div className="text">
          <span className="from">来源: {item.source}</span>
          <span className="discuss">评论: {item.comment}</span>
          <span className="time">{item.time}</span>
        </div>
      </div>
    );
    return (
      <div className="newsItem">
        {
          item.images.length >= 2 ? <Temp1/>: <Temp2/>
        }
      </div>
    )
  }
}

export default NewsItem