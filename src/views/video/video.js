import React, { Component } from 'react'
import './video.less'
import Alert from '../../components/alert'
class Video extends Component {
  // constructor (props) {
  //     super(props)
  // }
  state = {
    show: true
  };
  render () {
    return (
      <div className="video">
        <Alert show={this.state.show}/>
        <h2>西瓜视频</h2>
      </div>
    )
  }
}

export default Video