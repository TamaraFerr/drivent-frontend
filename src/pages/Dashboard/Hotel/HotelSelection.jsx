export default function HotelSelection({hotel, setHotel, selectedHotel, setSelectedHotel, StyledTypography, StyledParagraph, Row, HotelBoxButton}) {
    
    function hotelSelected() {
        setSelectedHotel(true);
    }
    
    return  (
        <>
            <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
            <StyledParagraph>Primeiro, escolha seu hotel</StyledParagraph>
            <Row>
                <HotelBoxButton onClick={() => {setHotel({name: 'Driven Resort', vacancies: '103'}); hotelSelected()}} selected={hotel.name === 'Driven Resort'}>
                    <img src="https://www.hoteisdeluxobrasil.com.br/wp-content/uploads/2020/11/capa-42.jpg"/>
                    <h1>Driven Resort</h1>

                    <p><strong>Tipos de acomodação:</strong></p>
                    <span>Single e Double</span>

                    <p><strong>Vagas disponíveis:</strong></p>
                    <span>103</span>
                </HotelBoxButton>

                <HotelBoxButton onClick={() => {setHotel({name: 'Driven Palace', vacancies: '103'}); hotelSelected()}} selected={hotel.name === 'Driven Palace'}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/The_Westin_Palace_Madrid.jpg"/>
                    <h1>Driven Palace</h1>

                    <p><strong>Tipos de acomodação:</strong></p>
                    <span>Single, Double e Triple</span>

                    <p><strong>Vagas disponíveis:</strong></p>
                    <span>19</span>
                </HotelBoxButton>

                <HotelBoxButton onClick={() => {setHotel({name: 'Driven World', vacancies: '103'}); hotelSelected()}} selected={hotel.name === 'Driven World'}>
                    <img src="https://s.abcnews.com/images/Travel/HT_europa_park_jef_1500610_16x9_992.jpg"/>
                    <h1>Driven World</h1>

                    <p><strong>Tipos de acomodação:</strong></p>
                    <span>Single e Double</span>

                    <p><strong>Vagas disponíveis:</strong></p>
                    <span>56</span>
                </HotelBoxButton>
            </Row>
        </>
    )

   
}