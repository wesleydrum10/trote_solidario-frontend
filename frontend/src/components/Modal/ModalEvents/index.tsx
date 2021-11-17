import { FormEvent, useState, useContext } from 'react';
import { Container, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Events {
  id_evento?: string; 
  cod_sala: number;
  cod_usuario: number;
  data_evento: string;
  descricao_evento: string;
  titulo_evento: string;
}

export const ModalEvents: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [event, setEvent] = useState<Events>({} as Events);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }


  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux =  Object.assign(event, {
      [e.target.name]: e.target.value,
    });

    setEvent(aux);
  }
  
  function createEvent(): void {
    if (event.id_evento){
      alert(`Problema ao adicionar usuário`)
    }
    else if (!event.id_evento){
      try {
        api
          .post<Events>(`/events`, event, config)
          .then (response => alert(`Inserção com sucesso`))
        setEvent({} as Events);
      }
      catch {
        alert(`Problema ao inserir usuário`)
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Container >
        <Top>
          <h2>Cadastrar Evento</h2>
          <GrClose onClick={onRequestClose} size={20} />
        </Top>
        <input
          type="text"
          name="titulo_evento"
          placeholder="Título "
          value={event.titulo_evento}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao_evento"
          placeholder="Descrição"
          value={event.descricao_evento}
          onChange={handleChange}
        />
        <input
          type="text"
          name="data_evento"
          placeholder="Data"
          value={event.data_evento}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cod_usuario"
          placeholder="Código usuário"
          value={event.cod_usuario}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cod_sala"
          placeholder="Número da sala"
          value={event.cod_sala}
          onChange={handleChange}
        />
        <button onClick={createEvent} type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal >
  )
}