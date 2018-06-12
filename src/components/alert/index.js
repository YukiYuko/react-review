import React from 'react'
import PropTypes from 'prop-types'
import './index.less'
class Alert extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    content: PropTypes.string,
    success: PropTypes.func
  };
  static defaultProps = {
    content: '这是默认内容',
    success: function(){}
  };
  state = {
    title: '提示',
    btn: '确定',
    show: false
  };
  componentWillReceiveProps (nextProps) {
    this.setState({
      show: nextProps.show
    })
  }
  success = () => {
    this.setState({
      show: false
    });
    const {success, hideAlert} = this.props;
    hideAlert();
    success && success()
  };
  render () {
    let {title, btn, show} = this.state;
    const {content} = this.props;
    return show ? (
      <div className="dialog-wrapper">
        <div className="dialog-box">
          <div className="dialog-hd">
            <strong>{title}</strong>
          </div>
          <div className="dialog-bd">{content}</div>
          <div className="dialog-ft border-half-top" onClick={this.success.bind(this)}>{btn}</div>
        </div>
      </div>
    ) : ''
  }
}

export default Alert;
