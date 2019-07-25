import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style'

class Detail extends PureComponent {
  render() {
    const { content, title } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        {/* dangerouslySetInnerHTML: Will not be escaped */}
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
  componentDidMount() { // async, get ajax async data
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
