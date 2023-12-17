import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { getPersonalInformations } from "../../../services/enrollmentApi";
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TicketSelection from "./TicketSelection";
import Payments from "./Payments";
import { getTicketTypes, getUserTicket } from "../../../services/ticketApi";

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [enrollment, setEnrollment] = useState(null);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [userTicket, setUserTicket] = useState(null);

  const screenProps = { userData, ticketTypes, userTicket, setUserTicket, StyledTypography, StyledParagraph, Row, BoxButton, SummaryBox, ConfirmButton };

  useEffect(() => {
    async function fetchData() {
      try {
        const enrollmentPromise = getPersonalInformations(userData.token);
        const ticketsTypesPromise = getTicketTypes(userData.token);

        const [enroll, ticket_types] = await Promise.all([enrollmentPromise, ticketsTypesPromise]);
        setEnrollment(enroll);
        setTicketTypes(ticket_types);

        let user_ticket;
        try {
          user_ticket = await getUserTicket(userData.token);
          setUserTicket(user_ticket);
        } catch (err) {
          if (err.response && err.response.status === 404) {
            console.log('User ticket not found!');
          } else {
            throw err;
          }
        }

      } catch (err) {
        console.error('Error while fetching data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <></>;
  } else if (!enrollment) {
    return <StyledMissingInfo>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</StyledMissingInfo>;
  } else if (!userTicket) {
    return <TicketSelection {...screenProps} />;
  } else {
    return <Payments {...screenProps} />;
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