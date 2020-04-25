'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

import { common } from '../../../common'

class TestReact extends React.Component {
  render() {
    console.log(common())
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
