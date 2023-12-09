import { useContext, useEffect, useState } from "react"
import UserContext from "../../../contexts/UserContext";
import { getPersonalInformations } from "../../../services/enrollmentApi";
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Buying from "./Buying";
import Payments from "./Payments";

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [enrollment, setEnrollment] = useState(null);
  const [ingresso, setIngresso] = useState({ modalidade: '', valor: 0 });
  const [modalidade, setModalidade] = useState('Presencial', 'Online')
  const [hospedagem, setHospedagem] = useState({ modalidade: '', valor: 0 });
  const [screen, setScreen] = useState('Buying');
  const [finished, setFinished] = useState(false)
  const screenProps = { ingresso, setIngresso, modalidade, setModalidade,hospedagem, setHospedagem, StyledTypography, StyledParagraph, Row, BoxButton, SummaryBox, ConfirmButton, setFinished, setScreen };

  useEffect(() => {
    async function verifyEnrollment() {
      try {
        const enroll = await getPersonalInformations(userData.token);
        setEnrollment(enroll);
      } catch (err) {
        toast('Erro desconhecido.');
      }
    }

    verifyEnrollment();
  }, []);

  console.log(finished)

  if (!enrollment) {
    return <><StyledParagraph>Você precisa completar sua inscrição antes de prosseguir pra escolha de Hospedagem</StyledParagraph></>
  } else if (screen === "Buying" ) {
    return <Buying {...screenProps} />
  } else if (screen === "Payments") {
    return <Payments {...screenProps} />
  } else {
    return (<></>)
  }
}

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