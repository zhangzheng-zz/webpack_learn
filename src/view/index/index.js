'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

class TestReact extends React.Component {

  constructor() {
    super()
    this.loadComponent = this.loadComponent.bind(this)
    this.state = {
      Text: null
    }
  }

  loadComponent() {
    import('../../component/Text')
      .then((Text) => {
        this.setState({
          Text: Text.default
        })
      })
  }

  render() {
    const { Text } = this.state
    return (
      <div className="index">
        我是index
        <button onClick={this.loadComponent}>点击加载动态组件</button>
        {
          Text ? <Text /> : null
        }
      </div>
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)
