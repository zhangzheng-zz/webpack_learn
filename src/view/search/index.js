'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'

import { common } from '../../../common'


class TestReact extends React.Component {
  render() {
    console.log(common())

    return (
      <div className="search">
        我是search
      </div>
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)
