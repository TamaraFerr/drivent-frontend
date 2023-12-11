import { useContext, useEffect, useState } from "react"
import UserContext from "../../../contexts/UserContext";
import { getPersonalInformations } from "../../../services/enrollmentApi";
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TicketSelection from "./TicketSelection";
import Payments from "./Payments";
import api from '../../../services/api';

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [enrollment, setEnrollment] = useState(null);
  const [ticket, setTicket] = useState({ type: '', price: 0 });
  const [accommodation, setAccommodation] = useState({ type: '', price: 0 });
  const [screen, setScreen] = useState('TicketSelection');
  const [finished, setFinished] = useState(false)
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const screenProps = { ticket, setTicket, accommodation, setAccommodation, StyledTypography, StyledParagraph, Row, BoxButton, SummaryBox, ConfirmButton, setFinished, setScreen, paymentConfirmed, setPaymentConfirmed };

  useEffect(() => {
    async function verifyEnrollment() {
      try {
        const enroll = await getPersonalInformations(userData.token);
        setEnrollment(enroll);

        // teste:
        const response = await api.get('/tickets/types', {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        console.log(response);
      } catch (err) {
        console.error('Error while verifying enrollment:', err);
      }
    }

    verifyEnrollment();
  }, []);

  console.log(finished)

  if (!enrollment) {
    return (<StyledMissingInfo>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</StyledMissingInfo>)
  } else if (screen === "TicketSelection") {
    return (<TicketSelection{...screenProps} />)
  } else if (screen === "Payments") {
    return (<Payments {...screenProps} />)
  } else {
    return (<></>)
  }
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledMissingInfo = styled.p`
  color: #8E8E8E;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  margin: 0;
  height: 60vh;
  display: grid;
  place-items: center;

  b {
    font-weight: 700;
  }
`;
const StyledParagraph = styled.p`
  color: #8E8E8E;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  margin-bottom: 17px;
  b {
    font-weight: 700;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 43px;
`;

const BoxButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 145px;
  border-radius: 20px;
  ${(props) => (
    props.selected ?
      `
      border: none;
      background-color: #FFEED2;
      `
      :
      `
      border: 1px solid #CECECE;
      background-color: white;
      `
  )}

  p {
  color: #454545;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  margin-bottom: 3px;
  }

  span {
  color: #898989;
  font-weight: 400;
  font-size: 14px;
  line-height: 14.61px;
  }
`;

const SummaryBox = styled.button`
  cursor: pointer;
  width: 290px;
  height: 108px;
  border-radius: 20px;
  border: none;
  background-color: #FFEED2;
      
  p {
  color: #454545;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  margin-bottom: 3px;
  }

  span {
  color: #898989;
  font-weight: 400;
  font-size: 14px;
  line-height: 14.61px;
  }
`;

const ConfirmButton = styled.button`
  cursor: pointer;
  background-color: #E0E0E0;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  border: none;
  height: 37px;
  padding: 10px 12px;
  color: black;
  font-weight: 400;
  font-size: 14px;
  line-height: 14.61px;
`;