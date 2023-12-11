export default function TicketSelection({ ticket, setTicket, accommodation, setAccommodation, StyledTypography, StyledParagraph, Row, BoxButton, ConfirmButton, setScreen }) {
    const totalPrice = (ticket.type === 'On-site')? (ticket.price + accommodation.price) : ticket.price ;

    function orderFinished() {
    setScreen("Payments")
    };

    return (
        <>
            <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
            <StyledParagraph>Primeiro, escolha sua type de ingresso</StyledParagraph>
            <Row>
                <BoxButton onClick={() => { setTicket({ type: 'On-site', price: 250 }); ('On-site') }} selected={ticket.type === 'On-site'}>
                    <p>Presencial</p>
                    <span>R$ 250</span>
                </BoxButton>
                <BoxButton onClick={() => { setTicket({ type: 'Online', price: 100 }); ('Online') }} selected={ticket.type === 'Online'}>
                    <p>Online</p>
                    <span>R$ 100</span>
                </BoxButton>
            </Row >

            {(ticket.type === 'On-site') ?
                <>
                    <StyledParagraph StyledParagraph > Ótimo! Agora escolha sua type de hospedagem</StyledParagraph>
                    <Row>
                        <BoxButton onClick={() => { setAccommodation({ type: 'Without Hotel', price: 0 }); ('On-site') }} selected={accommodation.type === 'Without Hotel'}>
                            <p>Sem Hotel</p>
                            <span>+ R$ 0</span>
                        </BoxButton>
                        <BoxButton onClick={() => { setAccommodation({ type: 'With Hotel', price: 350 }); ('On-site') }} selected={accommodation.type === 'With Hotel'}>
                            <p>Com Hotel</p>
                            <span>+ R$ 350</span>
                        </BoxButton>
                    </Row>
                </> : <></>
            }

            {((ticket.type === 'On-site' && accommodation.type) || ticket.type === 'Online') ?
                <>
                    <StyledParagraph>Fechado! O total ficou em <b>R$ {totalPrice}</b>. Agora é só confirmar:</StyledParagraph>
                    <ConfirmButton onClick={() => orderFinished()}>RESERVAR INGRESSO</ConfirmButton>
                </> : <></>
            }
        </>
    )
}