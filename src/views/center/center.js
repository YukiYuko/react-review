import React, { Component } from 'react'
class Center extends Component {
  // constructor (props) {
  //     super(props)
  // }
  render () {
    return (
      <div className="home">
        <h2 className="title">个人中心</h2>
        <style jsx>{`
          .title {
            margin: 10px; font-size: 20px; color: red;
          }
    `}</style>
      </div>
    )
  }
}

export default Center