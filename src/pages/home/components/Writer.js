import React from 'react'
import { PureComponent } from 'react'
import { WriterWrapper } from '../style'

class Writer extends PureComponent { // PureComponent has invoked shouldComponentUpdate()
  render() {
    return <WriterWrapper>HomeWork</WriterWrapper>
  }
}

export default Writer
