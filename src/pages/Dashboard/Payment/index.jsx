import { useContext, useEffect, useState } from "react"
import UserContext from "../../../contexts/UserContext";
import { getPersonalInformations } from "../../../services/enrollmentApi";
import { toast } from 'react-toastify';

export default function Payment() {
  const [enrollment, setEnrollment] = useState(null);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function verifyEnrollment() {
      try {
        const enroll = await getPersonalInformations(userData.token);
        setEnrollment(enroll);
      } catch(err) {
        toast('Erro desconhecido.');
      }
    }
    
    verifyEnrollment();
  }, []);

  return (
    <>
      {enrollment ? <p>Ingresso e Pagamento</p>
        : <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      }
    </>
  )
}
