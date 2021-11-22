import { FormEvent, useState } from 'react';
import { Form } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api, config } from '../../../services/api';
import TableCell from '@mui/material/TableCell';
import { FormGroup, Input } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Event {
  id_evento?: string;
  cod_sala: number;
  cod_usuario: string;
  data_evento: string;
  descricao_evento: string;
  titulo_evento: string;
}

export const ModalEvents: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [event, setEvent] = useState<Event>({} as Event);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(event, {
      [e.target.name]: e.target.value,
    });

    setEvent(aux);
  }

  function createEvent(e: FormEvent): void {
    e.preventDefault()

    if (event.id_evento) {
      alert(`Evento já existe`)
    }
    else if (!event.id_evento) {
      try {
        api
          .post<Event>(`/events`, event, config)
          .then(response => alert(`Inserção com sucesso`))
        setEvent({} as Event);
        onRequestClose(); 
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
      <>
        <FormGroup row style={{display: "flex", justifyContent: "space-between", margin: '0px 12px'}} onClick={() => onRequestClose()}>
          <h2>Cadastrar</h2>
          <GrClose size={20} />
        </FormGroup>
        <FormGroup style={{ fontFamily: "Roboto" }}>
          <TableCell >
            <Input
              fullWidth
              type="text"
              name="titulo_evento"
              placeholder="Título "
              defaultValue={event.titulo_evento}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="descricao_evento"
              placeholder="Descrição"
              defaultValue={event.descricao_evento}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="data_evento"
              placeholder="Data  dd/mm/aaaa"
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="cod_usuario"
              placeholder="Código usuário"
              defaultValue={event.cod_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="number"
              name="cod_sala"
              defaultValue={event.cod_sala}
              placeholder="Número da sala"
              onChange={handleChange}
            />
          </TableCell>
        </FormGroup>
        <Form>
          <button onClick={createEvent} type="submit">
            Cadastrar
          </button>
        </Form>
      </>
    </Modal >
  )
}