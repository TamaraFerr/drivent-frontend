import CreditCard from "../../../components/CreditCard/CreditCad";
import PaymentConfirmedMessage from "../../../components/PaymentConfirmed/PaymentConfirmedMessage";

export default function Payments({ ingresso, setIngresso, hospedagem, setHospedagem, StyledTypography, StyledParagraph, Row, SummaryBox, ConfirmButton, paymentConfirmed, setPaymentConfirmed }) {
    
    function confirmPayment() {
        setPaymentConfirmed(true)
        };
    
    return (
        <>
            <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
            <StyledParagraph>Ingresso escolhido</StyledParagraph>
                <Row>
                    <SummaryBox>
                    <p>{ingresso.modalidade === 'Online'
                    ? ingresso.modalidade
                    : `${ingresso.modalidade} + ${hospedagem.modalidade}`}</p>
                        <span>R$ {ingresso.valor + hospedagem.valor} </span>
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