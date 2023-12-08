export default function Buying({ ingresso, modalidade, setModalidade, setIngresso, hospedagem, setHospedagem, StyledTypography, StyledParagraph, Row, BoxButton, ConfirmButton }) {
    return (
        <>
            <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
            <StyledParagraph>Primeiro, escolha sua modalidade de ingresso</StyledParagraph>
            {modalidade ? <>
                <Row>
                    <BoxButton onClick={() => {setIngresso({ modalidade: 'Presencial', valor: 250 }); setModalidade('Presencial')}} selected={ingresso.modalidade === 'Presencial'}>
                        <p>Presencial</p>
                        <span>R$ 250</span>
                    </BoxButton>
                    <BoxButton onClick={() => {setIngresso({ modalidade: 'Online', valor: 100 }); setModalidade('Online')}} selected={ingresso.modalidade === 'Online'}>
                        <p>Online</p>
                        <span>R$ 100</span>
                    </BoxButton>
                </Row >

                {
                    modalidade === 'Online' ? <>
                        <StyledParagraph>Fechado! O total ficou em <b>R$ {ingresso.valor}</b>. Agora é só confirmar:</StyledParagraph>
                        <ConfirmButton onClick={() => alert("Avançar p/ Tela de Pagamento!")}>RESERVAR INGRESSO</ConfirmButton>
                    </> : <></>
                }

                {modalidade === 'Presencial' ? 
                    <>
                        <StyledParagraph StyledParagraph > Ótimo! Agora escolha sua modalidade de hospedagem</StyledParagraph>
                        <Row>
                            <BoxButton onClick={() => {setHospedagem({ modalidade: 'Sem Hotel', valor: 0 }); setModalidade('Presencial')}} selected={hospedagem.modalidade === 'Sem Hotel'}>
                                <p>Sem Hotel</p>
                                <span>+ R$ 0</span>
                            </BoxButton>
                            <BoxButton onClick={() => {setHospedagem({ modalidade: 'Com Hotel', valor: 350 }); setModalidade('Presencial')}} selected={hospedagem.modalidade === 'Com Hotel'}>
                                <p>Com Hotel</p>
                                <span>+ R$ 350</span>
                            </BoxButton>
                        </Row>

                        {
                            hospedagem.modalidade ? <>
                                <StyledParagraph>Fechado! O total ficou em <b>R$ {ingresso.valor + hospedagem.valor}</b>. Agora é só confirmar:</StyledParagraph>
                                <ConfirmButton onClick={() => alert("Avançar p/ Tela de Pagamento!")}>RESERVAR INGRESSO</ConfirmButton>
                            </> : <></>
                        }
                    </> : <></>
                }
            </> : <></>
            }
        </>
    )
}