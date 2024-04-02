// Style your elements here

import styled from 'styled-components'

export const MainCont = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
`
export const LeftCont = styled.div`
  width: 50%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 50px;
`

export const LeftSubCont = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 40%;
  display: flex;
  padding: 50px;
  margin-top: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
`

export const LeftMainHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  border-bottom: 3px solid lightyellow;
`

export const LeftNumber = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-weight: bold;
  overflow-x: auto;
  width: inherit;
`

export const LeftName = styled.p`
  font-size: 15px;
  color: #ffffff;
  width: 100%;
  display: flex;
  white-space: normal;
  overflow-x: auto;
  width: inherit;
`

export const LeftPara = styled.p`
  font-size: 15px;
  color: #ffffff;
  overflow: hidden; /* Hide any content that overflows the container */
  white-space: normal;
  line-height: 1.33;
`

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 40px;
`

export const RightSubCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-shadow: 1px 1px 3px 1px lightgrey;
`

export const RightMainHead = styled.h1`
  font-size: 30px;
  color: black;
  margin-bottom: 30px;
`

export const Input = styled.input`
  outline: none;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 1px 1px 3px 1px lightgrey;
  border: none;
`
