import { useState } from "react";
import { PersonOutline, Person } from "react-ionicons"

export default function RoomSelection({privateRoom, setPrivateRoom,sharedRoom, setSharedRoom, StyledParagraph, PrivateRoomButon, SharedRoomButon, PersonIcon, ConfirmButton}) {
    const [clickCount, setClickCount] = useState(0);

    const handlePrivateRoomClick = () => {
        setPrivateRoom({ ...privateRoom, occupancy: 'Full' });
      };
    
      const handleSharedRoomClick = () => {
        setClickCount((prevCount) => Math.min(prevCount + 1, 3));
        setSharedRoom({ ...sharedRoom, occupancy: 'Full' });
      };

    return (
        <>
            <StyledParagraph>Ótima pedida! Agora escolha seu quarto:</StyledParagraph>

            <PrivateRoomButon onClick={handlePrivateRoomClick} selected={privateRoom.occupancy === 'Full'}>
  101
  {privateRoom.occupancy === 'Full' ? (
    <Person fontSize="27px" color="#8C8C8C" style={{ marginLeft: '10px' }} />
  ) : (
    <PersonOutline fontSize="27px" color="black" style={{ marginLeft: '10px' }} />
  )}
</PrivateRoomButon>


<SharedRoomButon onClick={handleSharedRoomClick} selected={sharedRoom.occupancy === 'Full'}>
    10
   <PersonIcon>

  
    {Array.from({ length: 3 }).map((_, index) => (
      index < clickCount ? (
        <Person key={index} fontSize="27px" color="#FF4791" style={{ marginLeft: '10px' }} />
      ) : (
        <PersonOutline key={index} fontSize="27px" color="black" style={{ marginLeft: '10px' }} />
      )
    ))}
     </PersonIcon>
  </SharedRoomButon>

  {(sharedRoom.occupancy === 'Full' || privateRoom.occupancy === 'Full') ?
                <>
                    <ConfirmButton>RESERVAR QUARTO</ConfirmButton>
                </> : <></>
            }
        </>
    )
}