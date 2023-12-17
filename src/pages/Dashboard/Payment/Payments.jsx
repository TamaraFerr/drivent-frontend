import { useState } from "react";
import CreditCard from "../../../components/CreditCard/CreditCard";
import { number as cardNumberValidator } from 'card-validator';
import PaymentConfirmedMessage from "../../../components/PaymentConfirmed/PaymentConfirmedMessage";
import { postPayment } from "../../../services/paymentApi";

export default function Payments({ userData, userTicket, setUserTicket, StyledTypography, StyledParagraph, Row, SummaryBox, ConfirmButton }) {
    const [issuer, setIssuer] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [focus, setFocus] = useState('');
    const cardProps = { issuer, setIssuer, number, setNumber, name, setName, expirationDate, setExpirationDate, cvv, setCvv, focus, setFocus }

    async function confirmPayment() {
        const cardNumberInfo = cardNumberValidator(number);
        if (cardNumberInfo.card && cardNumberInfo.isValid) {
            setIssuer(cardNumberInfo.card.type);

            const paymentBody = {
                ticketId: userTicket.id,
                cardData: { issuer: cardNumberInfo.card.type, number, name, expirationDate, cvv }
            };
            try {
                await postPayment(paymentBody, userData.token);
                setUserTicket({...userTicket, status: "PAID"});
            } catch (err) {
                console.error('Error while confirming payment:', err);
            }
        }
    }

    return (
        <>
            <StyledTypography variant="h4">Ingresso Pagamento</StyledTypography>
            <StyledParagraph>Ingresso escolhido</StyledParagraph>
            <Row>
                <SummaryBox>
                    <p>{userTicket.TicketType.name}</p>
                    <span>R$ {userTicket.TicketType.price / 100} </span>
                </SummaryBox>
            </Row>

            <StyledParagraph>Pagamento</StyledParagraph>
            {userTicket.status === "PAID" ?
                <PaymentConfirmedMessage />
                : userTicket.status === "RESERVED" ?
                    <>
                        <CreditCard {...cardProps} />
                        <ConfirmButton onClick={() => confirmPayment()}>CONFIRMAR PAGAMENTO</ConfirmButton>
                    </>
                    : <></>
            }
        </>
    )
}