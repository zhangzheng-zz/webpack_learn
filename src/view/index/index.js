'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

class TestReact extends React.Component {
  render() {
    return (
      < div className="index" >
        我是index
      </div >
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)
