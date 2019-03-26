/* eslint-disable no-unused-vars */
import React from 'react'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
// import { BackTop } from './style'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

/* PureComponent has invoked shouldComponentUpdate() */
class Home extends PureComponent {
  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
            alt='banner-img'
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll
            ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
            : null
        }
      </HomeWrapper>
    )
  }

  /* async request */
  componentDidMount() {
    const { changeHomeData } = this.props
    changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    const { changeScrollTopShow } = this.props
    window.removeEventListener('scroll', changeScrollTopShow())
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    const { changeScrollTopShow } = this.props
    window.addEventListener('scroll', changeScrollTopShow())
  }
}

const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(Home)
