import CreditCard from "../../../components/CreditCard/CreditCad";
import PaymentConfirmedMessage from "../../../components/PaymentConfirmed/PaymentConfirmedMessage";

export default function Payments({ ticket, accommodation, StyledTypography, StyledParagraph, Row, SummaryBox, ConfirmButton, paymentData, setPaymentData }) {
    let ticketType = '';
    let ticketPrice = 0;
    if (paymentData.confirm) {
        ticketType = paymentData.type;
        ticketPrice = paymentData.price;
    } else {
        ticketType = (ticket.type === 'Online')? ticket.type : `${ticket.type} + ${accommodation.type}`;
        ticketPrice = ticket.price + accommodation.price;
    }

    function confirmPayment() {
        setPaymentData({ confirm: true, type: ticketType, price: ticketPrice });
    }

    return (
        <>
            <StyledTypography variant="h4">Ingresso Pagamento</StyledTypography>
            <StyledParagraph>Ingresso escolhido</StyledParagraph>
            <Row>
                <SummaryBox>
                    <p>{ticketType}</p>
                    <span>R$ {ticketPrice} </span>
                </SummaryBox>
            </Row>

            <StyledParagraph>Pagamento</StyledParagraph>
            {paymentData.confirm ?
                <PaymentConfirmedMessage />
                :
                <>
                    <CreditCard />
                    <ConfirmButton onClick={() => confirmPayment()}>CONFIRMAR PAGAMENTO</ConfirmButton>
                </>
            }
        </>
    )
}