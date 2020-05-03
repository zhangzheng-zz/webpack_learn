'use strict'
const React = require('react')
require('./search.less')


class TestReact extends React.Component {
  constructor() {
    super()
    this.showFgragment = this.showFgragment.bind(this)
    this.state = {
      isShow: false
    }
  }
  showFgragment() {
    console.log("点击")
    this.setState({
      isShow: true
    })
  }
  render() {
    return (
      <div className="search">
        我是search
        <div onClick={this.showFgragment}>点击</div>
        {this.isShow ? <div>显示</div> : null}
      </div>
    )
  }
}

module.exports = <TestReact />
