import { useState } from "react";
import { PersonOutline, Person } from "react-ionicons"
import { toast } from "react-toastify";

export default function RoomSelection({privateRoom, setPrivateRoom,sharedRoom, setSharedRoom, StyledParagraph, PrivateRoomButon, SharedRoomButon, PersonIcon, ConfirmButton}) {
    const [clickCount, setClickCount] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState(null);
    
const handleRoomClick = (roomType) => {
  if (selectedRoom === roomType) {
    setSelectedRoom(null);

    if (roomType === 'Private') {
      setPrivateRoom({ ...privateRoom, occupancy: 'Empty' });
    } else {
      setSharedRoom({ ...sharedRoom, occupancy: sharedRoom.occupancy === 'Full' ? 'Empty' : 'Full' });
    }
  } else {
    setSelectedRoom(roomType);

    if (roomType === 'Private') {
      setPrivateRoom({ ...privateRoom, occupancy: 'Full' });
    } else {
      if (sharedRoom.occupancy === 'Empty' && clickCount < 3) {
        setClickCount((prevCount) => prevCount + 1);
      }
      setSharedRoom({ ...sharedRoom, occupancy: 'Full' });
    }
  }
};
    const handleReservation = () => {
      if(privateRoom.occupancy === 'Empty' || sharedRoom.occupancy === 'Empty'){
        toast('Quarto reservado com sucesso!')
        
      }
      else{
        toast('Todos os quartos estão ocupados. Escolha outro quarto.')
      }
    }

  return (
      <>
        <StyledParagraph>Ótima pedida! Agora escolha seu quarto:</StyledParagraph>
          <PrivateRoomButon 
             onClick={() => handleRoomClick('Private')}
             selected={selectedRoom === 'Private'}
             disabled={selectedRoom === 'Shared'}
            >101
              {privateRoom.occupancy === 'Full' ? (
                <Person fontSize="27px" color="#8C8C8C" style={{ marginLeft: '10px' }} />
                ) : (
                <PersonOutline fontSize="27px" color="black" style={{ marginLeft: '10px' }} />
                  )
              }
          </PrivateRoomButon>

        <SharedRoomButon 
            onClick={() => handleRoomClick('Shared')}
            selected={selectedRoom === 'Shared'}
            disabled={selectedRoom === 'Private' || clickCount >= 3}
            >
          10
          <PersonIcon>
            {Array.from({ length: 3 }).map((_, index) => (
              index < clickCount ? (
                <Person key={index} fontSize="27px" color="#FF4791" style={{ marginLeft: '10px' }} />
              ) : (
                <PersonOutline key={index} fontSize="27px" color="black" style={{ marginLeft: '10px' }} />
              )
            )).reverse() 
            }
          </PersonIcon>
        </SharedRoomButon>
    
        {(sharedRoom.occupancy === 'Full' || privateRoom.occupancy === 'Full') && (
        <ConfirmButton onClick={handleReservation}>RESERVAR QUARTO</ConfirmButton>
        )}        
    </>
  )
}