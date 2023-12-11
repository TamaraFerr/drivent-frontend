import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

export default function PaymentConfirmedMessage () {
    return (
        <StyledContainer>
            <BsCheckCircleFill size = {35} color = "#48B854" style = {{ marginRight: '10px' }} />
            <StyledPhrase><b>Pagamento confirmado!</b>
            <br />Prossiga para escolha de hospedagem e atividades</StyledPhrase>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    border: none;
`;

const StyledPhrase = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    b {
        font-weight: 700;
    }
`;

// component implementation tag: <PaymentConfirmedMessage />