import React, { Component } from 'react'
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'
import './body.less'
class HomeBody extends Component {

  render () {
    return (
      <div className="scroll-warp">
        <Scroll ref='scroll'>
          111
        </Scroll>
      </div>
    )
  }
}

export default HomeBody