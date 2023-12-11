export default function TicketSelection({ ticket, setTicket, accommodation, setAccommodation, StyledTypography, StyledParagraph, Row, BoxButton, ConfirmButton, setScreen }) {
    const totalPrice = (ticket.type === 'Presencial') ? (ticket.price + accommodation.price) : ticket.price;

    function orderFinished() {
        setScreen("Payments")
    };

    return (
        <>
            <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
            <StyledParagraph>Primeiro, escolha sua modalidade de ingresso</StyledParagraph>
            <Row>
                <BoxButton onClick={() => { setTicket({ type: 'Presencial', price: 250 }); ('Presencial') }} selected={ticket.type === 'Presencial'}>
                    <p>Presencial</p>
                    <span>R$ 250</span>
                </BoxButton>
                <BoxButton onClick={() => { setTicket({ type: 'Online', price: 100 }); ('Online') }} selected={ticket.type === 'Online'}>
                    <p>Online</p>
                    <span>R$ 100</span>
                </BoxButton>
            </Row >

            {(ticket.type === 'Presencial') ?
                <>
                    <StyledParagraph StyledParagraph > Ótimo! Agora escolha sua modalidade de hospedagem</StyledParagraph>
                    <Row>
                        <BoxButton onClick={() => { setAccommodation({ type: 'Sem Hotel', price: 0 }); ('Presencial') }} selected={accommodation.type === 'Sem Hotel'}>
                            <p>Sem Hotel</p>
                            <span>+ R$ 0</span>
                        </BoxButton>
                        <BoxButton onClick={() => { setAccommodation({ type: 'Com Hotel', price: 350 }); ('Presencial') }} selected={accommodation.type === 'Com Hotel'}>
                            <p>Com Hotel</p>
                            <span>+ R$ 350</span>
                        </BoxButton>
                    </Row>
                </> : <></>
            }

            {((ticket.type === 'Presencial' && accommodation.type) || ticket.type === 'Online') ?
                <>
                    <StyledParagraph>Fechado! O total ficou em <b>R$ {totalPrice}</b>. Agora é só confirmar:</StyledParagraph>
                    <ConfirmButton onClick={() => orderFinished()}>RESERVAR INGRESSO</ConfirmButton>
                </> : <></>
            }
        </>
    )
}