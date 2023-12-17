import { useState } from "react";
import { postTicket } from "../../../services/ticketApi";

export default function TicketSelection({ userData, ticketTypes, setUserTicket, StyledTypography, StyledParagraph, Row, BoxButton, ConfirmButton }) {
    const [ticket, setTicket] = useState({ type: '', price: 0 });
    const [accommodation, setAccommodation] = useState({ type: '', price: 0 });
    const totalPrice = (ticket.type === 'Presencial') ? (ticket.price + accommodation.price) : ticket.price;

    async function orderFinished() {
        try {
            let ticketType;
            if ((ticket.type === 'Presencial') && (accommodation.type === 'Sem Hotel')) {
                ticketType = { ticketTypeId: 1 };
            } else if ((ticket.type === 'Presencial') && (accommodation.type === 'Com Hotel')) {
                ticketType = { ticketTypeId: 2 };
            } else if (ticket.type === 'Online') {
                ticketType = { ticketTypeId: 3 };
            }
            const user_ticket = await postTicket(ticketType, userData.token);
            setUserTicket(user_ticket);
        } catch (err) {
            console.error('Error while reserving ticket:', err);
        }
    }

    return (
        <>
            <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
            <StyledParagraph>Primeiro, escolha sua modalidade de ingresso</StyledParagraph>
            <Row>
                <BoxButton onClick={() => { setTicket({ type: 'Presencial', price: ticketTypes[0].price / 100 }); ('Presencial') }} selected={ticket.type === 'Presencial'}>
                    <p>Presencial</p>
                    <span>R$ {ticketTypes[0].price / 100}</span>
                </BoxButton>
                <BoxButton onClick={() => { setTicket({ type: 'Online', price: ticketTypes[2].price / 100 }); ('Online') }} selected={ticket.type === 'Online'}>
                    <p>Online</p>
                    <span>R$ {ticketTypes[2].price / 100}</span>
                </BoxButton>
            </Row >

            {(ticket.type === 'Presencial') ?
                <>
                    <StyledParagraph > Ótimo! Agora escolha sua modalidade de hospedagem</StyledParagraph>
                    <Row>
                        <BoxButton onClick={() => { setAccommodation({ type: 'Sem Hotel', price: 0 }); ('Presencial') }} selected={accommodation.type === 'Sem Hotel'}>
                            <p>Sem Hotel</p>
                            <span>+ R$ 0</span>
                        </BoxButton>
                        <BoxButton onClick={() => { setAccommodation({ type: 'Com Hotel', price: (ticketTypes[1].price / 100 - ticketTypes[0].price / 100) }); ('Presencial') }} selected={accommodation.type === 'Com Hotel'}>
                            <p>Com Hotel</p>
                            <span>+ R$ {ticketTypes[1].price / 100 - ticketTypes[0].price / 100}</span>
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