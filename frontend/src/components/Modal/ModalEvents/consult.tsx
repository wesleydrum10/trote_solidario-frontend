import { FormEvent, useState, useContext, useEffect } from 'react';
import { Container, Top } from '../stylesConsult'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

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

export const ModalEventsConsult: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [event, setEvent] = useState<Events>({} as Events);
  const [events, setEvents] = useState<Events[]>([
    // {
    //   id_evento: "1",
    //   cod_sala: 1,
    //   cod_usuario: 22993,
    //   data_evento: '12/12/2021',
    //   descricao_evento: 'Entrega de presentes de natal',
    //   titulo_evento: 'Natal solidário',
    // },
  ]);
  
  const config = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }

  useEffect(() => {
    try {
      api
        .get<Events[]>(`/events`, config)
        .then(response => setEvents(response.data))
        .catch(() => {
          console.error('Não listou os eventos')
        })

    }
    catch {
      alert(`Problema ao consultar eventos`)
    }
  }, [])


  function createEvent(): void {
    if (event.id_evento) {
      alert(`Evento já existe`)
    }
    else if (!event.id_evento) {
      try {
        api
          .post<Events>(`/events`, event, config)
          .then(response => alert(`Inserção com sucesso`))
        setEvent({} as Events);
      }
      catch {
        alert(`Problema ao inserir evento`)
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <Top>
          <h2>Eventos</h2>
          <GrClose size={20} onClick={onRequestClose} />
        </Top>
        <table>
          <thead>
            <tr>
              <th>Remover</th>
              <th>Editar</th>
              <th>Título</th>
              <th>Sala</th>
              <th>Cod Usuário</th>
              <th>Data</th>
              <th><span>Descrição</span></th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id_evento}>
                <td><AiOutlineCloseCircle color="red" fontSize={20} /></td>
                <td><FiEdit2 /></td>
                <td>{event.titulo_evento}</td>
                <td>{event.cod_sala}</td>
                <td>{event.cod_usuario}</td>
                <td>{event.data_evento}</td>
                <td>{event.descricao_evento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Modal >
  )
}