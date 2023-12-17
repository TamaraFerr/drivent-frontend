import styled from 'styled-components';
import Card from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function CreditCard({ number, setNumber, name, setName, expirationDate, setExpirationDate, cvv, setCvv, focus, setFocus }) {
  return (
    <CardContainer>
      <Card
        number={number}
        name={name}
        expiry={expirationDate}
        cvv={cvv}
        focused={focus}
      />
      <form>
        <div className="form-group mb-3 mt-4">
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter number"
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="tel"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="tel"
              name="expiry"
              value={expirationDate}
              placeholder="Enter expiry date"
              onChange={e => setExpirationDate(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
          </div>
          <div className="col-6">
            <input
              type="tel"
              name="cvv"
              value={cvv}
              placeholder="Enter cvv"
              onChange={e => setCvv(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
          </div>
        </div>
      </form>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 600px;
  height: 180px;
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  input {
    width: 250px;
    height: 30px;
    margin: 5px;
  }
`;