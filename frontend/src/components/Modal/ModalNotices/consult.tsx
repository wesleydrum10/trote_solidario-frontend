import { useState, useEffect } from 'react';
import { Container, Top } from '../stylesConsult'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import moment from 'moment';
import { FormGroup, Input, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Form } from '../stylesModal';

Modal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Notice {
  id_aviso?: string;
  cod_usuario: number;
  descricao_aviso: string;
  titulo_aviso: string;
  prazo_aviso: string;
  data_aviso: string;
  departamento_aviso: string;
}

export const ModalNoticesConsult: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [notice, setNotice] = useState<Notice>({} as Notice);
  const [notices, setNotices] = useState<Notice[]>([]);

  const [open, setOpen] = useState(false);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc0NDE5MDQsImV4cCI6MTYzNzUyODMwNCwic3ViIjoiZmZmMzY1MzQtMjFkYi00YTIzLTk3ZDctMGU4NDhkYTI4N2YxIn0.tOZadxrP_1ZIMDCGgzdQNDPBSFHXF1oyqErsxZ0y4Ag'
    }
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(notice, {
      [e.target.name]: e.target.value,
    });

    setNotice(aux);
  }

  useEffect(() => {
    try {
      api
        .get<Notice[]>(`/notices`, config)
        .then(response => setNotices(response.data))
        .catch(() => {
          console.error('Não listou os avisos')
        })
    }
    catch {
      alert(`Problema ao consultar aviso`)
    }
  }, [notice])

  function deleteNotice(id: string | undefined): void {
    const resp = window.confirm(`Confirma a exclusão do aviso ${id}`)
    if (resp) {
      try {
        api
          .delete<Notice>(`/notices/${id}`, config)
          .then(response => alert(`Remoção com sucesso `))
        setNotice({} as Notice);
      }
      catch {
        alert(`Problema ao remover aviso`)
      }
    }

  }

  function updatedingNotice(): void {

    let updateNotice = {
      cod_usuario: notice.cod_usuario,
      descricao_aviso: notice.descricao_aviso,
      titulo_aviso: notice.titulo_aviso,
      prazo_aviso: notice.prazo_aviso,
      data_aviso: notice.data_aviso,
      departamento_aviso: notice.departamento_aviso
    }

    try {
      api
        .put<Notice>(`/notices/${notice.id_aviso}`, updateNotice, config)
        .then(response => alert(`Atualização com sucesso`))
      setNotice({} as Notice)
      setOpen(false)
      onRequestClose()
    }
    catch {
      alert(`Problema ao atualizar aviso`)
    }
  }

  function updateNotice(notice: Notice | undefined): void {
    setOpen(true)

    if (notice) {
      const aux = notice
      setNotice(aux)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Top>
        <h2>Avisos</h2>
        <GrClose size={18} onClick={onRequestClose} />
      </Top>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Remover</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Prazo até</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Cod Usuário</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Departamento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notices.map(notice => (
            <TableRow key={notice.id_aviso}>
              <TableCell align="center">
                <AiOutlineCloseCircle
                  color="red"
                  fontSize={16}
                  onClick={() => deleteNotice(notice.id_aviso)}
                />
              </TableCell>
              <TableCell align="center">
                <FiEdit2 onClick={() => updateNotice(notice)} />
              </TableCell>
              <TableCell>{notice.titulo_aviso}</TableCell>
              <TableCell>{moment(new Date(notice.prazo_aviso)).format("DD/MM/YYYY")}</TableCell>
              <TableCell>{moment(new Date(notice.data_aviso)).format("DD/MM/YYYY")}</TableCell>
              <TableCell>{notice.cod_usuario}</TableCell>
              <TableCell>{notice.departamento_aviso}</TableCell>
              <TableCell>{notice.descricao_aviso}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {open && (
          <TableContainer style={{ background: "var(--backgroundBody)", borderRadius: "10px", marginTop: "10px", paddingBottom: "10px" }}>
            <Top>
              <h2>Editar</h2>
              <GrClose size={20} onClick={() => setOpen(false)} />
            </Top>
            <FormGroup style={{ fontFamily: "Roboto" }}>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Título</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="titulo_aviso"
                  placeholder="Título "
                  defaultValue={notice.titulo_aviso}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Data</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="prazo_aviso"
                  placeholder="Prazo"
                  defaultValue={moment(new Date(notice.prazo_aviso)).format("DD/MM/YYYY")}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Prazo</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="data_aviso"
                  placeholder="Data"
                  defaultValue={moment(new Date(notice.data_aviso)).format("DD/MM/YYYY")}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Código usuário</Typography>
                <Input
                  fullWidth
                  type="number"
                  name="cod_usuario"
                  placeholder="Código usuário"
                  defaultValue={notice.cod_usuario}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Departamento</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="departamento_aviso"
                  defaultValue={notice.departamento_aviso}
                  placeholder="Departamento"
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Descrição</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="descricao_aviso"
                  defaultValue={notice.descricao_aviso}
                  placeholder="Descrição"
                  onChange={handleChange}
                />
              </TableCell>
            </FormGroup>
            <Form>
              <button onClick={updatedingNotice} type="submit">
                Atualizar
              </button>
            </Form>
          </TableContainer>
        )}
      </TableContainer>
    </Modal >
  )
}
