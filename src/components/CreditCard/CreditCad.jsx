import styled from 'styled-components';
import React from "react";
import { useState } from "react";
import Card from 'react-credit-cards-2';

export default function CreditCard(){
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <CreditCardContainer>
      <Card
        cvv={cvv}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <CreditCardInput
      type="tel"
      name="number"
      value={number}
      placeholder="Enter number"
      onChange={e=>setNumber(e.target.value)}
      onFocus={e=>setFocus(e.target.name)}
      />
      <CreditCardInput
      type="tel"
      name="name"
      value={name}
      placeholder="Enter name"
      onChange={e=>setName(e.target.value)}
      onFocus={e=>setFocus(e.target.name)}
      />
      <CreditCardInput
      type="tel"
      name="expiry"
      value={expiry}
      placeholder="Enter expiry date"
      onChange={e=>setExpiry(e.target.value)}
      onFocus={e=>setFocus(e.target.name)}
      />
      <CreditCardInput
      type="tel"
      name="cvv"
      value={cvv}
      placeholder="Enter cvv"
      onChange={e=>setCvv(e.target.value)}
      onFocus={e=>setFocus(e.target.name)}
      />
    </CreditCardContainer>

  )
}


// Credit Card sizing
const cardRatio = 1.5858;
const cardSize = '290px';

// Credit Card fonts
const nameFontSize = '17px';
const nameFontFamily = 'Consolas, Courier, monospace';
const numberFontSize = '17px';
const numberFontFamily = 'Consolas, Courier, monospace';
const validFontSize = '10px';
const expiryFontSize = '16px';
const expiryFontFamily = 'Consolas, Courier, monospace';
const cvcFontSize = '14px';
const cvcFontFamily = 'Consolas, Courier, monospace';
const cvcColor = '#222';

// Credit Card styling
const cardShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
const lightTextColor = '#fff';
const darkTextColor = '#555';
const stripeBgColor = '#2a1d16';
const signatureBackground = 'repeating-linear-gradient(0.1deg, #fff 20%, #fff 40%, #fea 40%, #fea 44%, #fff 44%)';
const defaultBackground = 'linear-gradient(25deg, #939393, #717171)';
const unknownBackground = 'linear-gradient(25deg, #999, #999)';
const backgroundTransition = 'all 0.5s ease-out';
const animateBackground = true;

// Credit Card brands
const amexBackground = 'linear-gradient(25deg, #308c67, #a3f2cf)';
const dankortBackground = 'linear-gradient(25deg, #ccc, #999)';
const dinersclubBackground = 'linear-gradient(25deg, #fff, #eee)';
const discoverBackground = 'linear-gradient(25deg, #fff, #eee)';
const mastercardBackground = 'linear-gradient(25deg, #e8e9e5, #fbfbfb)';
const visaBackground = 'linear-gradient(25deg, #0f509e, #1399cd)';
const eloBackground = 'linear-gradient(25deg, #211c18, #aaa7a2)';
const hipercardBackground = 'linear-gradient(25deg, #8b181b, #de1f27)';

// Styled Components
const CreditCardContainer = styled.div`
  width: 290px;
  height: calc(290px / 1.5858);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  color: #fff;
  background: linear-gradient(25deg, #939393, #717171);
  transition: all 0.5s ease-out;
  animation: ${props => props.animateBackground ? 'backgroundAnimation 5s infinite' : 'none'};

  @keyframes backgroundAnimation {
    0% {
      background: linear-gradient(25deg, #939393, #717171);
    }
    50% {
      background: linear-gradient(25deg, #999, #999);
    }
    100% {
      background: linear-gradient(25deg, #939393, #717171);
    }
  }
`;
const Card = styled.div`
  
`

const CreditCardInput = styled.input`
  font-size: 17px;
  font-family: Consolas, Courier, monospace;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;