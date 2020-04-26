import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

import Validator from 'form-submit-validator'
const v = new Validator({
  num: {
    type: 'string',
    min: 2
  }
})
v.validate({
  num: "123"
}).then(res => {
  console.log(res)
  res.map(e => {
    !e.message && alert(e.errorMessage)
  })
}).catch(e => {
  console.log(e)
})



class TestReact extends React.Component {
  render() {
    return (
      <div className="index">
        我是index
      </div>
    )
  }
}

ReactDOM.render(
  <TestReact />,
  document.getElementById('root')
)
