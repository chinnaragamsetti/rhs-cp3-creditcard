// Write your code here
import {useState} from 'react'
import {
  MainCont,
  LeftCont,
  LeftSubCont,
  LeftMainHead,
  LeftNumber,
  LeftName,
  LeftPara,
  RightCont,
  Input,
  RightSubCont,
  RightMainHead,
} from './styledComponents'

const CreditCard = () => {
  const [userName, setName] = useState('')
  const [userNumber, setNumber] = useState('')

  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  return (
    <MainCont>
      <LeftCont>
        <LeftMainHead>CREDIT CARD</LeftMainHead>
        <LeftSubCont data-testid="creditCard">
          <LeftNumber>{userNumber}</LeftNumber>
          <LeftPara>CARDHOLDER NAME</LeftPara>
          <LeftName>{userName}</LeftName>
        </LeftSubCont>
      </LeftCont>
      <RightCont>
        <RightSubCont>
          <RightMainHead>Payment Method</RightMainHead>
          <Input
            onChange={onChangeNumber}
            type="text"
            placeholder="Card Number"
          />
          <Input
            onChange={onChangeName}
            type="text"
            placeholder="Cardholder Name"
          />
        </RightSubCont>
      </RightCont>
    </MainCont>
  )
}

export default CreditCard
