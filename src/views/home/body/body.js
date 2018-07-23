import React, { Component } from 'react'
import Scroll from 'react-bscroll'
import TemplateList from '../../template/news/index'
import 'react-bscroll/lib/react-scroll.css'
import './body.less'
class HomeBody extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div className="scroll-warp">
        <Scroll ref='scroll'>
          <TemplateList/>
        </Scroll>
      </div>
    )
  }
}

export default HomeBody