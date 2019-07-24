import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

// export const Logo = styled.a.attrs({ href:'/' })
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`

export const Nav = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding-right: 70px;
  width: 960px;
  height: 100%;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  margin: 9px 0 0 20px;
  padding: 0 30px 0 20px;
  border: none;
  border-radius: 19px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  color: #666;
  background: #eee;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  padding: 0 20px;
  width: 240px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    float: left;
    display: block;
    margin-right: 2px;
    font-size: 12px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  float: left;
  display: block;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
  color: #787878;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  line-height: 38px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
