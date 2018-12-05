import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`

export const LoginBox = styled.div`
  margin: 100px auto;
	padding-top: 20px;
	width: 400px;
	height: 180px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
	display: block;
	margin: 10px auto;
	padding: 0 10px;
	width: 200px;
	height: 30px;
	line-height: 30px;
	color: #777;
`

export const Button = styled.div`
  margin: 10px auto;
  border-radius: 15px;
	width: 220px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: #fff;
	background: #3194d0;
`
