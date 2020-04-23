'use strict'
import React from 'react'
import ReactDOM from 'react-dom'

import Image from './image/beautifulGirl.jpg'
import './style/index.less'

class TestReact extends React.Component {
  render() {
    return (
      <div>
        处理图片和字体：file-loader
        <p className='search'>字体字体</p>
        <p className='search'>加一行字</p>
        <img src={Image} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)
