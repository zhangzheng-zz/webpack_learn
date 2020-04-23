'use strict'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import './index.less'

class TestReact extends React.Component {
  render() {
    return (
      <div>
        <p className="pLabel">我是p标签</p>
        TestReact
      </div>
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)

class testJs {
  constructor(name) {
    this.name = name
  }
}

function testWp() {
  console.log('testWp')
}