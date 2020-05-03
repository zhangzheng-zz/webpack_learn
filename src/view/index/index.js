import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

import imgSrc from '../../image/bg.jpg'

class TestReact extends React.Component {
  render() {
    return (
      // a = b errors
      <div className="index">
        我是index
        <img src={imgSrc} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)
