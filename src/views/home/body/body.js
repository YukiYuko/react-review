import React, { Component } from 'react'
// import Scroll from 'react-bscroll'
import TemplateList from '../../template/news/index'
import { Facebook } from 'react-content-loader'
// import 'react-bscroll/lib/react-scroll.css'
import './body.less'
class HomeBody extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    const MyFacebookLoader = () => <Facebook />
    return (
      <div className="scroll-warp">
        <div className="scroll-content">
          {
            !this.props.list.length ? 
            <MyFacebookLoader/> :
            this.props.list.map((item, index) => {
              return <TemplateList item={item} key={index}/>
            })
          }
          </div>
      </div>
    )
  }
}

export default HomeBody