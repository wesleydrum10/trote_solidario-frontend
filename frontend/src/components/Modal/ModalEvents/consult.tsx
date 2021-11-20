import { useState, useEffect } from 'react';
import { Top } from '../stylesConsult'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { Form } from '../stylesModal';
import moment from 'moment';
import { FormGroup, Input, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
// import { useEvents } from '../../../hooks/useEvent'

Modal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Event {
  id_evento?: string;
  cod_sala: number;
  cod_usuario: number;
  data_evento: string;
  descricao_evento: string;
  titulo_evento: string;
}

export const ModalEventsConsult: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [event, setEvent] = useState<Event>({} as Event);
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc0MjY5NzYsImV4cCI6MTYzNzUxMzM3Niwic3ViIjoiZmZmMzY1MzQtMjFkYi00YTIzLTk3ZDctMGU4NDhkYTI4N2YxIn0.5zxm7FInoyIoInzbSz0RTHZEzq2c2mNUYUfDuAhYJro'
    }
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(event, {
      [e.target.name]: e.target.value,
    });

    setEvent(aux);
  }

  useEffect(() => {
    try {
      api
        .get<Event[]>(`/events`, config)
        .then(response => setEvents(response.data))
        .catch(() => {
          console.error('Não listou os eventos')
        })
    }
    catch {
      alert(`Problema ao consultar eventos`)
    }
  }, [event])

  function deleteEvent(id: string | undefined): void {
    const resp = window.confirm(`Confirma a exclusão do evento ${id}`)
    if (resp) {
      try {
        api
          .delete<Event>(`/events/${id}`, config)
          .then(response => alert(`Remoção com sucesso `))
        setEvent({} as Event);
      }
      catch {
        alert(`Problema ao remover evento`)
      }
    }

  }

  function updatedingEvent(): void {

    let updateEvent = {
      cod_sala: event.cod_sala,
      cod_usuario: event.cod_usuario,
      data_evento: event.data_evento,
      descricao_evento: event.descricao_evento,
      titulo_evento: event.titulo_evento
    }

    try {
      api
        .put<Event>(`/events/${event.id_evento}`, updateEvent, config)
        .then(response => alert(`Atualização com sucesso`))
      setEvent({} as Event)
      onRequestClose()
      setOpen(false)
    }
    catch {
      alert(`Problema ao atualizar evento`)
    }
  }

  function updateEvent(evento: Event | undefined): void {
    setOpen(true)

    if (evento) {
      const aux = evento
      setEvent(aux)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Top>
        <h2>Eventos</h2>
        <GrClose size={18} onClick={onRequestClose} />
      </Top>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Remover</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Sala</TableCell>
            <TableCell>Cod Usuário</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(event => (
            <TableRow key={event.id_evento}>
              <TableCell align="center">
                <AiOutlineCloseCircle
                  color="red"
                  fontSize={16}
                  onClick={() => deleteEvent(event.id_evento)}
                />
              </TableCell>
              <TableCell align="center">
                <FiEdit2 onClick={() => updateEvent(event)} />
              </TableCell>
              <TableCell>{event.titulo_evento}</TableCell>
              <TableCell>{event.cod_sala}</TableCell>
              <TableCell>{event.cod_usuario}</TableCell>
              <TableCell>{moment(new Date(event.data_evento)).format("DD/MM/YYYY")}</TableCell>
              <TableCell>{event.descricao_evento}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {open && (
          <TableContainer style={{background: "var(--backgroundBody)", borderRadius: "10px", marginTop: "10px", paddingBottom: "10px"}}>
            <Top>
              <h2>Editar</h2>
              <GrClose size={20} onClick={() => setOpen(false)} />
            </Top>
            <FormGroup row style={{ fontFamily: "Roboto" }}>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Título</Typography>
                <Input
                  type="text"
                  name="titulo_evento"
                  placeholder="Título "
                  defaultValue={event.titulo_evento}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Descrição</Typography>
                <Input
                  type="text"
                  name="descricao_evento"
                  placeholder="Descrição"
                  defaultValue={event.descricao_evento}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Data</Typography>
                <Input
                  type="text"
                  name="data_evento"
                  placeholder="Data"
                  defaultValue={moment(new Date(event.data_evento)).format("DD/MM/YYYY")}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Código usuário</Typography>
                <Input
                  type="number"
                  name="cod_usuario"
                  placeholder="Código usuário"
                  defaultValue={event.cod_usuario}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Sala</Typography>
                <Input
                  type="number"
                  name="cod_sala"
                  defaultValue={event.cod_sala}
                  placeholder="Número da sala"
                  onChange={handleChange}
                />
              </TableCell>
            </FormGroup>
            <Form>
              <button onClick={updatedingEvent} type="submit">
                Atualizar
              </button>
            </Form>
          </TableContainer>
        )}
      </TableContainer>
    </Modal >
  )
}