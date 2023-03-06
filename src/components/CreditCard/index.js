import {useState} from 'react'
import {
  MainContainer,
  CreditCardCont,
  Heading,
  CreditCardImg,
  CardNumber1,
  Desc,
  FormCont,
  Name,
  Form,
  Cont,
  Head,
  InputEl,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const onChangeCardNumber = event => setCardNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <CreditCardCont>
        <Heading>CREDIT CARD</Heading>
        <CreditCardImg data-testid="creditCard">
          <Cont>
            <CardNumber1>{cardNumber}</CardNumber1>
            <Desc>CARDHOLDER NAME</Desc>
            <Name>{name}</Name>
          </Cont>
        </CreditCardImg>
      </CreditCardCont>
      <FormCont>
        <Form>
          <Head>Payment Method</Head>
          <InputEl
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <InputEl
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </Form>
      </FormCont>
    </MainContainer>
  )
}

export default CreditCard
