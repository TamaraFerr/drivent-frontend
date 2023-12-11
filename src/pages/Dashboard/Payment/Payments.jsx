import CreditCard from "../../../components/CreditCard/CreditCad";
import PaymentConfirmedMessage from "../../../components/PaymentConfirmed/PaymentConfirmedMessage";

export default function Payments({ ticket, accommodation, StyledTypography, StyledParagraph, Row, SummaryBox, ConfirmButton, paymentConfirmed, setPaymentConfirmed }) {
    
    function confirmPayment() {
        setPaymentConfirmed(true)
        };
    
    return (
        <>
            <StyledTypography variant="h4">Ingresso Pagamento</StyledTypography>
            <StyledParagraph>Ingresso escolhido</StyledParagraph>
                <Row>
                    <SummaryBox>
                    <p>{ticket.type === 'Online'
                    ? ticket.type
                    : `${ticket.type} + ${accommodation.type}`}</p>
                        <span>R$ {ticket.price + accommodation.price} </span>
                    </SummaryBox>
                </Row>

            <StyledParagraph>Pagamento</StyledParagraph>
            {paymentConfirmed === false ?
            <>
                <CreditCard />
                <ConfirmButton onClick={() => confirmPayment()}>CONFIRMAR PAGAMENTO</ConfirmButton>
            </>
            : <PaymentConfirmedMessage />}
        </>
    )
}