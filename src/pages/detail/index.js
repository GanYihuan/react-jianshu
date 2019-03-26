/* eslint-disable no-unused-vars */
import React from 'react'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
/* get router all content */
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    // console.log(this.props.match.params.id)
    const { content, title } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        {/* dangerouslySetInnerHTML: Will not be escaped */}
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }

  /* async, get ajax async data */
  componentDidMount() {
    const { getDetail } = this.props
    getDetail(this.props.match.params.id)
  }
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail))
