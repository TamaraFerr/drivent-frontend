import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { getPersonalInformations } from "../../../services/enrollmentApi";
import HotelSelection from "./HotelSelection";
import RoomSelection from "./RoomSelection";
import useLocalStorage from "../../../hooks/useLocalStorage";
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [enrollment, setEnrollment] = useState(null);
  const [paymentData, setPaymentData] = useLocalStorage(userData.user.email, { confirm: false, type: '', price: 0 });
  const [hotel, setHotel] = useState({ name: '', vacancies: ''});
  const [selectedHotel, setSelectedHotel] = useState(false)
  const [privateRoom, setPrivateRoom] = useState({ type: 'Private', occupancy: 'Empty' });
  const [sharedRoom, setSharedRoom] = useState({ type: 'Shared', occupancy: 'Empty' });

  const screenProps = {hotel, setHotel,selectedHotel, setSelectedHotel, privateRoom, setPrivateRoom, sharedRoom, setSharedRoom, StyledTypography, StyledParagraph, Row, HotelBoxButton, PrivateRoomButon, SharedRoomButon, PersonIcon, ConfirmButton}

  useEffect(() => {
    async function verifyEnrollment() {
      try {
        const enroll = await getPersonalInformations(userData.token);
        setEnrollment(enroll);
      } catch (err) {
        console.error('Error while verifying enrollment:', err);
      }
    }

    verifyEnrollment();
  }, []);

  if(!enrollment) {
    return (<StyledMissingInfo>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</StyledMissingInfo>)
  } 
  else if (!paymentData.confirm ) { 
    return (<StyledMissingInfo>Você precisa ter confirmado o pagamento antes de fazer a escolha de hospedagem</StyledMissingInfo>)
  }
  else if (paymentData.confirm) { 
    return (
        <>
        <HotelSelection {...screenProps} />
        {selectedHotel && <RoomSelection {...screenProps}
         />}
        </>
    )
  } 
  else {
    return (<></>)
  }
}
  
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

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
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

const HotelBoxButton = styled.button`
  cursor: pointer;
  width: 196px;
  height: 264px;
  border-radius: 20px;
  padding: 16px;
  ${(props) => (
    props.selected ?
      `
      border: none;
      background-color:  #E0E0E0;
      `
      :
      `
      border: none;
      background-color: #FFEED2;
      `
  )}
  h1 {
  color: #343434;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  margin-bottom: 10px;
  }
  p {
    color: #3C3C3C;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.06px;
  margin-bottom: 3px;
  }

  span {
  color: #3C3C3C;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
  margin-bottom: 10px;
  display: block;
  }

  img {
  width: 168px;
  height: 109px;
  border-radius: 5px;
  margin-bottom: 10px;
  }
`
const PrivateRoomButon = styled.button`
  cursor: pointer;
  width: 190px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;


  ${(props) => (
    props.selected ?
      `
      background: rgba(206, 206, 206, 0.5);
      color: #9D9D9D;
      `
      :
      `
     background: white;
      `
  )}

`

const SharedRoomButon = styled.button`
  cursor: pointer;
  width: 190px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;


  ${(props) => (
    props.selected ?
      `
      background: #FFEED2
      `
      :
      `
     background: white;
      `
  )}

`

const PersonIcon = styled.div`
  display: flex;
  margin: 0px;
`

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
  margin-top: 15px;
`;