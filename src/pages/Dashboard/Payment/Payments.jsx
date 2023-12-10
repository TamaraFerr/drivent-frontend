import CreditCard from "../../../components/CreditCard/CreditCad";

export default function Payments({ ingresso, setIngresso, hospedagem, setHospedagem, StyledTypography, StyledParagraph, Row, SummaryBox, ConfirmButton }) {
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
                <Row>
                    <CreditCard/>
                </Row>
        </>
    )
}